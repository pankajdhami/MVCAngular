/// <reference path="../Views/list_template.html" />
/// <reference path="../Views/onetemplate.html" />
(function () {
    var app = angular.module('AngularApp');
    app.run(function ($templateCache) {

        $templateCache.put('../App/Views/onetemplate.html');
    });
    app.directive('listContainer', function ($http) {

        return {

            restrict: 'E',
            replace: true,
            templateUrl: '../App/Views/list_template.html',
            controller: function ($scope, $rootScope) {

                $scope.onSelectionChange = function (row) {

                    $rootScope.$broadcast('listSelectionChange', row)

                }
            },
            link: function (scope, element, attr, controller) {
                $http.get(attr.resource).success(function (response) {

                    scope.rows = response;
                    console.log('list data loaded')
                });


            }

        }

    });

    app.directive('valueOne', function ($http, $compile, $templateCache) {

        return {

            restrict: 'E',
            // require: '^listContainer',
            replace: true,
            template: '<div><h1></h1></div>',
            controller: function ($scope) {


            },
            link: function (scope, element, attr, controller) {
                scope.$on('listSelectionChange', function (e, row) {
                    scope.row = row;
                    $(element).empty();
                    if (row.value != 0) {
                        
                        var template = "<h1'>value 1 {{row.value}}</h1><br/>";
                      
                        var content = $compile(template)(scope);//($templateCache.get("../App/Views/onetemplate.html"))(scope);

                        $(element).append(content);

                    }
                    if (row.value2 != 0) {

                        var template = "<h1'>value 2 {{row.value2}}</h1><br/>";
                       
                        var content = $compile(template)(scope);//($templateCache.get("../App/Views/onetemplate.html"))(scope);

                        $(element).append(content);

                    }
                    if (row.value3 != 0) {

                        var template = "<h1'>value 3 {{row.value3}}</h1><br/>";

                        var content = $compile(template)(scope);//($templateCache.get("../App/Views/onetemplate.html"))(scope);

                        $(element).append(content);

                    }
                })
            }
        }

    });
})();