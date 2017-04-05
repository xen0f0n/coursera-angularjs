(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
  	url: '/',
  	templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
  	url: '/categories',
  	templateUrl: 'src/templates/mainCategories.template.html',
  	controller: 'CategoriesController as catCtrl',
  	resolve: {
  	  categories: ['MenuDataService', function (MenuDataService) {
  	  	return MenuDataService.getAllCategories();
  	  }]
  	}
  })

  .state('categories.items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/templates/mainItems.template.html',
    controller: "ItemsController as itemsCtrl",
    resolve: {
      items: ['$stateParams','MenuDataService',
        function ($stateParams,MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryId);
        }],
      categoryCode: ['$stateParams', function($stateParams) {
        return $stateParams.categoryId;
      }]
    }
  });

}

})();