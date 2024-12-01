import { Configuration } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/types'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugin({
	mode,
	paths,
	analyzer,
}: BuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development'
	const isProd = mode === 'production'

	const plugins: Configuration['plugins'] = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
	]

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin())
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		)
		if (analyzer) plugins.push(new BundleAnalyzerPlugin())
	}

	return plugins
}
