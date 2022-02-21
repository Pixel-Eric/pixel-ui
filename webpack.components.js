const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    resolve
} = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader');
let list = {};

process.env.NODE_ENV = 'production';

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
    mode: 'production',
    output: {
        filename: '[name].umd.js',
        path: resolve(__dirname, 'dist'),
        library: 'pui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    reactivityTransform: true,
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ['@babel/preset-env',
                            {
                                targets: "ie 8",
                                useBuiltIns: "usage",
                                corejs: {
                                    version: 3
                                }
                            }
                        ]
                    ]
                }
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'./css/animation.css'
        })
    ],
    externals: {
        vue: 'vue',
        babel:'babel-loader',
        babelcore:'@babel/core',
        babelenv:'@babel/preset-env',
        cssloader:'css-loader',
    }
}