import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoidnByZWxvdmFjIiwiYSI6ImNqYzlqZjZjdDAwMXEyenJ1eDA0ZjJnanAifQ.HfZmaH2OvqcECAIi87A4Vg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
