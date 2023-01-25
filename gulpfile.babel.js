import gulp from 'gulp';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';

config.setEnv();

export const build = gulp.series(clean);

export const watch = gulp.series(build, server);
