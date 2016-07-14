app.controller('HomeController', function($scope, $http, $location){

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


    this.quantity > 9 ? alert('must be less than 10 teas') : null

    var tea = {
      teaId: this.tea._id,
      qty: this.quantity
    }

    $scope.state.cart.push(tea)
    console.log($scope.state.cart);
  }

  $scope.goToCheckout = function(){
    $location.path('/checkout');
  }

});

app.controller('CheckoutController', function($scope){

});

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
