(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.msg = "";
	$scope.list = "list comma separated dishes you usually have for lunch";
	
	$scope.count = function () {
		var arr = $scope.list.split(',');
		var num_words = arr.length;
		// check number of items
		// if number of items > 3
		console.log(num_words);
		if ($scope.list == "") {
			$scope.msg = "Please enter data first";
		}
		else if (num_words > 3) {
			$scope.msg = "Too much!";
		}
		else {
			$scope.msg = "Enjoy!";
		}
	}
}

})();
