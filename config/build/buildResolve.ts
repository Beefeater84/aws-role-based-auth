import {ResolveOptions} from "webpack";
import path from "path";
import {BuildOption} from "./types/config";

export default function buildResolvers(options: BuildOption): ResolveOptions {

    const {paths} = options;

    return {
        extensions: ['.js', '.jsx', ".ts", ".tsx"],
        alias: {
            "@": path.resolve(paths.projectRoot,'src/')
        }
    }
}