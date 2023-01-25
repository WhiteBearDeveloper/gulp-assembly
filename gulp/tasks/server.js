import browserSync from 'browser-sync';
import config from '../config';

const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: config.build.root,
    },
    files: [
      `${config.build.html}/*.html`,
      `${config.build.css}/*.css`,
      `${config.build.js}/*.js`,
      {
        match: `${config.build.images}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
  });
  callback();
};

export default server;
