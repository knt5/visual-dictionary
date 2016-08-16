module.exports = {
	src: [
		'src/html/index/index.mustache'
	],
	watch: {
		src: [
			'src/html/**/*.mustache'
		]
	},
	mustache: {
		dest: 'gulp/works/html/merged/'
	},
	minify: {
		dest: './'
	}
};
