import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOption} from "./types/config";

export default function buildDevServer({paths, PORT}: BuildOption): DevServerConfiguration {
    return {
        static: paths.devServer,
        port: PORT,
        open: true, // open browser by default
        historyApiFallback: true, // allow to use react-router-dom
    };
}