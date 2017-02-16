const path = require('path')

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

module.exports = config;