var Restaurant = function(pid, addr, name, coords, totals, violations){
  this.pid = pid;
  this.addr = addr;
  this.name = name;
  this.coords = coords;
  this.totals = totals;
  this.violations = violations;
}	
// }

//   function getRestoData () {

//     restos = resp.results
      

//       restoDetails_baseURL = "http://grahamimac.com/inspectionmapper/onerest.php?callback=%3CString%3E&permitid=";

//        for(var i = 0, l = restos.length; i < l; i++) {
//           var obj = restos[i];
//           name = obj.name
//           pid = obj.pid
//           addr = obj.addr
//           url = restoDetails_baseURL + pid
//           $('#RestaurantDiv').append('<div id=' + pid + '>'+ name + ': ' + addr + ' ' + url + '</div>');
//           // $( "#"+pid ).click(function() {
//           //   console.log("clicked" + lat);
//           //   });

//           restaurantsDetails = $.getJSON( url ), function( resp ) {
//           };

//         };


//   }

//   function getRestoData_details () {

//   }



// Restaurant.prototype = {
//   base: function(){
//     $.ajax({
//       type: 'GET',
//       data: { restaurant: {addr: this.addr, name: this.name, pid: this.pid}},
//       dataType: 'jsonp',
//       url: "http://grahamimac.com/inspectionmapper/allrest_id.php?callback=?"
//     }).done(function(response){
//       console.log("model viewed")
//       allRestaurantsModel.fetchRestaurants();
//     }).fail(function(){
//       console.log("failed to save")
//     })
//   },
//   details: function(data){
//     $.ajax({
//       type: 'GET',
//       data: {restaurant: data},
//       dataType: 'jsonp',
//       url: "http://grahamimac.com/inspectionmapper/onerest.php?callback=<String>&permitid=" + this.pid
//     }).done(function(response){
//       trilloModel.fetchRestaurants();
//       console.log("model updated")
//     }).fail(function(){
//       console.log("failed to updated")
//     })
//   }
// }
