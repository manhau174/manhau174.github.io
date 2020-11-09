function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 21.003025, lng: 105.854622},
			zoom: 18
	});
	var marker = new google.maps.Marker({
		position: {lat: 21.003025, lng: 105.854622},
		map: map
	});
	}
			  

 