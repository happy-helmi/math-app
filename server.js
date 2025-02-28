// server.js - Hauptstartpunkt für die Mathe-App mit Passenger

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Statische Dateien aus dem "public"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Hauptseite der App
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Passenger aktivieren, falls verfügbar
if (typeof(PhusionPassenger) !== 'undefined') {
    PhusionPassenger.configure({ autoInstall: false });
    app.listen('passenger', () => console.log('Mathe-App läuft mit Passenger!'));
} else {
    app.listen(port, () => console.log(`Mathe-App läuft auf Port ${port}`));
}

module.exports = app;
