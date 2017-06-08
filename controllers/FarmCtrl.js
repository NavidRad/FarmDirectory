app.controller('FarmCtrl', ['$scope', '$routeParams', '$http', '$rootScope', 'Farm', 'Entity', function ($scope, $routeParams, $http, $rootScope, Farm, Entity) {

    if ($routeParams.farmId === undefined) {
        $scope.view = 'list';
        Farm.getFarms().then(function (response) {
            $scope.farms = response.data;
        });
    } else if ($routeParams.farmId !== undefined && $routeParams.entityId === undefined) {
        $scope.view = 'details';
        $rootScope.selectedFarm = $routeParams.farmId;

        Farm.getFarmById($routeParams.farmId).then(function (response) {
            $scope.farm = response.data;
        });

        Entity.getFarmEntities($routeParams.farmId).then(function (response) {
            $scope.entities = response.data;
        });
    } else {
        $scope.view = 'entities';
        $rootScope.selectedEntity = $routeParams.entityId;

        var temperaturesData = []
        var weightsData = []

        Entity.getEntity($routeParams.farmId, $routeParams.entityId).then(function (response) {
            var entity = response.data
            $scope.entity = entity;

            $scope.entityTemperatures = angular.toJson(entity.Temperatures);
            $scope.entityweights = angular.toJson(entity.Weights);

            var rawDataTemperatures = JSON.parse($scope.entityTemperatures);
            for (i = 0; i < rawDataTemperatures.length; i++) {
                temperaturesData.push({ label: new Date(rawDataTemperatures[i].Time).formatMMDDYYYY().toString(), value: rawDataTemperatures[i].Measurement });
            }

            var rawDataweights = JSON.parse($scope.entityweights);
            for (i = 0; i < rawDataweights.length; i++) {
                weightsData.push({ label: new Date(rawDataweights[i].Date).formatMMDDYYYY().toString(), value: rawDataweights[i].Weightg });
            }
        });

        $scope.TemperatureDataSource = {
            chart: {
                caption: "Entity's Temperature",
                subCaption: "Temperature Variation During The Period",
                numberPrefix: "",
                theme: "fint"
            },
            data: temperaturesData
        };

        $scope.WeightDataSource = {
            chart: {
                caption: "Entity's Weight",
                subCaption: "Weight Variation During The Period",
                numberPrefix: "",
                theme: "fint"
            },
            data: weightsData
        };

        Date.prototype.formatMMDDYYYY = function () {
            return (this.getMonth() + 1) +
            "/" + this.getDate() +
            "/" + this.getFullYear();
        }
    }
}]);