module.exports = {
  title: "Frictionless Libraries",
  tagline: "Frictionless Data libraries for 10 languages",
  organizationName: "Frictionless Data",
  projectName: "frictionless",
  baseUrl: "/",
  url: "https://libraries.frictionlessdata.io",
  favicon: "img/logo.png",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  customFields: {
    description: "Frictionless Data libraries for 10 languages",
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  // stylesheets: ["https://fonts.googleapis.com/css?family=Roboto&display=swap"],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/frictionlessdata/libraries/edit/master/docs/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [require("./src/plugins/remark-npm2yarn")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    sidebarCollapsible: true,
    image: "img/docusaurus.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    gtag: {
      trackingID: "UA-141789564-1",
    },
    // googleAnalytics: {
    //   trackingID: 'UA-141789564-1',
    // },
    algolia: {
      apiKey: "a77529da1844c2a2c51a13571734e7cb",
      indexName: "frictionlessdata",
      algoliaOptions: {
        // facetFilters: [`version:${versions[0]}`],
      },
    },
    navbar: {
      hideOnScroll: true,
      title: "Frictionless Libraries",
      logo: {
        alt: "Frictionless Libraries Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/table-schema/python",
          label: "Table Schema",
          position: "left",
        },
        {
          to: "docs/data-package/python",
          label: "Data Package",
          position: "left",
        },
        {
          to: "docs/other-libraries/frictionless-ckan-mapper",
          label: "Other Libraries",
          position: "left",
        },
        {
          href: "https://frictionlessdata.io/",
          label: "Back to the main site",
          position: "right",
          className: "header-mainsite-link",
        },
        {
          href: "https://github.com/frictionlessdata/libraries",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Table Schema",
              to: "docs/table-schema/python",
            },
            {
              label: "Data Package",
              to: "docs/data-package/python",
            },
            {
              label: "Other Libraries",
              to: "docs/other-libraries/frictionless-ckan-mapper",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              href: "https://frictionlessdata.io/blog/",
            },
            {
              label: "Forum",
              to: "https://github.com/frictionlessdata/project/discussions",
            },
            {
              label: "Chat",
              href: "https://discordapp.com/invite/Sewv6av",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/frictionlessdata/frictionless-py",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/frictionlessd8a",
            },
          ],
        },
      ],
      logo: {
        alt: "Open Knowledge Foundation",
        src: "https://a.okfn.org/img/oki/landscape-white-468x122.png",
        href: "https://okfn.org",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Frictionless Data`,
    },
  },
};
