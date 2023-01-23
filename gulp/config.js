const srcPath = 'src';
const buildPath = 'build';

const config = {
  src: {
    root: srcPath,
    scss: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/images`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
    pug: `${srcPath}/pug`,
  },
  build: {
    root: buildPath,
    html: buildPath,
    css: `${buildPath}/css`,
    js: `${buildPath}/js`,
    fonts: `${buildPath}/fonst`,
    images: `${buildPath}/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
