const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/bhado/.gemini/antigravity-ide/brain/35bbd9a4-a0ee-4bb0-b4bf-99c078bf79aa';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

console.log('Brain Root PNG Dimensions:');
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
