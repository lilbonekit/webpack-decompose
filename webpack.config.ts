import path from 'path'
import webpack from 'webpack'

import { buildWebpack } from './config/build/buildWebpack'
import {
	BuildPaths,
	BuildMode,
	BuildPlatform,
} from './config/build/types/types'

interface EnvVariables {
	mode: BuildMode
	port: number
	analyzer?: boolean
	platform?: BuildPlatform
}

export default ({ mode, port, analyzer, platform }: EnvVariables) => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		public: path.resolve(__dirname, 'public'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: port ?? 3000,
		mode: mode ?? 'development',
		platform: platform ?? 'desktop',
		analyzer,
		paths,
	})
	return config
}
