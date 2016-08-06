/**
 * Created by Hua on 8/4/16.
 */
app.factory('loginService',['$http','$rootscope',function($http,$rootscope){
    var service ={
        session: function(){
            return $http.get('/api/session');

        },
        login: function(user){
         $http.post().then(function(res){
             console.log(res.data);
             $rootScope.isLoggedIn = false;

         });

        }


    }
return service;

}])