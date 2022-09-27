const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: 'development',
    output:{
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean:true,
    },
    devServer:{
        open:true,
        hot:true,
        compress:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.svg/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Todo App",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
    
}
