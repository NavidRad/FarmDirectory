app.factory('Entity', ['$http',
      function ($http) {
          return {
              getFarmEntities: function (farmId) {
                  return $http.get("http://www.scioplusinterview.com/frontend/api/entities/farms/" + farmId + "/entities/entities.json");
              },
              getEntity: function (farmId, entityId) {
                  return $http.get("http://www.scioplusinterview.com/frontend/api/entities/farms/" + farmId + "/entities/" + entityId)
              }
          }
      }]);