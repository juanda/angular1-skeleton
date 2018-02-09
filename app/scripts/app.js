'use strict';

/**
 * @ngdoc overview
 * @name angular1App
 * @description
 * # angular1App
 *
 * Main module of the application.
 */
angular
        .module('angular1App', [
          'ngAnimate',
          'ui.router',
          'ngCookies',
          'ngResource',          
          'ngSanitize',
          'ngTouch',      
          'angularSpinner'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
          //$locationProvider.html5Mode(true).hashPrefix('!');
                     
          $urlRouterProvider.otherwise('/');

          $stateProvider
                  .state('inicio', {
                    url: '/',
                    templateUrl: 'views/inicio.html',
                    controller: 'InicioCtrl',
                    controllerAs: 'inicio_ctrl'
                  })
                  
        });
