var gkey = con.gApi,
    name,
    lat,
    long;

function insertScript() {
  var gApi = document.createElement('script');

  gApi.src = 'https://maps.googleapis.com/maps/api/js?key='+ gkey +'&callback=init&libraries=places,geometry';
	document.body.appendChild(gApi);
};

function init() {
console.log('here');	
var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city"));
console.log('also');
	autocomplete.addListener('places_changed', function() {
		var place = autocomplete.getPlaces()[0];
    name = document.querySelector('#city').value;
    lat =  place.geometry.location.lat();
    long =  place.geometry.location.lng();
    // document.querySelector("#latitude").value =
	});
}

insertScript();
