import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyBF4W-L7n1LdKmWnIkaonfFMQdUZ1BOBjk", // Replace with your Google Maps API key
  version: "weekly", // Replace with the desired version of the Google Maps API
});

function initMap() {
  const location = { lat: 36.2859308, lng: -115.092762 };
  const mapOptions = {
    center: location,
    zoom: 15,
    mapTypeId: "satellite",
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const markerOptions = {
    position: location,
    map: map,
    title: "North Las Vegas VA Medical Center",
  };
  const marker = new google.maps.Marker(markerOptions);
}

export function renderMap() {
  loader.load().then(() => {
    initMap();
  });
}
