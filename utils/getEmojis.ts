/**
 * Get emojis cdn path
 * @param cdn
 * @param types
 * @returns
 */
export function getEmojis(
  cdn = "//unpkg.com/",
  types = ["weibo", "QQ", "Coolapk"]
) {
  return types.map((type) => `${cdn}GamerNoTitle/ValineCDN/${type}/`);
}
