// src/files/fileManager.js
const fs = require('fs');
const path = require('path');

// Import the google-maps library
const { Loader } = require('@googlemaps/js-api-loader');

const loader = new Loader({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  version: 'weekly',
});

loader.load().then(() => {
  console.log('Google Maps JavaScript API loaded successfully.');
  // You can now create a map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

module.exports = {
  createFile: (dir, filename, content) => {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File created at ${filePath}`);
  },
  readFile: (dir, filename) => {
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    } else {
      console.log(`File not found at ${filePath}`);
      return null;
    }
  },
  deleteFile: (dir, filename) => {
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`File deleted at ${filePath}`);
    } else {
      console.log(`File not found at ${filePath}`);
    }
  }
};
