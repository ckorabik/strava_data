// script.js

// Initialize the map and set its view to the United States
const map = L.map('map').setView([37.8, -96], 4); // Centered on the USA

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to add a circle at a certain distance
function addDistanceCircle(lat, lng, radius, color) {
    L.circle([lat, lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: radius * 1609.34 // Convert miles to meters
    }).addTo(map);
}

// Define the central location (latitude, longitude) and distances in miles
const centralLocation = [41.867230, -87.654080]; // 1076 W Roosevelt
const distances = [50, 100, 150]; // Distances in miles
const colors = ['red', 'green', 'blue']; // Colors for the circles

// Add circles to the map
distances.forEach((distance, index) => {
    addDistanceCircle(centralLocation[0], centralLocation[1], distance, colors[index]);
});