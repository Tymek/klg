const primary = "#f101a9"

export const colors = {
  primary,
  // text: 'grayDark',
  // muted: 'gray',
  link: primary,
  // background: 'white',
  // border: 'grayLight',
  sidebar: {
    // bg: 'white',
    // navGroup: 'grayDark',
    // navLink: 'grayDark',
    navLinkActive: primary,
    // tocLink: 'gray',
    // tocLinkActive: 'grayExtraDark',
  },
  header: {
    // bg: 'grayExtraLight',
    // text: 'grayDark',
    // border: 'grayLight',
    button: {
      bg: "#fff",
      color: '#131112',
    },
  },
  props: {
    // bg: 'grayUltraLight',
    // text: 'grayDark',
    highlight: primary,
    // defaultValue: 'gray',
    // descriptionText: 'grayDark',
    // descriptionBg: 'white',
  },
  // playground: {
  //   bg: 'white',
  //   border: 'grayLight',
  // },
  // blockquote: {
  //   bg: 'grayExtraLight',
  //   border: 'grayLight',
  //   color: 'gray',
  // },
  // prism: {
  //   ...prismLight,
  // },
}

export default {
  title: 'Docz',
  // base: '/docs',
  // src: './src',
  // ignore: ['README.md'],
  // menu: ['Components'],
  typescript: true,
  themeConfig: {
		showPlaygroundEditor: true,
    fonts: {
      monospace: '"DejaVuSansMono Nerd Font", Inconsolata, monospace',
    },
    colors: {
      ...colors,
      light: colors
    },
  },
  // docgenConfig: {
  //   propFilter: (prop, component) => {
  //     if (prop.parent) {
  //       return !prop.parent.fileName.includes("node_modules");
  //     }

  //     return true;
  //   },
  // },
}
