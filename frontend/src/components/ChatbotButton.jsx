import React from "react";
import { motion } from "framer-motion";
import "../index.css";

export default function ChatbotButton() {
  return (
    <motion.div
      className="chatbot-button"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      onClick={() => alert("🤖 AI Assistant coming soon!")}
    >
      🤖
    </motion.div>
  );
}
