app.factory('Farm', ['$http',
      function ($http) {
          return {
              getFarms: function () {
                  return $http.get("http://www.scioplusinterview.com/frontend/api/farms.json");
              },
              getFarmById: function (farmId) {
                  return $http.get("http://www.scioplusinterview.com/frontend/api/farms/" + farmId);
              }
          }
      }]);