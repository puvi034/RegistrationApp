/**
 * Created by Puneeth TS on 11/28/15.
 */
(function () {
    angular.module('registrationApp', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/register.html',
                controller: 'loginController'
            })
        }]);


})();