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

  // New custom filter to filter posts by tag
  config.addFilter("filterByTag", (posts, tag) => {
    if (!Array.isArray(posts)) {
      console.warn("filterByTag filter applied to non-array:", posts);
      return [];
    }
    return posts.filter(post => post.data.tags && post.data.tags.includes(tag));
  });

  // New custom filter to shuffle an array randomly
  config.addFilter("shuffle", (arr) => {
    if (!Array.isArray(arr)) {
      console.warn("Shuffle filter applied to non-array:", arr);
      return arr;
    }
    const shuffled = [...arr]; // Create a shallow copy to avoid modifying original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // ES6 swap
    }
    return shuffled;
  });

  // New custom filter to get related posts based on common tags, excluding current post, shuffled and limited
  config.addFilter("getRelatedPosts", (allPosts, currentTags, currentUrl, limit = 3) => {
    if (!Array.isArray(allPosts) || !Array.isArray(currentTags)) {
      console.warn("getRelatedPosts filter received invalid input.");
      return [];
    }

    const related = allPosts.filter(post => {
      // Exclude the current post
      if (post.url === currentUrl) {
        return false;
      }
      // Check if the post has any common tags with the current post
      if (post.data.tags && Array.isArray(post.data.tags)) {
        return currentTags.some(tag => post.data.tags.includes(tag));
      }
      return false;
    });

    // Shuffle the related posts
    const shuffledRelated = [...related];
    for (let i = shuffledRelated.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledRelated[i], shuffledRelated[j]] = [shuffledRelated[j], shuffledRelated[i]];
    }

    // Return the limited number of shuffled posts
    return shuffledRelated.slice(0, limit);
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
