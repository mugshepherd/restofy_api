var AllRestaurants = function(){
  this.restaurants = []
  this.fetchRestaurants();
  this.fetchDetails();
  return this.restaurants
}

AllRestaurants.prototype = {
  fetchRestaurants: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: "http://grahamimac.com/inspectionmapper/allrest_id.php?callback=?"
    }).done(function(response) {
      allRestaurantsModel.loadRestaurants(response);
    }).fail(function(response){
      console.log("js failed to load")
    })
  },

  fetchDetails: function(callback){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: "http://grahamimac.com/inspectionmapper/onerest.php?callback=<String>&permitid="
    }).done(function(response) {
      allRestaurantsModel.loadDetails(response);
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  
  loadRestaurants: function(response) {
    this.restaurants = [];
    for(var i = 0; i < response.length; i++){
      var restaurant = new Restaurant(response[i].pid, response[i].addr, response[i].name);
      this.restaurants.push(restaurant);
    }
  },

  loadDetails: function(response) {
    this.restaurants = restaurant_detailed
    for(var i = 0; i < response.length; i++){
      var restaurant_detailed = Restaurant[pid](response[i].coords, response[i].totals, response[i].violations);
      this.restaurants.push(restaurant);
    }
  }
}
