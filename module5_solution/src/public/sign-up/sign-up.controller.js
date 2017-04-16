(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;
  // reg.choiceItem = choiceItem;
  reg.message = "everything ok";

  reg.submit = function () {
  	reg.flag = false;
  	MenuService.flag = true;


    reg.completed = true;
    var promise = MenuService.getChoiceItem(reg.user.shortName);

    promise.then(function(response) {
    	reg.flag = true;
    	reg.imgSrc = "https://xen0fon-angularjs.herokuapp.com/images/"+reg.user.shortName+".jpg";
    	// console.log("This is controller: ", response.data);
    	reg.user.dish=response.data;
    })
    	.catch(function (error) {
    		reg.flag = false;
    		console.log("This is error:",error);

    	});
    // console.log("This is controller: ", "short name: ", reg.user.shortName, " Promise: ",promise.data);
  	console.log("this is user.dish: ", reg.user.dish);
  	MenuService.setData(reg.user.firstName, reg.user.lastName, reg.user.email, reg.user.phone, reg.user.shortName);
  };
}

})();