module.exports = function (){
    return{
        devServer: {
            host: 'localhost',
            hot: true,
            port: 3000, 
            proxy: {
                '*':'http://localhost:8000'
            }
        }
    };
};