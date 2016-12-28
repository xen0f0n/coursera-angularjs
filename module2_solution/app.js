(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuyItems = [
    {name: "cookies", quantity: 10},
    {name: "chips", quantity: 5},
    {name: "burgers", quantity: 2},
    {name: "bread", quantity: 1},
    {name: "milk", quantity: 1},
    {name: "yogurts", quantity: 3}
  ];
  console.log(toBuyItems);

  //List of item we've already bought
  var boughtItems = [];

  console.log(boughtItems);

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (itemIndex) {
    console.log(itemIndex);
    console.log(toBuyItems[itemIndex]);
    var pushThatShit = toBuyItems[itemIndex]
    boughtItems.push(pushThatShit);
    toBuyItems.splice(itemIndex, 1);
  };
}
})();
