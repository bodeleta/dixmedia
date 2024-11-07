const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file XML saat URL /video/ diakses
app.get('/video', (req, res) => {
  // Tentukan lokasi file XML
  const xmlFilePath = path.join(__dirname, 'xml-files', 'video.xml');

  // Kirim file XML ke client
  res.sendFile(xmlFilePath);
});

// Menjalankan server pada port yang diberikan oleh Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
