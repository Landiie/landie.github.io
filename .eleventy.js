module.exports = function (eleventyConfig) {
  //adds ids to headers
  const anchors_plugin = require("@orchidjs/eleventy-plugin-ids");
  const { EleventyRenderPlugin } = require("@11ty/eleventy");
  eleventyConfig.addPlugin(anchors_plugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPassthroughCopy("./src/pfp.png");
  eleventyConfig.addPassthroughCopy("./src/papaparse.min.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/patrons.json");
  eleventyConfig.addPassthroughCopy("./src/shop/sammi-extensions/*.json");

  eleventyConfig.addPairedShortcode("alert", function(content, type) {
    console.log(type)
    return `<div class="alert alert-${type} d-flex flex-row justify-content-center align-items-center text-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="32" height="32" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>${content}</div>
</div>`;
});

  eleventyConfig.addFilter("splitContent", (content, sectionNumber) => {
    const sections = content.split("<!-- more -->");
    return sections[sectionNumber];
  });

  eleventyConfig.addFilter("concat", (value1, value2) => {
    return value1 + value2;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk"
  };
};
