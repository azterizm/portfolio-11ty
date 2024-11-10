export default function(config) {
  config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/assets');
  config.addWatchTarget('src/css');
  config.addCollection('projects', (collection) => {
    return collection.getFilteredByGlob('src/projects/*.md');
  });
  config.addCollection('testimonials', (collection) => {
    return collection.getFilteredByGlob('src/testimonials/*.md');
  });

  return {
    dir: {
      input: 'src'
    }
  };
}
