import React from "react";

export default function Gallery({ entries }) {
  return (
    <div className="gallery">
      {entries.map(entry => (
        <div className="entry" key={entry.id}>
          <img src={entry.imageUrl} alt="" />
          <div className="small" style={{ marginTop: 8 }}>{entry.poem}</div>
          <div className="small">Color: {entry.avgColor}</div>
        </div>
      ))}
    </div>
  );
}
