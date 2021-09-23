'use strict'

var app = angular.module('portalApp', ['ui.bootstrap']);

app.factory('httpRequestInterceptor', function() {
	return {
		request : function(config) {
			config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
			config.headers['Charset'] = 'UTF-8';
			return config;
		}
	};
});

app.config(function($httpProvider) {
	$httpProvider.interceptors.push('httpRequestInterceptor');
	
    $httpProvider.defaults.transformRequest = function(obj) {
        var str = [];
        for(var p in obj) {
        	str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
});

app.controller('NewsController', ['$scope', '$http', function($scope, $http) {
	angular.element(document).ready(function () {
		var s = $scope;
		s.news = [];
		
		$("#div_noticias_loading").show();
		
		//PAGINATION NEWS
		s.nViewby = 6;
		s.nTotalItems = 0;
		s.nCurrentPage = 1;
		s.nItemsPerPage = s.nViewby;
		s.nMaxSize = 3;
		
		s.nSetPage = function(pageNo) {
		    s.nCurrentPage = pageNo;
		};
		
		s.pageChanged = function(page) {
			//NEWS
			$http({method: 'GET', url: '/getNewsPerPage?page=' + page + '&records=' + s.nViewby})
			.then(function successCallback(response) {
				s.news = response.data;
			}, function errorCallback(response) {
				console.log(response.data);
			});
		};
		
		//TOTAL NEWS
		$http({method: 'GET', url: '/getTotalNews'})
		.then(function successCallback(response) {
			s.nTotalItems = response.data;
		}, function errorCallback(response) {
			console.log(response.data);
		});
		
		//NEWS
		$http({method: 'GET', url: '/getNewsPerPage?page=' + 1 + '&records=' + s.nViewby})
		.then(function successCallback(response) {
			s.news = response.data;
			$("#div_noticias_loading").hide();
		}, function errorCallback(response) {
			console.log(response.data);
		});
    });
}]);

app.controller('NormativityController', ['$scope', '$http', function($scope, $http) {
	angular.element(document).ready(function () {
		var s = $scope;
		s.normativities = [];
		
		$("#div_publicaciones_loading").show();
		
		//PAGINATION NORMATIVITIES
		s.noViewby = 5;
		s.noTotalItems = 0;
		s.noCurrentPage = 1;
		s.noItemsPerPage = s.noViewby;
		s.noMaxSize = 3;
		
		s.noSetPage = function(pageNo) {
		    s.noCurrentPage = pageNo;
		};
		
		s.pageChanged = function(page) {
			//NORMATIVITIES
			$http({method: 'GET', url: '/getNormativitiesPerPage?page=' + page + '&records=' + s.noViewby})
			.then(function successCallback(response) {
				s.normativities = response.data;
			}, function errorCallback(response) {
				console.log(response.data);
			});
		};
		
		//TOTAL NORMATIVITIES
		$http({method: 'GET', url: '/getTotalNormativities'})
		.then(function successCallback(response) {
			s.noTotalItems = response.data;
		}, function errorCallback(response) {
			console.log(response.data);
		});
		
		//NORMATIVITIES
		$http({method: 'GET', url: '/getNormativitiesPerPage?page=' + 1 + '&records=' + s.noViewby})
		.then(function successCallback(response) {
			s.normativities = response.data;
			$("#div_publicaciones_loading").hide();
		}, function errorCallback(response) {
			console.log(response.data);
		});
	});
}]);

app.controller('EventsInternationalizationController', ['$scope', '$http', function($scope, $http) {
	var s = $scope;
	s.events = [];
	
	//PAGINACION EVENTS
	s.eViewby = 15;
	s.eTotalItems = 0;
	s.eCurrentPage = 1;
	s.eItemsPerPage = s.eViewby;
	s.eMaxSize = 3;
	
	s.setPage = function (pageNo) {
	    s.eCurrentPage = pageNo;
	};
	
	//EVENTS
	$http({method: 'GET', url: '/es/internacionalizacion/events'})
	.then(function successCallback(response) {
		s.events = response.data;
		s.eTotalItems = response.data.length;
	}, function errorCallback(response) {
		console.log(response.data);
	});
}]);

app.controller('ChangePassword', ['$scope', '$http', function($scope, $http) {
	var s = $scope;
	s.password = [];
	s.message = [];
	
	s.reset = function() {
		s.message.state = false;
		s.message.message = "";
    }
	
	s.changePassword = function() {
		//CHANGE PASSWORD
		$http({method: 'POST', url: '/es/cambiar_clave/', data: s.password})
		.then(function successCallback(response) {
			s.message = response.data;
			abrirModal();
		}, function errorCallback(response) {
			abrirModal();
		});
    }
	
	s.changePasswordPin = function() {
		s.password.pin = $('#pin').val();
		
		//CHANGE PASSWORD
		$http({method: 'POST', url: '/es/cambiar_clave_pin/', data: s.password})
		.then(function successCallback(response) {
			s.message = response.data;
			abrirModal();
		}, function errorCallback(response) {
			abrirModal();
		});
    }
}]);

app.controller('SearchController', ['$scope', '$http', function($scope, $http) {
	var s = $scope;
	s.pages = [];
	
	s.totalItems = 0;
	s.currentPage = 4;
	s.itemsPerPage = 8;
	s.maxSize = 5;
	
	s.setPage = function (pageNo) {
	    s.currentPage = pageNo;
	};
	
	s.setPages = function(text) {
		//PAGES
		$http({method: 'GET', url: '/search/getPages?text=' + text})
		.then(function successCallback(response) {
			s.pages = response.data;
			s.totalItems = s.pages.length;
		}, function errorCallback(response) {
			console.log(response.data);
		});
    }
	
}]);
