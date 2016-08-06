/**
 * Created by Hua on 8/2/16.
 */
app.controller('LoginController',['$scope','$location',function($scope,$location){
    var self = this;
    self.user = {};
    self.dataLoad = false;
    self.login = function(){
        self.dataLoad = true;
        loginService.login(self.user).then(function(res){
           self.dataLoad = false;
            $location.path('/')


        });

    }




}])