(function () {
	const app = angular.module('app', ['ngRoute'])

	//Add new component names here to bind it with Angular
	const components = require('./componentsList.js')

	app.config(['$routeProvider', require('./routing.js')])
})()
