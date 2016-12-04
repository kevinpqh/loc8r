(function () {

angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);
    
loc8rData.$inject = ['$http'];   
function loc8rData ($http) {
    var locationByCoords = function (lat, lng) {
        return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=1000000000');
    };
    //Para Obtener el detalle de Location
    var locationById = function (locationid) {
        return $http.get('/api/locations/' + locationid);
    };
    //servicio para insertar reviews
    var addReviewById = function (locationid, data) {
        return $http.post('/api/locations/' + locationid + '/reviews', data);
    };
    return {
        locationByCoords : locationByCoords,
        locationById : locationById,
        addReviewById : addReviewById
    };
};
})();