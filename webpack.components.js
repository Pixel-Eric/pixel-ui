const glob = require('glob');
//提取公共css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//清除未使用的css文件
const PurifyCssPlugin = require('purifycss-webpack');
//使用path获取当前运行路径
const {
    resolve,
    join
} = require('path');
//打包vue文件
const {
    VueLoaderPlugin
} = require('vue-loader');
let list = {};

process.env.NODE_ENV = 'production';

//将所有的组件文件路径加入到list列表
async function readComments(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    files.forEach(cur => {
        const fileName = cur.split(/[/.]/)[2];
        list[fileName] = "./" + cur;
    })
}

readComments('components/lib', list);

//webpack配置文件
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
            },
            {
                test:/\.(json|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader:'file-loader',
                options:{
                    outputPath:'./assets',
                    name:'/[name].[ext]'
                }
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'./css/[chunk].css',
        }),
        new PurifyCssPlugin ({
            paths: glob.sync(join(__dirname, '/*.html'))
        })
    ],
    externals: {
        vue: 'vue',
        babel:'babel-loader',
        babelcore:'@babel/core',
        babelenv:'@babel/preset-env',
        cssloader:'css-loader',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks:2,
                    minSize:0
                }
            }
        }
    },
}