app.filter('filterByProperty', function () {
    return function (dataArray, searchTerm, name) {
        if (!dataArray) return;
        if (!searchTerm) {
            return dataArray
        } else {
            var term = searchTerm.toLowerCase();
            return dataArray.filter(function (item) {
                return item[name].toLowerCase().indexOf(term) > -1;
            });
        }
    }
});