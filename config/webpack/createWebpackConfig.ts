import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import {Configuration} from 'webpack';

import createWebpackPluginsArray from './createWebpackPluginsArray';

const ROOT_PATH = path.resolve(__dirname, '..', '..');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist', 'client');
const TS_CONFIG_PATH = path.resolve(ROOT_PATH, 'tsconfig.json');

const createWebpackConfig = (env): Configuration => {
    const isDevelopment = env.webpack === 'development';

    process.env.TS_NODE_PROJECT = TS_CONFIG_PATH;

    return {
        mode: env.webpack,
        entry: './src/index.tsx',
        output: {
            filename: 'main.js',
            path: BUILD_PATH,
            publicPath: ''
        },
        devtool: 'source-map',
        plugins: createWebpackPluginsArray(env),
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.scss'],
            symlinks: false
        },
        devServer: {
            contentBase: BUILD_PATH
        },
        module: {
            rules: [
                {
                    test: /\.(tsx?|js)?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.s(a|c)ss$/,
                    loader: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: isDevelopment
                                        ? '[name]__[local]___[hash:base64:5]'
                                        : '[hash:base64]'
                                },
                                localsConvention: 'camelCaseOnly',
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                }
            ]
        }
    };
};

export default createWebpackConfig;
