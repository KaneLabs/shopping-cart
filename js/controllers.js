app.controller('HomeController', function($scope, $http){

  $scope.state = {
    teas: 'loading'
  }

  $http.get('teas.json')
  .then(function (teas) {
    console.log(teas.data);
    $scope.state.teas = teas.data;
  })
  .catch(function(e) {
    console.log(e);
  })

});

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
