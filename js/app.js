// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.search', {
                url: "/search",
                views: {
                    'menuContent': {
                        templateUrl: "templates/search.html"
                    }
                }
            })

            .state('app.browse', {
                url: "/browse",
                views: {
                    'menuContent': {
                        templateUrl: "templates/browse.html"
                    }
                }
            })

            .state('app.playlists', {
                url: "/playlists",
                views: {
                    'menuContent': {
                        templateUrl: "templates/playlists.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.single', {
                url: "/playlists/plenario",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/plenario.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.deputados', {
                url: "/playlists/deputados",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/deputados.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.noticias', {
                url: "/playlists/noticias",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/noticias.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.alo', {
                url: "/playlists/alo",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/alo.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.comissoes', {
                url: "/playlists/comissoes",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/comissoes.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.comissoesDefesaDoConsumidor', {
                url: "/playlists/comissoes/defesaDoConsumidor",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/comissoes/defesaDoConsumidor.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.diario', {
                url: "/playlists/diario",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/diario.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            .state('app.aloAlerjChat', {
                url: "/playlists/aloAlerjChat",
                views: {
                    'menuContent': {
                        templateUrl: "templates/pages/aloAlerjChat.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/playlists');
    });
