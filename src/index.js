let map;

function initMap() {
  const myLatLng = { lat: 37.94359553891993, lng: -4.213611913745383 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}
