const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Menyajikan file XML saat URL /video/ diakses
app.get('/video', (req, res) => {
  const xmlFilePath = path.join(__dirname, 'xml-files', 'video.xml');

  // Cek apakah file ada sebelum mengirimnya
  fs.exists(xmlFilePath, (exists) => {
    if (exists) {
      // Menambahkan header Content-Type untuk file XML
      res.setHeader('Content-Type', 'application/xml');
      res.sendFile(xmlFilePath);
    } else {
      res.status(404).send('File not found');
    }
  });
});

// Menangani permintaan file lain yang perlu konfigurasi header khusus
app.get('/another-file', (req, res) => {
  const anotherFilePath = path.join(__dirname, 'xml-files', 'anotherfile.xml');

  fs.exists(anotherFilePath, (exists) => {
    if (exists) {
      res.setHeader('Content-Type', 'application/xml');
      res.sendFile(anotherFilePath);
    } else {
      res.status(404).send('File not found');
    }
  });
});

// Menjalankan server pada port yang diberikan oleh Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
