const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');

async function compress(svgName, jpegName) {
  const svgPath = path.join(__dirname, 'public', svgName);
  const jpegPath = path.join(__dirname, 'public', jpegName);
  const publicDir = path.join(__dirname, 'public');
  
  if (!fs.existsSync(svgPath)) {
    console.error(`SVG file does not exist: ${svgPath}`);
    return;
  }

  console.log(`Reading SVG: ${svgName}...`);
  const svgBuffer = fs.readFileSync(svgPath);
  
  console.log(`Rendering SVG with resvg (this may take a few seconds)...`);
  const resvg = new Resvg(svgBuffer, {
    fitTo: { mode: 'width', value: 1280 },
    resourcesDir: publicDir
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  
  console.log(`Compressing to JPEG...`);
  await sharp(pngBuffer)
    .jpeg({ quality: 85, progressive: true })
    .toFile(jpegPath);
    
  console.log(`Success! Saved ${jpegName}. size: ${(fs.statSync(jpegPath).size / (1024*1024)).toFixed(2)} MB`);
}

async function run() {
  try {
    console.log("Starting SVG to JPEG conversion process...");
    await compress('MeetCatch-external.svg', 'meetcatch.jpg');
    await compress('Canon-external.svg', 'canon.jpg');
    await compress('Dodge-external.svg', 'dodge.jpg');
    console.log("All conversions completed successfully!");
  } catch (e) {
    console.error("Error during conversion:", e);
  }
}

run();
