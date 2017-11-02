'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "AIOXMining | AEON | US",
		api_url : 'https://aeon.us.aioxmining.com',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});