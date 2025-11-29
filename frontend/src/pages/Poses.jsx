import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const Poses = () => {
  return (
    <div className="poses-page">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📸 Photo Pose Inspirations
      </motion.h1>

      <p>Explore creative pose ideas — from solos to couple and group styles!</p>

      {/* --- Couple Poses Section --- */}
      <div className="pose-section">
        <h2>💑 Couple Poses</h2>
        <div className="pose-gallery">
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjepJvb2pmXnbJ5WI0aqx_kMaqfE3RxV4EGQ&s"
            alt="Couple pose 1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="data:image/jpeg;base64,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"
            alt="Couple pose 2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://www.lummi.ai/api/pro/image/4b5b5a72-5e46-4a0d-8d1e-d01cfd8fd5cc?asset=original&cb=Ri5VaW&auto=format&w=640"
            alt="Couple pose 3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      

      {/* --- Gang Poses Section --- */}
      <div className="pose-section">
        <h2>👬 Gang Poses</h2>
        <div className="pose-gallery">
          <motion.img
            src="https://img.freepik.com/free-vector/group-people-illustration-theme_23-2148470867.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Gang pose 1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX81kqq_G52j0sXq2RYkRN2XrMalNhgqx4kA&s"
            alt="Gang pose 2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://i.pinimg.com/736x/49/06/66/490666c5986dc646b2745203e15474fe.jpg"
            alt="Gang pose 3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* --- Solo Poses Section --- */}
      <div className="pose-section">
        <h2>🧍‍♀️ Solo Poses</h2>
        <div className="pose-gallery">
          <motion.img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
            alt="Solo pose 1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Solo pose 2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Solo pose 3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* --- Footer --- */}
     
    </div>
  );
};

export default Poses;
