
export type BuildMode = "development" | "production";

export interface BuildPaths {
    entry: string;
    build: string;
    htmlTemplate: string;
    devServer: string;

}

export interface BuildOption {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    PORT: number;
}

export interface BuildEnv {
    PORT?: number;
    mode?: BuildMode;

}