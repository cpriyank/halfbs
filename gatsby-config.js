/* eslint-disable @typescript-eslint/camelcase */
'use strict'

module.exports = {
  pathPrefix: "/halfbs",
  siteMetadata: {
    title: 'halfbs',
    description: 'Half Baked Speculations (or BS). This is intended to be my scratchpad, but I am open for comments and discussions if you know where to find me',
    siteUrl: 'https://cpriyank.github.io/halfbs',
    author: {
      name: 'Half BS',
      url: 'https://github.com/cpriyank',
      email: 'randomemail@gmail.com',
    },
    social: {
      twitter: 'https://twitter.com/randomtwitter',
      github: 'https://github.com/cpriyank',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cpriyank.github.io`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HalfBS`,
        short_name: `halfbs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
  ],
}