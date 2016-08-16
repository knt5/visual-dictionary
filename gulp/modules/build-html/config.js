module.exports = {
	src: [
		'src/html/index.mustache'
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
