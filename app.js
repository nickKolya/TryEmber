var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function() {
  this.route('credits', { path: '/thanks' });
  this.route('about');
  this.resource('products');
});
App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/logo-small.png',
  time: function() {
    return (new Date()).toDateString();
  }.property()
});
App.AboutController = Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'images/avatar.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

App.PRODUCTS = [
  {
    title: "Product1_title",
    price: 12,
    description: "Product1_description",
    isOnSale: "yes",
    image: 'images/flint.png'
  },
  {
    title: "Product2_title",
    price: 14,
    description: "Product2_description",
    isOnSale: "no",
    image: 'images/kindling.png'
  }
]

App.ProductsRoute = Ember.Route.extend({
  model: function() {
  	return App.PRODUCTS;
  }
});