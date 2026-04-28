import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";

const description = "个人博客，个人备忘录";

export default defineConfig({
  extends: teekConfig,
  title: "xiaozhai801 的个人博客",
  base: "/blog/",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "xiaozhai801 的博客" }],
    ["meta", { property: "og:site_name", content: "xiaozhai801 的博客" }],
    ["meta", { property: "og:image", content: "/logo.png" }],
    ["meta", { property: "og:url", content: "https://xiaozhai801.github.io" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "author", content: "xiaozhai801" }],
    ["meta", { name: "keywords", content: "个人博客, 备忘录" }],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/archives" },
      { text: "分类", link: "/categories" },
      { text: "标签", link: "/tags" },
      { text: "关于", link: "/about" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/xiaozhai801",
      },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  navigateText: '导航',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },
  },
  vite: {
    plugins: [llmstxt() as any],
  },
});