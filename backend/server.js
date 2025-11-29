const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const unique = Date.now() + path.extname(file.originalname);
    cb(null, unique);
  },
});
const upload = multer({ storage });

// ✅ Database setup
const dbPath = path.join(__dirname, "data.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT,
      caption TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// ✅ Restaurant caption generator (10 random captions)
function randomCaption() {
  const captions = [
    "Good food, good mood 🍽️",
    "Happiness is homemade ❤️",
    "Savor the flavor!",
    "A taste that tells a story.",
    "Life’s too short for bad meals.",
    "Made with love & butter 🧈",
    "Serving smiles since forever 😊",
    "Feast mode: ON 🍔",
    "Bringing flavor to life 🌶️",
    "Eat. Laugh. Repeat. 🍕"
  ];
  return captions[Math.floor(Math.random() * captions.length)];
}

// ✅ Upload endpoint
app.post("/api/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filename = req.file.filename;
    const caption = randomCaption();

    db.run(
      `INSERT INTO entries (filename, caption) VALUES (?, ?)`,
      [filename, caption],
      (err) => {
        if (err) {
          console.error("DB insert error:", err);
          return res.status(500).json({ error: "Database insert failed" });
        }
        res.json({ success: true, caption });
      }
    );
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// ✅ Get all entries
app.get("/api/entries", (req, res) => {
  db.all(`SELECT * FROM entries ORDER BY id DESC`, (err, rows) => {
    if (err) return res.status(500).json({ error: "Database fetch failed" });
    res.json(rows);
  });
});

// ✅ Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
