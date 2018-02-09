'use strict';

angular.module('angular1App')

    .controller('InicioCtrl', [
        '$scope',
        '$state',
        function ($scope, $state) {

            $scope.prueba = 'HOLA';            

        }]);
