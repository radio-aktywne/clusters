import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

const url = new URL("https://radio-aktywne.github.io/clusters");

const config: Config = {
  title: "clusters docs",
  favicon: "favicon.svg?v=1",

  url: `${url.protocol}//${url.host}`,
  baseUrl: url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          // Use docs on root
          routeBasePath: "/",

          // Use autogenerated sidebar
          sidebarPath: undefined,
        },
        // Disable blog
        blog: false,
        theme: {
          customCss: "custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "clusters docs",
      logo: {
        alt: "clusters docs logo",
        src: "logo.svg?v=1",
      },
      items: [
        {
          href: "https://github.com/radio-aktywne/clusters",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
