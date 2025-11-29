import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

export default function UploadsPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/api/entries")
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <h1>Previous Uploads</h1>

      <button className="button" onClick={() => window.location.href='/'}>
        ⬅ Back to Home
      </button>

      <Gallery entries={entries} />
    </div>
  );
}
