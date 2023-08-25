module.exports = function (eleventyConfig) {
  //adds ids to headers
  const anchors_plugin = require("@orchidjs/eleventy-plugin-ids")
  eleventyConfig.addPlugin(anchors_plugin)

  eleventyConfig.addPassthroughCopy("./src/pfp.png")
  eleventyConfig.addPassthroughCopy("./src/styles.css")
  eleventyConfig.addPassthroughCopy("./src/styles-page.css")
  eleventyConfig.addPassthroughCopy("./src/papaparse.min.js")
  eleventyConfig.addPassthroughCopy("./src/shop/shop.js")
  eleventyConfig.addPassthroughCopy("./src/shop/shop-live-indicator.js")
  eleventyConfig.addPassthroughCopy("./src/assets")
  eleventyConfig.addPassthroughCopy("./src/site.webmanifest")
  eleventyConfig.addPassthroughCopy("./src/favicon.ico")
  eleventyConfig.addPassthroughCopy("./src/patrons.json")
  eleventyConfig.addPassthroughCopy("./src/shop/sammi-extensions/*.json")

  eleventyConfig.addFilter("splitContent", (content, sectionNumber) => {
    const sections = content.split("<!-- more -->")
    return sections[sectionNumber]
  })

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
