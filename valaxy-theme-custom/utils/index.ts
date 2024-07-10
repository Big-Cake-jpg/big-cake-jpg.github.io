
/**
 * set default img
 * @param e
 */
export function onImgError(e: Event, defaultImg = 'https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e53660cde2.webp') {
  const targetEl = e.target as HTMLImageElement
  targetEl.setAttribute('data-src', targetEl.src)
  targetEl.src = defaultImg
}