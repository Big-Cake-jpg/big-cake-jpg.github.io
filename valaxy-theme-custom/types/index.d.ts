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

  announcement: {
    enable: boolean
    content: string
  }

  footer: Partial<{
    since: number
  }>

  donate: Donate[]
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
