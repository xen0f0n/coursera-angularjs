(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
  	console.log("shit");
  	var response = $http({
  	  method: "GET",
  	  url: "https://davids-restaurant.herokuapp.com/categories.json"
  	});
  	console.log(response);
  	return response;
  };

  service.getItemsForCategory = function(categoryShortName) {
    console.log("shit again");
  	var response = $http({
  	  method: "GET",
  	  url: "https://davids-restaurant.herokuapp.com/menu_items.json",
  	  params: { 
  	    category: categoryShortName 
  	  }
  	});
    console.log(response);
  	return response;
  };

}
})();