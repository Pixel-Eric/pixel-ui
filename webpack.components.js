const glob = require('glob');
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
let list = {};

async function readComments(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    files.forEach(cur => {
        const fileName = cur.split(/[/.]/)[2];
        list[fileName] = "./" + cur;
    })
}

readComments('components/lib', list);

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: resolve(__dirname, 'dist'),
        library: 'pui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    reactivityTransform: true,
                },
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals:{
        vue:'vue'
    }
}