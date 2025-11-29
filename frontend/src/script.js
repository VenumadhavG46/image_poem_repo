export function computeAverageColor(imageEl, maxSize = 200) {
  const canvas = document.createElement("canvas");

  let w = imageEl.naturalWidth;
  let h = imageEl.naturalHeight;

  if (!w || !h) {
    return { hex: "#808080", width: w, height: h };
  }

  const scale = Math.min(1, maxSize / Math.max(w, h));
  canvas.width = Math.floor(w * scale);
  canvas.height = Math.floor(h * scale);

  const ctx = canvas.getContext("2d");
  ctx.drawImage(imageEl, 0, 0, canvas.width, canvas.height);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let r = 0, g = 0, b = 0, count = 0;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);

  const hex = "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");

  return { hex, width: w, height: h };
}
