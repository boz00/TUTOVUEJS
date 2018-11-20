const path = require("path");

module.exports = {
    watch: true,
    mode:"development",
    entry:"./src/script.js",
    output:{
        filename:"./dist/bundle.js"
    },
    devServer: {
        contentBase:path.resolve(__dirname),
        open:true
    }
}