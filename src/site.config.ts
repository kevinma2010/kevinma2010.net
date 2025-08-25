/**
 * Site Configuration
 * 站点配置文件 - 集中管理所有站点信息
 */

export const SITE = {
  // 基础信息
  title: "Kevin's Blog",
  description: "Kevin Ma的技术博客 - 分享编程技术和开发经验",
  author: "Kevin Ma",
  email: "your-email@example.com", // 更新为你的邮箱
  
  // URL配置
  url: "https://kevinma2010.net",
  
  // SEO & Social
  defaultDescription: "一个热爱编程的开发者，在这里分享技术见解和开发经验",
  language: "zh-CN",
  
  // 社交链接（可选）
  social: {
    github: "https://github.com/yourusername", // 更新为你的GitHub
    twitter: "", // 如果有的话
    linkedin: "", // 如果有的话
  },
  
  // 首页配置
  homepage: {
    title: "欢迎来到我的技术博客!",
    subtitle: "我是 Kevin，一名热爱编程的开发者。",
    description: [
      "在这里，我会分享编程技术、开发经验和技术见解。",
      "这个博客采用了复古的终端风格主题，希望能带给你独特的阅读体验。",
      "你可以在这里找到关于软件开发、编程语言、工具使用等方面的文章。",
      "感谢访问，希望我的分享能对你有所帮助！"
    ]
  },
  
  // 导航菜单配置
  navigation: {
    main: [
      { name: "文章", href: "/posts/" },
      { name: "标签", href: "/tags/" },
      { name: "关于", href: "/about/" }
    ],
    // 如果需要下拉菜单，可以这样配置：
    // dropdown: [
    //   { name: "归档", href: "/archive/" },
    //   { name: "项目", href: "/projects/" }
    // ]
  },
  
  // RSS配置
  rss: {
    title: "Kevin's Blog RSS Feed",
    description: "订阅获取最新的技术文章",
  },
  
  // 页脚配置
  footer: {
    copyright: `© ${new Date().getFullYear()} Kevin Ma`,
    poweredBy: true, // 是否显示 "Powered by Astro"
    themeCredits: true, // 是否显示主题作者信息
  }
} as const;

// 类型导出
export type SiteConfig = typeof SITE;