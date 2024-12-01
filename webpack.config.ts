import path from 'path'
import webpack from 'webpack'

import { buildWebpack } from './config/build/buildWebpack'
import { BuildPaths, BuildMode } from './config/build/types/types'

interface EnvVariables {
	mode: BuildMode
	port: number
	analyzer?: boolean
}

export default ({ mode, port, analyzer }: EnvVariables) => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: port ?? 3000,
		mode: mode ?? 'development',
		analyzer,
		paths,
	})
	return config
}
