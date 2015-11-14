var AllRestaurants = function(){
  this.restaurants = [] 
  // ts - When you say that it's 'assigned,' do you mean the brackets aren't necessary, or that it's not necessary to declare the variable?   
  //// not needed b/c it's assigned, but doesn't really hurt for clarity
  this.fetchRestaurants()
  // ts - i don't understand this (that i won't be able to get an instance of the class)).  
  //// return this.restaurants // I believe you want to strike this line. Otherwise you can never get an instance of the class.
}

AllRestaurants.prototype = {
  fetchRestaurants: function(callback) {
    var self = this;

    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
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
    //ts: very helpful link.  read up on scoping and hoisting.  thank you.  
    //// In js, vars are scoped by function. Make sure to define all vars at the top of the body of a function.
    //// This makes it clear what you're defining and prevents hoisting.
    //// See eg https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

    var i, restaurant;  
    this.restaurants = [];
    for(i = 0; i < response.length; i++){
      restaurant = new Restaurant(response[i].pid, response[i].addr, response[i].name);
      this.restaurants.push(restaurant);
    }

    //ts:  i really like this - very helpful to make sure I undestand what's going on.  will do this moving forward.  
    //// Better yet, use this functional style below to make the purpose of your code clearer
    
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
      restaurant_detailed = Restaurant[pid](response[i].coords, response[i].totals, response[i].violations);
      this.restaurants.push(restaurant_detailed);
    }

    //ts:  Yoshi, can you please confirm I've done this right?  
    /*
    this.restaurant_detailed = reponse.map(function(item){
      return restaurant[pid](item.coords, item.totals, item.violatios);
    });
    */
  }
}
