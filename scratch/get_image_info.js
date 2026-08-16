const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

async function check() {
  const dir = 'C:/Users/bhado/.gemini/antigravity-ide/brain/35bbd9a4-a0ee-4bb0-b4bf-99c078bf79aa';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') || f.endsWith('.png'));
  
  for (const file of files) {
    try {
      const img = await Jimp.read(path.join(dir, file));
      console.log(`- ${file}: ${img.width}x${img.height}`);
    } catch (e) {
      // Ignored for non-jimp readable files
    }
  }
}

check();
