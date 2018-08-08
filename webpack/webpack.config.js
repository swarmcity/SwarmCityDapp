const path = require('path');

module.exports = {
    entry: './webpack/webpack.js',
    output: {
        filename: 'webpack.min.js',
        path: path.resolve(__dirname, '../src/data/'),
        library: 'swarmcity',
        libraryTarget: 'var',
    },
    mode: 'production',
    target: 'web',
};