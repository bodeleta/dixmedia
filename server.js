const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Konfigurasi CORS untuk mengizinkan akses dari semua origin (hanya untuk testing)
app.use(cors({
  origin: '*', // Mengizinkan semua origin
  methods: ['GET'], // Hanya mengizinkan metode GET
  allowedHeaders: ['Content-Type'] // Hanya mengizinkan header tertentu
}));

// Route untuk menyajikan file XML
app.get('/video', (req, res) => {
  // Tentukan lokasi file XML
  const xmlFilePath = path.join(__dirname, 'xml-files', 'video.xml');

  // Atur Content-Type untuk memastikan file dikenali sebagai XML
  res.setHeader('Content-Type', 'application/xml');

  // Kirim file XML ke client
  res.sendFile(xmlFilePath, (err) => {
    if (err) {
      console.error('Gagal mengirim file XML:', err);
      res.status(500).send('Error saat mengirim file XML');
    }
  });
});

// Menjalankan server pada port yang diberikan oleh Heroku atau port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
