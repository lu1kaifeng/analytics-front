import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import dev from 'rollup-plugin-dev'
import autoPreprocess from 'svelte-preprocess'
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		copy({
			targets:[
				{src:"node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf",dest:"public/build"},
				{src:"node_modules/material-icons/iconfont/MaterialIcons-Regular.woff",dest:"public/build"},
				{src:"node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2",dest:"public/build"},
				{src:"font/PingFang Regular.ttf",dest:"public/build"}
			]
		}),
		typescript({tsconfig:'./tsconfig.json'}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			preprocess:autoPreprocess({
			})
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		postcss({
			extract: true,
			minimize: true,
			use: [
				['sass', {
					includePaths: [
						'./theme',
						'./node_modules'
					]
				}],
				['less', {
					includePaths: [
						'./node_modules'
					]
				}]
			]
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && dev({dirs:['public'],port:8089,
			proxy: {
				'/api/*': 'http://127.0.0.1:8081/'
			}}),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
