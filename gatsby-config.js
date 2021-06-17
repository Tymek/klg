const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  "gatsby-plugin-image",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-plugin-sharp",
    options: {
      // base64Width: 20,
      // forceBase64Format: ``, // valid formats: png,jpg,webp
      // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      // stripMetadata: true,
      defaultQuality: 95,
      // failOnError: true,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Magda Klag",
      short_name: "Magda Klag",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "minimal-ui",
      icon: `${__dirname}/src/images/icon.png`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "fonts",
      path: `${__dirname}/src/fonts`,
    },
  },
  {
    resolve: "gatsby-plugin-matomo",
    options: {
      siteId: "1",
      matomoUrl: "https://analytics.scrlk.pl",
      siteUrl: "https://magdaklag.pl",
      requireConsent: false,
      disableCookies: true,
      dev: false,
    },
  },
  ...(process.env.NODE_ENV === "development"
    ? [] // Fix hot reload
    : ["gatsby-plugin-preact", "gatsby-plugin-brotli"]),
  "gatsby-plugin-postcss",
  "gatsby-plugin-typescript",
]

module.exports = {
  siteMetadata: {
    title: "Magda Klag",
    description: "Design",
    author: "Magda Klag",
    creator: "Tymek.Cz",
    publisher: "Scroll-Lock.pl",
    siteUrl: "https://magdaklag.pl",
    repository: "https://github.com/Tymek/klg",
  },
  plugins,
}
