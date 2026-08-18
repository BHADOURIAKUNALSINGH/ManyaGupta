const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function extractSvgImages(inputBasename, outputBasename, assetsDirname) {
  const inputFile = path.join("public", inputBasename);
  const outputFile = path.join("public", outputBasename);
  const outputDir = path.join("public", assetsDirname);

  if (!fs.existsSync(inputFile)) {
    console.log(`Input file does not exist: ${inputFile}`);
    return;
  }

  console.log(`\n================================`);
  console.log(`Starting extraction for ${inputBasename}...`);
  console.log(`Reading SVG...`);

  let svg = fs.readFileSync(inputFile, "utf8");

  fs.mkdirSync(outputDir, { recursive: true });

  const regex =
    /<image\b([^>]*?)((?:xlink:)?href)=["']data:image\/([^;]+);base64,([^"']+)["']([^>]*)>/g;

  let match;
  let count = 0;
  const replacements = [];

  while ((match = regex.exec(svg)) !== null) {
    count++;

    const attrPrefix = match[1];
    const hrefAttr = match[2];
    const mimeType = match[3];
    const base64Data = match[4];
    const attrSuffix = match[5];

    const buffer = Buffer.from(base64Data, "base64");

    const outputName = `image-${String(count).padStart(2, "0")}.webp`;
    const outputPath = path.join(outputDir, outputName);

    console.log(
      `[${inputBasename}] Processing image ${count} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)...`
    );

    try {
      await sharp(buffer)
        .webp({
          quality: 85,
          effort: 2,
        })
        .toFile(outputPath);
    } catch (e) {
      console.error(`Error processing image ${count} in ${inputBasename}:`, e);
      continue;
    }

    const relativePath = `${assetsDirname}/${outputName}`;

    const oldTag = match[0];
    const newTag =
      `<image${attrPrefix}` +
      `${hrefAttr}="${relativePath}"` +
      `${attrSuffix}>`;

    replacements.push({ oldTag, newTag });
  }

  console.log(`Applying ${count} replacements to SVG structure...`);
  for (const { oldTag, newTag } of replacements) {
    svg = svg.replace(oldTag, newTag);
  }

  fs.writeFileSync(outputFile, svg);

  console.log(`Done! Output file: ${outputFile}`);
  console.log(`================================\n`);
}

async function main() {
  // Process Canon SVG
  await extractSvgImages("canon.svg", "Canon-external.svg", "canon-assets");
  
  // Process Dodge SVG
  await extractSvgImages("dodge.svg", "Dodge-external.svg", "dodge-assets");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
