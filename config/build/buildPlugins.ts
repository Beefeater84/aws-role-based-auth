import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import {BuildOption} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildPlugins({paths}: BuildOption): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[id].[contenthash].css",
        })
    ]
}
