app.controller('HomeController', function($scope, $http){

  $scope.state = {
    teas: 'loading',
    byHighest: true
  }

  $http.get('teas.json')
  .then(function (teas) {
    console.log(teas.data);
    $scope.state.teas = teas.data;
  })
  .catch(function(e) {
    console.log(e);
  })

  $scope.priceSorter = function () {
    console.log('anything');
    $scope.state.byHighest = !$scope.state.byHighest;
    console.log($scope.state.byHighest);
  }

});

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
