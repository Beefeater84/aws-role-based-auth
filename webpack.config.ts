import webpack from 'webpack';
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index'),
    build: path.resolve(__dirname, 'build'),
    htmlTemplate: path.resolve(__dirname, "public", "index.html"),
    devServer: path.resolve(__dirname, "build")
}

export default function(env: BuildEnv): webpack.Configuration {

    console.log("env.mode", env.mode)

    const PORT = env.PORT || 3000;
    const mode = env.mode || "development";
    const isDev = mode === "development";


    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        PORT
    });
}