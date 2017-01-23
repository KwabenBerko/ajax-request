$(document).ready(function(){
   //Logic goes here
   var main = $("#main");

   $.ajax({
   	url: 'http://pure-forest-79660.herokuapp.com/footballers',
   	type: "GET",
   	dataType: 'JSON',
   	success: function(response){
   		if (response.success) {
   			var footballers = response.footballers;
   			for(var i = 0; i < footballers.length; i++){

   				var listItem =
   				'<div class="footballer-card">' +
   				'<div class="row">' +
   				'<div class="col-md-3">' +
   				'<img src=" '+ footballers[i].imageUrl +' " class="footballer-img">' +
   				'</div>' +
   				'<div class="col-md-8">' +
   				'<p class="footballer-details">' +
   				'<p class="name"><b>Name: </b>'+ footballers[i].name +'<p/>' +
   				'<p class="club"><b>Club: </b>'+ footballers[i].club +'<p/>' +
   				'</p>'
   				'</div>' +
   				'</div>' +
   				'</div>'
   				;
   				main.append(listItem);
   			}

   		}
   		else{
   			alert("Oops, an error occured fetching the remote data.");
   		}
   	}
   });
});

