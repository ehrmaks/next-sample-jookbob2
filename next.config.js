const path = require('path')

module.exports = {
	webpack(config) {
		config.resolve.alias['@'] = path.resolve(__dirname, '/')
		config.resolve.alias['@comp'] = path.resolve(__dirname, 'components/')
		config.resolve.alias['@api'] = path.resolve(__dirname, 'core/api/')
		config.resolve.alias['@store'] = path.resolve(__dirname, 'core/store/')
		config.resolve.alias['@styles'] = path.resolve(__dirname, 'styles/')
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}
