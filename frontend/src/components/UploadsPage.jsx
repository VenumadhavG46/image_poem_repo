import React, { useEffect, useState } from "react";

export default function UploadsPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  return (
    <div className="container">
      <h2>📁 Previous Uploads</h2>

      <button
        className="button"
        onClick={() => (window.location.href = "/")}
        style={{ marginBottom: 20 }}
      >
        ← Back to Home
      </button>

      {entries.length === 0 ? (
        <p>No uploads yet.</p>
      ) : (
        entries.map((item) => (
          <div key={item.id} style={{ marginBottom: 30 }}>
            <img
              src={`http://localhost:4000/uploads/${item.filename}`}
              alt="Uploaded"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p style={{ marginTop: 10, fontStyle: "italic" }}>
              “{item.caption}”
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
