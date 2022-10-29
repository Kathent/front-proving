const htmlPlugin=require('html-webpack-plugin');

module.exports = [{
    mode:'development',
    entry:'./src/app.js',
    module:{
        rules: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html'
        })
    ]
}]