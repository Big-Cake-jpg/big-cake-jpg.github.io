import type { DefaultTheme } from 'valaxy'

export namespace StarterTheme {
  export type Config = ThemeConfig
}

/**
 * Theme Config
 */
export interface ThemeConfig extends DefaultTheme.Config {
  pages: Page[]

  asidePages: AsidePages[]

  quickAccess: QuickAccess[]

  author: {
    slogan: string
  }

  /**
   * @zh 公告
   * @en Announcement
   */
  announcement: {
    enable: boolean
    type: 'info' | 'warning'
    content: string
  }

  footer: Partial<{
    /**
     * @zh 建站于
     * @en Since
     */
    since: number
    /**
     * @zh 中国大陆地区备案信息
     * 
     * 如果你的网站已经完成备案，可以在这里填写备案信息
     * 
     * @en ICP information in mainland China
     * 
     * If your website has a valid ICP filling info, you can fill in the filing information here
     * 
     * @see https://beian.miit.gov.cn/
     */
    beian?: {
      icp?: {
        enable: boolean
        /**
         * @example "晋 ICP 备 xxxxxxxxxx 号 - 1"
         **/
        info: string
      }
      gongan?: {
        enable: boolean
        /**
         * @description 完整的公安备案号，用于显示在页面上
         * @example "晋公网安备 xxxxxxxxxxxxxxxx 号"
         **/
        info: string
        /**
         * @description 公安备案号的数字部分，用于生成跳转链接
         * @example "xxxxxxxxxxxxxxxx"
         **/
        recordCode: string
      }
      /**
       * @zh 萌备信息
       * @see https://icp.gov.moe
       **/
      moe?: {
        enable: boolean
        /**
         * @description 在萌备网站上选择的编号
         * @example "20230105"
         **/ 
        info: string
      }
    }
    /**
     * @zh 一言
     * @en Hitokoto
     * @see https://hitokoto.cn
     **/
    hitokoto?: {
      enable: boolean
    }
  }>

  donate: Donate[]

  pageLoading: boolean
}

export interface Page {
  name: string
  url: string
}

export interface AsidePages {
  name: string
  url: string
}

export interface QuickAccess {
  name: string
  url: string
  icon: string
}

export interface Donate {
  name: string
  url: string
  icon: string
  color: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
