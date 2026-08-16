const fs = require('fs');
const path = require('path');

function inspectImage(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    if (buf.length > 24) {
      // Check if it's a PNG
      if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
        const width = buf.readInt32BE(16);
        const height = buf.readInt32BE(20);
        return { type: 'PNG', width, height };
      }
    }
  } catch (e) {}
  return null;
}

function scanDir(dirPath) {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch(e) { continue; }
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== '.next') {
        scanDir(fullPath);
      }
    } else if (stat.isFile() && fullPath.endsWith('.png')) {
      const info = inspectImage(fullPath);
      if (info && info.height > 1000) {
        console.log(`FOUND TALL PNG: ${fullPath} - ${info.width}x${info.height}`);
      }
    }
  }
}

console.log('Scanning directories for tall images...');
scanDir('d:/web_dev/New folder (2)/manyaGupta');
scanDir('C:/Users/bhado/.gemini/antigravity-ide/brain/35bbd9a4-a0ee-4bb0-b4bf-99c078bf79aa');
