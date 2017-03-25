var config={
    entry:"./client/main.js",
    output:{
        path:"./server/public",
        filename:"[name].bundel.js"
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            }
        ]
    }
};

var  htmlWebpackPlugin = require("html-webpack-plugin");
var plugins=[new htmlWebpackPlugin({
    template:"./client/template.html",
    filename:"index.html"
})];

config.plugins=plugins;
module.exports=config;