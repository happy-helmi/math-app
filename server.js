const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien aus dem React-Build-Ordner bereitstellen
app.use(express.static(path.join(__dirname, "build")));

// Alle anderen Routen auf `index.html` weiterleiten
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Server starten
app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
