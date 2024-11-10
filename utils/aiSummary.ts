import fs from "fs";
import path from "path";
import matter from "gray-matter";
import consola from "consola";
import 'dotenv/config';

// get OpenAI Config from the environment variables
var openaiConfig = {
  baseUrl: process.env.OPENAI_BASE_URL ?? "https://api.openai.com",
  apiKey: process.env.OPENAI_API_KEY,
  prompt:
    "你是一个文章摘要生成助手，你要根据用户所提供的文章进行摘要，但你不需要提出建议和进行文本换行，同时不要直接截取文章内容，要进行提练和摘要，总计内容150字左右。",
};

if (!openaiConfig.apiKey) {
  consola.error("🌌 - 🤖 | OPENAI_API_KEY is not set");
  process.exit(1);
}

const generateAutoSummary = async (content: string): Promise<string> => {
  if (openaiConfig.baseUrl.endsWith("/")) {
    openaiConfig.baseUrl = openaiConfig.baseUrl.slice(0, -1);
  }
  const url = `${openaiConfig.baseUrl}/v1/chat/completions`;
  const prompt = [
    {
      role: "system",
      content: openaiConfig.prompt,
    },
    {
      role: "user",
      content: content,
    },
  ];

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${openaiConfig.apiKey}`,
  };

  const data = {
    model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
    messages: prompt,
    max_tokens: 300,
    temperature: 0.9,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.3,
    stop: ["\n"],
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as any;
  return result.choices[0].message.content;
};

export async function startAISummary() {
  const currentDir = process.cwd();
  const postsDir = path.join(currentDir, "pages/posts");

  const posts = fs.readdirSync(postsDir);

  const promises = posts.map(async (post) => {
    const postContent = fs.readFileSync(path.join(postsDir, post), "utf-8");
    let { data, content } = matter(postContent);

    const shouldGenerateExcerpt = data.excerpt_type === "ai";

    if (shouldGenerateExcerpt) {
      consola.log(`🌌 - 🤖 | Generating excerpt for ${post}`);
      try {
        const article = `# ${data.title}\n${content}`;
        const excerpt = await generateAutoSummary(article);
        consola.log(`🌌 - 🤖 | Generated excerpt for ${post}`);

        data.excerpt = excerpt;

        const newPostContent = matter.stringify(content, data);
        fs.writeFileSync(path.join(postsDir, post), newPostContent);
      } catch (error) {
        consola.error(`🌌 - 🤖 | Error generating excerpt for ${post}`);
        consola.error(error);
      }
    }
  });

  // Wait for all promises to resolve
  await Promise.all(promises);
}