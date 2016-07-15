app.controller('HomeController', function($rootScope,$scope, $http, $location, cartFactory){

  $scope.state = {
    teas: 'loading',
    cart: cartFactory.cart
  }

  $http.get('teas.json')
  .then(function (teas) {
    $scope.state.teas = teas.data;
    console.log(teas.data);
  })
  .catch(function(e) {
    console.log(e);
  })

  $scope.addTeaToCart = function () {

    this.quantity > 9 ? alert('must be less than 10 teas') : null

    var isRepeat = false;
    for (var i = 0; i < cartFactory.cart.length; i++) {
      if(cartFactory.cart[i].teaId === this.tea._id){
        var origQty = parseInt(cartFactory.cart[i].qty);
        var addQty = parseInt(this.quantity);
        var newQty = origQty + addQty;
        cartFactory.cart[i].qty = newQty.toString();
        isRepeat = true;
      }
    }

    if(isRepeat){
      return;
    }else{

      var tea = {
        teaId: this.tea._id,
        qty: this.quantity,
        imageUrl: this.tea.imageUrl,
        name: this.tea.name,
        price: this.tea.price * .01,
        caffeineScale: this.tea.caffeineScale,
        ingredients: this.tea.ingredients,
        rating: this.tea.rating
      }

      cartFactory.cart.push(tea);
    }

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

  $scope.getSubtotal = function() {
    $scope.state.cart.forEach(function (element, index, array) {
      $scope.state.subtotal += (element.price * element.qty);
    })
  }

  $scope.getSubtotal();

  $scope.removeTea = function () {
    var id = this.tea.teaId;

    cartFactory.cart = $scope.state.cart.filter(function (value) {

      if(value.teaId != id){
        return value;
      }

    })
    $scope.state.cart = cartFactory.cart;
    $scope.state.subtotal = 0;
    $scope.getSubtotal();
  }

})

app.controller('AboutController', function($scope){

});

app.controller('ContactController', function($scope){

});
