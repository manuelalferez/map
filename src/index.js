let map;

function initMap() {
  var myLatlng = new google.maps.LatLng(37.94359553891993, -4.213611913745383);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title: "Hello World!",
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
}
