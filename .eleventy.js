export default function(config) {
  config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/assets');
  config.addWatchTarget('src/css');

  // Add a custom Nunjucks filter for date formatting
  config.addFilter("readableDate", (dateObj) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(dateObj);
  });

  // Add a custom Nunjucks filter for slicing arrays, to ensure compatibility
  config.addNunjucksFilter("slice", (arr, start, end) => {
    if (!Array.isArray(arr)) {
      console.warn("Slice filter applied to non-array:", arr);
      return arr;
    }
    return arr.slice(start, end);
  });

  config.addCollection('projects', (collection) => {
    return collection.getFilteredByGlob('src/projects/*.md').sort((a, b) => {
      return new Date(b.data.year) - new Date(a.data.year);
    })
  });
  config.addCollection('blog', (collection) => {
    return collection.getFilteredByGlob('src/blog/*.md').sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });
  config.addCollection('testimonials', (collection) => {
    return collection.getFilteredByGlob('src/testimonials/*.md');
  });

  // New collection to get all unique tags from blog posts
  config.addCollection('tagList', function(collectionApi) {
    const tags = new Set();
    collectionApi.getFilteredByGlob('src/blog/*.md').forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => {
          // Removed the exclusion for 'post' tag
          tags.add(tag);
        });
      }
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  });

  return {
    dir: {
      input: 'src'
    }
  };
}
