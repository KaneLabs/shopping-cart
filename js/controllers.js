app.controller('HomeController', function($scope, $http){

  $scope.state = {
    teas: 'loading',
    cart: []
  }

  $http.get('teas.json')
  .then(function (teas) {
    console.log(teas.data);
    $scope.state.teas = teas.data;
  })
  .catch(function(e) {
    console.log(e);
  })

  $scope.addTeaToCart = function () {

    if(this.quantity > 9){
      alert('must be less than 10 teas')
    }

    var tea = {
      teaId: this.tea._id,
      qty: this.quantity
    }

    $scope.state.cart.push(tea)
    console.log($scope.state.cart);
  }

});

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
