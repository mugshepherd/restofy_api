// this was originally the first restaurants.js file I had.  I was testing to make sure I could access the API, and realized that I couldn't figure out the second API call.  That had me thinking that I needed to abstract them out to sepearate allRestaurants.js and restaurant.js files.  But I'm not doing that right...



// $(document).ready(function () {
	
// 	var restaurantsDetails = {}

// 	$.getJSON( "http://grahamimac.com/inspectionmapper/allrest_id.php?callback=?", function( resp ) {


// trying to save data into a variable that I can call into the map.js file
// 		lookup = []

// 		restos = resp.results
// 		for(var i = 0, l = restos.length; i < l; i++) {
// 			var obj = restos[i];
// 			name = obj.name
// 			pid = obj.pid
// 			addr = obj.addr
// 			lookup.push.apply(lookup, obj[i])
// 			console.log(lookup)
// 		}

			// $('#RestaurantDiv').append('<div>'+ name + ' ' + addr + '</div>')
			// }

			// see http://stackoverflow.com/questions/4156101/javascript-push-array-values-into-another-array




//works to print values to screen
		// restos = resp.results
		//  for(var i = 0, l = restos.length; i < l; i++) {
	 //    	var obj = restos[i];
	 //    	name = obj.name
	 //    	pid = obj.pid
	 //    	addr = obj.addr
	 //  		$('#RestaurantDiv').append('<div>'+ name + ' ' + addr + '</div>'),
	 //  		$(restaurantsDetails).push(restos)
	 //  	};



// this thread recommends using a lookup variable.  http://stackoverflow.com/questions/7364150/find-object-by-id-in-array-of-javascript-objects, but I don't get any different value
    // var lookup = {};

    // for(var i = 0, len = resp.results.length; i < len; i++) {
    // 	lookup[resp.results[i].id] = resp.results[i]
    // 	name = resp.results[i].name

    // 	// console.log(obj.name),
    // };
    // 	$.each(obj, function(i){
    // 		$('#RestaurantDiv').append('<div>'+ name + '</div>')
    // 	})




    	// $('#RestaurantDiv').html(obj.name).appendTo( "body" );
    //   // console.log( key + " : " + value );

  // 	$('#RestaurantDiv').html( function(restos){
	 //    for(var i = 0, l = restos.length; i < l; i++) {
	 //    	var obj = restos[i];
	 //    	console.log(obj.name)
	 //    //   // console.log( key + " : " + value );
	 //    };
		// }),

		// $.each(restos, function(){
		// 	$('#RestaurantDiv').html(restos[0].name)
		// })


	// $.ajax ({
	// 	url: "http://grahamimac.com/inspectionmapper/allrest_id.php?callback=?",
	// 	type: 'GET',
	// 	dataType: 'jsonp',
	// 	success: function(data){
	// 	  $('#RestaurantDiv').html(data.first);
	// 	 }
	// });// Your code here });
// 	});
// });