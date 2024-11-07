export default function(config) {
  config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/assets');
  config.addWatchTarget('src/css');

  return {
    dir: {
      input: 'src'
    }
  };
}
