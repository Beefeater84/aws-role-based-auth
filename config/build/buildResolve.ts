import {ResolveOptions} from "webpack";

export default function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.js', '.jsx', ".ts", ".tsx"],
    }
}