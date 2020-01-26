import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import {Plugin} from 'webpack';

const ROOT_PATH = path.resolve(__dirname, '..', '..');

const createWebpackPluginsArray = (env): Plugin[] => {
    const isDevelopment = env.webpack === 'development';

    return [
        /**
         * Render and output an index.html to serve the application.
         */

        new HtmlWebpackPlugin({
            template: path.join(ROOT_PATH, 'assets', 'index.html')
        }),

        /**
         * Extracts SCSS modules from JS and concats into single CSS file.
         */

        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        })
    ];
};

export default createWebpackPluginsArray;
