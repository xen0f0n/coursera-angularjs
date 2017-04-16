(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService)
.constant('ApiPath', "https://xen0fon-angularjs.herokuapp.com");


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.flag = false;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getChoiceItem = function (shortName) {
    var config = {};
    if (shortName) {
      // config.params = {'shortName': shortName};
    }
    return $http.get("https://xen0fon-angularjs.herokuapp.com/menu_items/" + shortName.toUpperCase() + ".json").then(function (response) {
      console.log("this is service shit: ", response);
      return response;
    });
  };

  service.firstName = "";
  service.lastName = "";
  service.email = "";
  service.phone = "";
  service.dish = "";
  service.imgSrc= "";
  service.dishDescription = "";
  service.dishFullName = "";

  service.setData = function(fn, ln,em,ph,di, description, dishFullName) {
    service.firstName = fn;
    service.lastName = ln;
    service.email = em;
    service.phone = ph;
    service.dish = di;
    service.dishDescription = description;
    service.dishFullName = dishFullName;
    service.imgSrc = "https://xen0fon-angularjs.herokuapp.com/images/"+di+".jpg";
    console.log("Everything is set");
  }
}
//https://xen0fon-angularjs.herokuapp.com/menu_items/A4.json


})();
