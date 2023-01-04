module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/shop/sammi-extensions/*.json')

    return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
