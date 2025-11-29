import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <div className="home">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Transform Your Images into Poetry 🎨
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Let your pictures speak in verses — upload a photo and watch AI weave
        a poem inspired by your emotions.
      </motion.p>
      <Link to="/generate">
        <button className="button">Start Creating →</button>
      </Link>

      <motion.section
        className="objective"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h2>Our Objective</h2>
        <ul>
          <li>Turn emotions into art using AI-generated poetry.</li>
          <li>Make creativity accessible and visually expressive.</li>
          <li>Encourage poetic storytelling through images.</li>
        </ul>
      </motion.section>
    </div>
  );
}
