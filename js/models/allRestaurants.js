var AllRestaurants = function(){
  this.restaurants = [] 
  this.fetchRestaurants();
}

AllRestaurants.prototype = {
  fetchRestaurants: function(callback) {
    var self = this;

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://grahamimac.com/inspectionmapper/allrest_id.php?callback=?"
    }).done(function(response) {
      self.loadRestaurants(response);
    }).fail(function(response){
      console.log("js failed to load")
    })
  },

  fetchDetails: function(pid, callback){
    var self = this;

    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: "http://grahamimac.com/inspectionmapper/onerest.php?callback=<String>&permitid="
    }).done(function(response) {
      self.loadDetails(pid, response);
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  
  loadRestaurants: function(response) {
    alert(response.results[0].pid)
    var i, restaurant;  
    this.restaurants = [];
    for(i = 0; i < response.results.length; i++){
      var id = response.result.pid
      var merged = {
        id: id
        address: response.result.addr
      }
      restaurant = new Restaurant(response.results[i].pid, response.results[i].addr, response.results[i].name);
      this.restaurants.push(restaurant)
      

      //fetch details with restaurant.pid
      this.fetchDetails(restaurant.id, function(details){
        merged.coords = details.coords;
      })
    };
    alert(this.restaurants[1].name)

    /*
    this.restaurants = response.map(function(item) {
      return new Restaurant(item.pid, item.addr, item.name);
    });
    */
  },

  loadDetails: function(pid, response) {
    // same comments on var definition and functional style as for the above loadRestaurants.

    var i, restaurant_detailed;
    restaurant_detailed = []
    for(var i = 0; i < response.length; i++){
      restaurant_detailed = Restaurant[pid](response.restaurant[i].coords, response.restaurant[i].totals, response.restaurant[i].violations);
      this.restaurants.push(restaurant_detailed);
    }
    /*
    this.restaurant_detailed = reponse.map(function(item){
      return restaurant[pid](item.coords, item.totals, item.violatios);
    });
    */
  }
}
