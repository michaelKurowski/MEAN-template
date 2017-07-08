module.exports = {
	template: 'components/home/navbar/navbar.html',
	transclude: false,
	bindings: {
		brand: '<'
	}
	controller: [function() {
		//Place logic here
		console.log('The navbar has been loaded')
	}]
}