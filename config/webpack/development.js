process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const webpack = require("webpacker")

environment.plugins.append("Provide", new webpack.PovidePlugins({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
}))


module.exports = environment.toWebpackConfig()
