(function (){
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService'];
function InfoController(MenuService) {
	var infoCtrl = this;
	infoCtrl.flag = false;

	infoCtrl.firstName = MenuService.firstName;
	infoCtrl.lastName = MenuService.lastName;
	infoCtrl.email = MenuService.email;
	infoCtrl.phone = MenuService.phone;
	infoCtrl.dish = MenuService.dish;
	infoCtrl.imgSrc = MenuService.imgSrc;
	// infoCtrl.dishFullName = MenuService.dishFullName;
	// infoCtrl.dishDescription = MenuService.dishDescription;

	if (MenuService.flag == true){
		infoCtrl.flag = true;

    	var promise = MenuService.getChoiceItem(infoCtrl.dish);
		promise.then(function(response) {
    	// reg.flag = true;
    	// reg.imgSrc = "https://xen0fon-angularjs.herokuapp.com/images/"+reg.user.shortName+".jpg";
    	// console.log("This is controller: ", response.data);
    	infoCtrl.dish=response.data;
    })
    	.catch(function (error) {
    		reg.flag = false;
    		console.log("This is error:",error);

    	});
	}
	
}

})();