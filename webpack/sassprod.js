const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (path){
    return{
        module:{
            rules:[
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath:'../'
                            }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};