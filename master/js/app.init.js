/*!
 * 
 * Angbus UI Framework - Bootstrap + AngularJS
 * 
 * Author: @peterzhu
 * Website: taoqianbao@gmail.com
 * License: BSD
 * 
 */

if (typeof $ === 'undefined') {
	throw new Error('This application\'s JavaScript requires jQuery');
}

// APP START
// ----------------------------------- 

var App = angular.module('angbus', [
	'ngRoute',
	'ngAnimate',
	'ngStorage',
	'ngCookies',
	'pascalprecht.translate',
	'ui.bootstrap',
	'ui.router',
	'oc.lazyLoad',
	'cfp.loadingBar',
	'ngSanitize',
	'ngResource',
	'tmh.dynamicLocale',
	'ui.utils'
]);

App.run(["$rootScope", "$state", "$stateParams", '$window', '$templateCache', function($rootScope, $state, $stateParams, $window, $templateCache) {
	// Set reference to access them from any scope
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$rootScope.$storage = $window.localStorage;

	// Uncomment this to disable template cache
	/*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
	    if (typeof(toState) !== 'undefined'){
	      $templateCache.remove(toState.templateUrl);
	    }
	});*/

	// Scope Globals
	// ----------------------------------- 
	$rootScope.app = {
		name: 'Angbus',
		description: 'Angular Bootstrap Solution',
		year: ((new Date()).getFullYear()),
		layout: {
			isFixed: true,
			isCollapsed: false,
			isBoxed: false,
			isRTL: false,
			horizontal: false,
			isFloat: false,
			asideHover: false,
			theme: null
		},
		useFullLayout: false,
		hiddenFooter: false,
		viewAnimation: 'ng-fadeInUp'
	};
	$rootScope.user = {
		name: 'Peter',
		job: 'ng-developer',
		picture: 'app/img/user/02.jpg'
	};

}]);