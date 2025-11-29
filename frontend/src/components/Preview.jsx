import React from "react";

export default function Preview({ previewUrl, avgColor, dims, file }) {
  return (
    <div className="preview-box">
      <h3>Preview</h3>

      {previewUrl ? (
        <>
          <img src={previewUrl} alt="preview" style={{ width: "100%", borderRadius: 8 }} />
          <div className="small" style={{ marginTop: 8 }}>
            {file?.name}<br />
            Avg Color: {avgColor}<br />
            Size: {dims.width}×{dims.height}
          </div>
        </>
      ) : (
        <div className="small">No image selected.</div>
      )}
    </div>
  );
}
