import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import chokidar from 'chokidar';
import devWebpackConfig from '../webpack.dev.config';

const compiler = webpack(devWebpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: devWebpackConfig.output.publicPath,
  quiet: true,
});

const hotMiddleware = webpackHotMiddleware(compiler);

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('./server');

watcher.on('ready', () => {
  watcher.on('all', () => {
    Object.keys(require.cache).forEach((id) => {
      if (/[/\\]server[/\\]/.test(id)) delete require.cache[id];
    });
  });
});

module.exports = [devMiddleware, hotMiddleware];
