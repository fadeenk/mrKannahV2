const urljoin = require("url-join");
const config = require("./data/SiteConfig");

const remarkPlugins = [
  {
    resolve: "gatsby-remark-images",
    options: {
      maxWidth: 690,
      showCaptions: true,
    },
  },
  {
    resolve: "gatsby-remark-responsive-iframe",
  },
  {
    resolve: "gatsby-remark-prismjs",
  },
  {
    resolve: "gatsby-remark-copy-linked-files",
  },
  {
    resolve: "gatsby-remark-autolink-headers",
  },
];

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
        },
        extensions: ["jsx"],
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://0bfb726366f144d681a2b3631c7f791d@sentry.io/233818",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        autoBreadcrumbs: true,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "about",
        path: `${__dirname}/about/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: remarkPlugins,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: remarkPlugins,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/categories/*", "/tags/*"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/logos/logo-1024.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMdx = ref.query.allMdx;
          ret.generator = "GatsbyJS Advanced Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMdx.edges.map((edge) => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              }));
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      coverURL
                      coverFile {
                        publicURL
                      }
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            title: "Mr. Kannah's Blog",
            output: config.siteRss,
          },
        ],
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    "gatsby-plugin-meta-redirect", // make sure this is always the last one
  ],
};
