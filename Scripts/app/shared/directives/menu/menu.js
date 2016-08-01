(function () {

    var Menu = {
        imports: ["$location", "commonService"],
        body: function ($location, commonService) {
            return {
                restrict: 'E',
                templateUrl: "../Scripts/app/shared/directives/menu/menu.html",
                scope: {
                    menuOptions: "=menuOptions"
                },
                controller: function ($scope) {
                    $scope.menu = [];
                    $scope.titleLabel = $scope.menuOptions.titleLabel;
                    $scope.signOutLabel = $scope.menuOptions.signOutLabel;

                    $scope.init = function () {
                        $scope.access = true;//TODO:Change by access from server
                        $scope.fetchMenu().then(function (data) {
                            $scope.menu = data;
                        });
                    };

                    $scope.fetchMenu = function () {
                        /*return commonService.doGet({
                            url : "/Main/GetMenu"
                        });*/
                        return {
                            then : function(callBack){
                                callBack([
                                    {
                                        Id : 1,
                                        Label : "Home",
                                        Route : "#/main",
                                        CssIcon : "glyphicon-home"
                                    },
                                    {
                                        Id : 2,
                                        Label : "Grid",
                                        Route : "#/grid",
                                        CssIcon : "glyphicon-th"
                                    }
                                ]);
                            }
                        };
                    }
                }
            };
        }
    };

    module.exports = Menu;
}());