import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "GoatSwitch AI Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/gs_logo.png",

  // Set the production url of your site here
  // url: "https://goatswitch.github.io",
  url: "https://docs.goatswitch.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "GoatSwitch AI", // Usually your GitHub org/user name.
  projectName: "web-docs", // Usually your repo name.
  // deploymentBranch: "main", // default is 'gh-pages'
  trailingSlash: false,
  // githubHost: "github.com",
  // githubPort: "443",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/gs_logo.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Docs",
      logo: {
        alt: "GoatSwitch AI Logo",
        src: "img/gs_logo.png",
      },
      items: [
        {
          href: "https://github.com/GoatSwitch/web-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "Homepage",
              href: "https://goatswitch.ai",
            },
            {
              label: "Blog",
              href: "https://goatswitch.ai/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GoatSwitch AI GmbH. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
