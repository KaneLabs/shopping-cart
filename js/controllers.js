app.controller('HomeController', function($rootScope,$scope, $http, $location, cartFactory){

  $scope.state = {
    teas: 'loading',
    cart: cartFactory.cart
  }

  $http.get('teas.json')
  .then(function (teas) {
    $scope.state.teas = teas.data;
  })
  .catch(function(e) {
    console.log(e);
  })

  $scope.addTeaToCart = function () {

    this.quantity > 9 ? alert('must be less than 10 teas') : null

    var tea = {
      teaId: this.tea._id,
      qty: this.quantity,
      imageUrl: this.tea.imageUrl,
      name: this.tea.name,
      price: this.tea.price * .01
    }

    cartFactory.cart.push(tea)
  }

  $scope.goToCheckout = function(){
    $location.path('/checkout');
  }

});

app.controller('CheckoutController', function($scope, cartFactory){

  $scope.state = {
    cart: cartFactory.cart,
    subtotal: 0
  }

  $scope.state.cart.forEach(function (element, index, array) {
    $scope.state.subtotal += (element.price * element.qty)
  })

});

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
