import base from './rollup.base.config';

const config = Object.assign({
	format: 'cjs',
	dest: 'dist/format-keys.cjs.js'
}, base);

export default config;
