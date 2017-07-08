module.exports = {
	template: 'components/home/home.html',
	transclude: false,
	bindings: {
		title: '<'
	}
	controller: [function() {
		//Place logic here
		console.log('The home has been loaded')
	}]
}