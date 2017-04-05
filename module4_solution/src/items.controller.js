(function() {
'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);


  ItemsController.$inject = ['items', 'categoryCode'];
  function ItemsController(items, categoryCode) {
    var itemsCtrl = this;
    itemsCtrl.categoryCode = categoryCode;
    itemsCtrl.items = items.data.menu_items;
  }

})();