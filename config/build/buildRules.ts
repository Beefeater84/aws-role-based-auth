import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";

export default function buildRules(options: BuildOption): RuleSetRule[] {

    const {isDev} = options;

    // this loader can work with jsx.
    // IMPORTANT. If we want to use jsx, we need to add babel-loader.
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }


    // by default webpack put link to css in js files
    // MiniCssExtractPlugin.loader - this loader will extract css from js files and put it in separate file.
    const styleLoader = {
        test: /\.(scss|css)$/i,
        use: [
            // in Dev mode we don't need to create separate css files. It's faster to use inline-styles in JS! files.
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // "style-loader", add inline-styles in JS! files. Don't work with MiniCssExtractPlugin.loader
            // "css-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.endsWith(".module.css"), // generate hash classes only for files with .module.css extension
                        localIdentName: isDev ?
                            "[path][name]__[local]--[hash:base64:5]" : // for dev normal class names
                            "[hash:base64:8]" , // for prod - short class names
                    },

                },
            },
            "sass-loader",
        ],
    }


    // The order of loaders is important. This structure will help us to see the order of loaders.
    return [
        typeScriptLoader,
        styleLoader
    ]
}