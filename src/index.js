import { dataFirst } from "../data/dataFirst.js";
import { dataSecond } from "../data/dataSecond.js";

let map;

let geometry = [];

function getGeometry(features) {
  features.map((feature) => {
    geometry.push({
      lat: feature.geometry.coordinates[1],
      lng: feature.geometry.coordinates[0],
    });
  });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 37.94977521934078, lng: -4.208680637460683 },
  });

  const firstObject = JSON.parse(JSON.stringify(dataFirst));
  const secondObject = JSON.parse(JSON.stringify(dataSecond));

  getGeometry(firstObject.features);
  getGeometry(secondObject.features);

  const runningPath = new google.maps.Polyline({
    path: geometry,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  runningPath.setMap(map);
}

initMap();
