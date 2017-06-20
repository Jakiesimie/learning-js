let path = require('path');

module.exports = {
    entry: './src/js/redux_sandbox_1.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'redux_sandbox_1.bundle.js'
    },
    module: {
         loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015', 'stage-2'
                    ]
                }
            }
        ],
    },
    plugins: []
};
