'use strict';

angular.module('mean.users')
	.factory('MeanUser', ['$resource',

	 function($resource) {
			return $resource('users', {}, {
				update: {
					method: 'PUT'
				}
			});
	  }
	])
	.factory('Authentication', [

	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
		}
	]);
