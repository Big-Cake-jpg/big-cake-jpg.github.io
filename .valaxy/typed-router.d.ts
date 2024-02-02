/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/albums/': RouteRecordInfo<'/albums/', '/albums', Record<never, never>, Record<never, never>>,
    '/albums/minecraft': RouteRecordInfo<'/albums/minecraft', '/albums/minecraft', Record<never, never>, Record<never, never>>,
    '/albums/omori': RouteRecordInfo<'/albums/omori', '/albums/omori', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/policies/privacy': RouteRecordInfo<'/policies/privacy', '/policies/privacy', Record<never, never>, Record<never, never>>,
    '/posts/2-years-anniversary': RouteRecordInfo<'/posts/2-years-anniversary', '/posts/2-years-anniversary', Record<never, never>, Record<never, never>>,
    '/posts/2023-review': RouteRecordInfo<'/posts/2023-review', '/posts/2023-review', Record<never, never>, Record<never, never>>,
    '/posts/2023-senior-high-school-entrance-examination': RouteRecordInfo<'/posts/2023-senior-high-school-entrance-examination', '/posts/2023-senior-high-school-entrance-examination', Record<never, never>, Record<never, never>>,
    '/posts/a-little-teacher': RouteRecordInfo<'/posts/a-little-teacher', '/posts/a-little-teacher', Record<never, never>, Record<never, never>>,
    '/posts/about-github-access': RouteRecordInfo<'/posts/about-github-access', '/posts/about-github-access', Record<never, never>, Record<never, never>>,
    '/posts/about-the-security-vulnerability-of-hiper': RouteRecordInfo<'/posts/about-the-security-vulnerability-of-hiper', '/posts/about-the-security-vulnerability-of-hiper', Record<never, never>, Record<never, never>>,
    '/posts/after-joined-travellings': RouteRecordInfo<'/posts/after-joined-travellings', '/posts/after-joined-travellings', Record<never, never>, Record<never, never>>,
    '/posts/after-zhongkao': RouteRecordInfo<'/posts/after-zhongkao', '/posts/after-zhongkao', Record<never, never>, Record<never, never>>,
    '/posts/apple-music-experience': RouteRecordInfo<'/posts/apple-music-experience', '/posts/apple-music-experience', Record<never, never>, Record<never, never>>,
    '/posts/backblaze-b2': RouteRecordInfo<'/posts/backblaze-b2', '/posts/backblaze-b2', Record<never, never>, Record<never, never>>,
    '/posts/bakaxl-launcher': RouteRecordInfo<'/posts/bakaxl-launcher', '/posts/bakaxl-launcher', Record<never, never>, Record<never, never>>,
    '/posts/beautify-your-vscode': RouteRecordInfo<'/posts/beautify-your-vscode', '/posts/beautify-your-vscode', Record<never, never>, Record<never, never>>,
    '/posts/build-a-hexo-blog': RouteRecordInfo<'/posts/build-a-hexo-blog', '/posts/build-a-hexo-blog', Record<never, never>, Record<never, never>>,
    '/posts/build-hypixel-boost-ip': RouteRecordInfo<'/posts/build-hypixel-boost-ip', '/posts/build-hypixel-boost-ip', Record<never, never>, Record<never, never>>,
    '/posts/build-your-minecraft-server': RouteRecordInfo<'/posts/build-your-minecraft-server', '/posts/build-your-minecraft-server', Record<never, never>, Record<never, never>>,
    '/posts/chat-prologu-by-the-windows': RouteRecordInfo<'/posts/chat-prologu-by-the-windows', '/posts/chat-prologu-by-the-windows', Record<never, never>, Record<never, never>>,
    '/posts/ddos-attack-record': RouteRecordInfo<'/posts/ddos-attack-record', '/posts/ddos-attack-record', Record<never, never>, Record<never, never>>,
    '/posts/deploy-valaxy-blog-to-cloudflare-pages': RouteRecordInfo<'/posts/deploy-valaxy-blog-to-cloudflare-pages', '/posts/deploy-valaxy-blog-to-cloudflare-pages', Record<never, never>, Record<never, never>>,
    '/posts/deploy-vuepress-v1-docs-to-vercel': RouteRecordInfo<'/posts/deploy-vuepress-v1-docs-to-vercel', '/posts/deploy-vuepress-v1-docs-to-vercel', Record<never, never>, Record<never, never>>,
    '/posts/genshin-pizza-helper': RouteRecordInfo<'/posts/genshin-pizza-helper', '/posts/genshin-pizza-helper', Record<never, never>, Record<never, never>>,
    '/posts/goodbye-npp': RouteRecordInfo<'/posts/goodbye-npp', '/posts/goodbye-npp', Record<never, never>, Record<never, never>>,
    '/posts/google-translate-unavailable': RouteRecordInfo<'/posts/google-translate-unavailable', '/posts/google-translate-unavailable', Record<never, never>, Record<never, never>>,
    '/posts/happy-mid-autumn-festival': RouteRecordInfo<'/posts/happy-mid-autumn-festival', '/posts/happy-mid-autumn-festival', Record<never, never>, Record<never, never>>,
    '/posts/hello-world': RouteRecordInfo<'/posts/hello-world', '/posts/hello-world', Record<never, never>, Record<never, never>>,
    '/posts/jsdelivr-mirror': RouteRecordInfo<'/posts/jsdelivr-mirror', '/posts/jsdelivr-mirror', Record<never, never>, Record<never, never>>,
    '/posts/launcher-develop': RouteRecordInfo<'/posts/launcher-develop', '/posts/launcher-develop', Record<never, never>, Record<never, never>>,
    '/posts/lyricease': RouteRecordInfo<'/posts/lyricease', '/posts/lyricease', Record<never, never>, Record<never, never>>,
    '/posts/maimai-newbee': RouteRecordInfo<'/posts/maimai-newbee', '/posts/maimai-newbee', Record<never, never>, Record<never, never>>,
    '/posts/mem-reduct': RouteRecordInfo<'/posts/mem-reduct', '/posts/mem-reduct', Record<never, never>, Record<never, never>>,
    '/posts/miaorun-public-cdn': RouteRecordInfo<'/posts/miaorun-public-cdn', '/posts/miaorun-public-cdn', Record<never, never>, Record<never, never>>,
    '/posts/midterm-review': RouteRecordInfo<'/posts/midterm-review', '/posts/midterm-review', Record<never, never>, Record<never, never>>,
    '/posts/migrate-waline-db-to-mongodb': RouteRecordInfo<'/posts/migrate-waline-db-to-mongodb', '/posts/migrate-waline-db-to-mongodb', Record<never, never>, Record<never, never>>,
    '/posts/minecraft-problems-solve': RouteRecordInfo<'/posts/minecraft-problems-solve', '/posts/minecraft-problems-solve', Record<never, never>, Record<never, never>>,
    '/posts/my-mcserver': RouteRecordInfo<'/posts/my-mcserver', '/posts/my-mcserver', Record<never, never>, Record<never, never>>,
    '/posts/my-opinions-about-that-post': RouteRecordInfo<'/posts/my-opinions-about-that-post', '/posts/my-opinions-about-that-post', Record<never, never>, Record<never, never>>,
    '/posts/my-poor-mathematics': RouteRecordInfo<'/posts/my-poor-mathematics', '/posts/my-poor-mathematics', Record<never, never>, Record<never, never>>,
    '/posts/my-taste-of-music': RouteRecordInfo<'/posts/my-taste-of-music', '/posts/my-taste-of-music', Record<never, never>, Record<never, never>>,
    '/posts/netease-and-minecraft': RouteRecordInfo<'/posts/netease-and-minecraft', '/posts/netease-and-minecraft', Record<never, never>, Record<never, never>>,
    '/posts/omori': RouteRecordInfo<'/posts/omori', '/posts/omori', Record<never, never>, Record<never, never>>,
    '/posts/play-minecraft-with-friends': RouteRecordInfo<'/posts/play-minecraft-with-friends', '/posts/play-minecraft-with-friends', Record<never, never>, Record<never, never>>,
    '/posts/reinstall-my-pc-os': RouteRecordInfo<'/posts/reinstall-my-pc-os', '/posts/reinstall-my-pc-os', Record<never, never>, Record<never, never>>,
    '/posts/site-speed-optimization': RouteRecordInfo<'/posts/site-speed-optimization', '/posts/site-speed-optimization', Record<never, never>, Record<never, never>>,
    '/posts/talk-about-communications': RouteRecordInfo<'/posts/talk-about-communications', '/posts/talk-about-communications', Record<never, never>, Record<never, never>>,
    '/posts/use-artalk-in-valaxy': RouteRecordInfo<'/posts/use-artalk-in-valaxy', '/posts/use-artalk-in-valaxy', Record<never, never>, Record<never, never>>,
    '/posts/valaxy': RouteRecordInfo<'/posts/valaxy', '/posts/valaxy', Record<never, never>, Record<never, never>>,
    '/posts/whats-changed-to-my-blog': RouteRecordInfo<'/posts/whats-changed-to-my-blog', '/posts/whats-changed-to-my-blog', Record<never, never>, Record<never, never>>,
    '/posts/windows-delievry-optimize': RouteRecordInfo<'/posts/windows-delievry-optimize', '/posts/windows-delievry-optimize', Record<never, never>, Record<never, never>>,
    '/posts/windows-search-optimization': RouteRecordInfo<'/posts/windows-search-optimization', '/posts/windows-search-optimization', Record<never, never>, Record<never, never>>,
    '/posts/xiaoyu-and-linxiaoyu': RouteRecordInfo<'/posts/xiaoyu-and-linxiaoyu', '/posts/xiaoyu-and-linxiaoyu', Record<never, never>, Record<never, never>>,
    '/posts/zhongkao-grades': RouteRecordInfo<'/posts/zhongkao-grades', '/posts/zhongkao-grades', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}