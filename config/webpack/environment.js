const { environment } = require('@rails/webpacker')

const webpack = require("webpacker")

environment.plugins.append("Provide", new webpack.PovidePlugins({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
}))

module.exports = environment
