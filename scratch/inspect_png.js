const fs = require('fs');
const path = require('path');

const dir = 'd:/web_dev/New folder (2)/manyaGupta/public';
const files = fs.readdirSync(dir).filter(f => f.startsWith('media_') && f.endsWith('.png'));

console.log('PNG Dimensions:');
files.forEach(file => {
  try {
    const filePath = path.join(dir, file);
    const buf = fs.readFileSync(filePath);
    if (buf.length > 24) {
      const width = buf.readInt32BE(16);
      const height = buf.readInt32BE(20);
      console.log(`- ${file}: ${width}x${height} (${Math.round(buf.length/1024)} KB)`);
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
  }
});
