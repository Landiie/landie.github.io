module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/shop/shop.js')
    eleventyConfig.addPassthroughCopy('./src/shop/shop-live-indicator.js')

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}