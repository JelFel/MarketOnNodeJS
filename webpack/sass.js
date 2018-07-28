module.exports = function (path){
    return{
        module:{
            rules:[
                {
                    test: /\.(sass|scss)$/,
                    include: path,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};