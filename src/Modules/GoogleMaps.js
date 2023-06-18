import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyBF4W-L7n1LdKmWnIkaonfFMQdUZ1BOBjk", // Replace with your Google Maps API key
  version: "weekly", // Replace with the desired version of the Google Maps API
});

loader.load().then(() => {
  initMap();
});

function initMap() {
  const location = { lat: -34.397, lng: 150.644 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
