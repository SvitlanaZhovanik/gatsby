const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: `Be Better`,
    description: `I will teach you to live in high spirits without emotional burnouts`,
    author: `GoWeb`,
    siteUrl: `https://dev--gw-bb-project.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `dogs/`,
        context: true,
        tags: true,
        maxResults: 50,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/cmsdata`,
        name: `CMS Data`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Be Better`,
        short_name: `Be Better`,
        lang: `uk`,
        start_url: `/`,
        theme_color: `#ffffff`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dev--gw-bb-project.netlify.app',
        sitemap: 'https://dev--gw-bb-project.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          // breakpoints: [320, 768, 1440],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      // import SomeIcon from 'images/svg/some-icon.inline.svg' and use as Component <SomeIcon/>, inline svg
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: process.env.FACEBOOK_PIXEL_ID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: process.env.GOOGLE_TAGMANAGER_ID,
    //     includeInDevelopment: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: true,
        tailwind: true,
        ignore: [
          'react-phone-input-2/lib/bootstrap.css',
          'swiper',
          'swiper/css',
          'swiper/css/navigation',
          'react-toastify/dist/ReactToastify.css',
          'styles/components/',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`uk`, `ru`, `en`],
        defaultLanguage: `uk`,
        redirect: true,
        siteUrl: 'https://dev--gw-bb-project.netlify.app',

        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          nsSeparator: true,
          keySeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
  ],
};
