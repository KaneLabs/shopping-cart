app.controller('HomeController', function($rootScope,$scope, $http, $location){

  $rootScope.rootState = {
    cart: []
  }

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

  $scope.addTeaToCart = function () {

    this.quantity > 9 ? alert('must be less than 10 teas') : null

    var tea = {
      teaId: this.tea._id,
      qty: this.quantity,
      imageUrl: this.tea.imageUrl,
      name: this.tea.name,
      price: this.tea.price * .01
    }

    $rootScope.rootState.cart.push(tea)
  }

  $scope.goToCheckout = function(){
    $location.path('/checkout');
  }

});

app.controller('CheckoutController', function($rootScope,$scope){
  console.log($rootScope.rootState.cart);
});

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
