import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
export default (function (_a) {
    var mode = _a.mode, port = _a.port, analyzer = _a.analyzer, platform = _a.platform;
    var paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    var config = buildWebpack({
        port: port !== null && port !== void 0 ? port : 3000,
        mode: mode !== null && mode !== void 0 ? mode : 'development',
        platform: platform !== null && platform !== void 0 ? platform : 'desktop',
        analyzer: analyzer,
        paths: paths,
    });
    return config;
});
