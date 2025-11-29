import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../index.css";

export default function Generator() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please choose an image first.");
    const form = new FormData();
    form.append("image", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();
      setCaption(data.caption || data.poem || "Caption generated successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed. Check backend.");
    }
  };

  return (
    <div className="generator-box">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Generate Your Poem 🪶
      </motion.h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files[0]);
          setPreview(URL.createObjectURL(e.target.files[0]));
          setCaption("");
        }}
      />

      {preview && (
        <motion.img
          src={preview}
          alt="preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      <button className="button" onClick={handleUpload}>
        Generate Caption
      </button>

      <Link to="/gallery">
        <button className="button" style={{ marginLeft: "10px" }}>
          View Previous Uploads
        </button>
      </Link>

      {caption && (
        <motion.p
          className="caption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          “{caption}”
        </motion.p>
      )}
    </div>
  );
}
