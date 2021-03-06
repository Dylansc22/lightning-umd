import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoidnByZWxvdmFjIiwiYSI6ImNqYzlqZjZjdDAwMXEyenJ1eDA0ZjJnanAifQ.HfZmaH2OvqcECAIi87A4Vg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  maxZoom: 5.99,
  minZoom: 4,
  zoom: 5,
  center: [-75.789, 41.874],
});

var frameCount = 5;
var currentImage = 0;

function getPath() {
  return (
    "https://docs.mapbox.com/mapbox-gl-js/assets/radar" + currentImage + ".gif"
  );
}

map.on("load", function () {
  map.addSource("radar", {
    type: "image",
    url: getPath(),
    coordinates: [
      [-80.425, 46.437],
      [-71.516, 46.437],
      [-71.516, 37.936],
      [-80.425, 37.936],
    ],
  });
  map.addLayer({
    id: "radar-layer",
    type: "raster",
    source: "radar",
    paint: {
      "raster-fade-duration": 0,
    },
  });

  setInterval(function () {
    currentImage = (currentImage + 1) % frameCount;
    map.getSource("radar").updateImage({ url: getPath() });
  }, 200);
});
