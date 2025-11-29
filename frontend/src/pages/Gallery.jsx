import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then(setImages)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="gallery">
      <h2>Your Poetry Gallery</h2>
      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="gallery-item"
          >
            <img src={`/uploads/${item.filename}`} alt="poem" />
            <p>“{item.caption || item.poem}”</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
