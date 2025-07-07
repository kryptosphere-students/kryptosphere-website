import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
    

const INPUT_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public_compressed');
const SUPPORTED_EXT: string[] = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.gif', '.webp'];

function ensureDirSync(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function processImage(inputPath: string, outputPath: string) {
  try {
    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log('Compressed:', outputPath);
  } catch (err) {
    console.error('Error compressing', inputPath, err);
  }
}

function copyFile(inputPath: string, outputPath: string) {
  fs.copyFileSync(inputPath, outputPath);
  console.log('Copied:', outputPath);
}

async function processDir(inputDir: string, outputDir: string): Promise<void> {
  try {
    ensureDirSync(outputDir);
    const files = fs.readdirSync(inputDir);
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      const stat = fs.statSync(inputPath);
      if (stat.isDirectory()) {
        await processDir(inputPath, outputPath);
      } else {
        const ext = path.extname(file);
        if (SUPPORTED_EXT.includes(ext)) {
          const webpPath = outputPath.replace(ext, '.webp');
          await processImage(inputPath, webpPath);
        } else if (ext.toLowerCase() === '.svg') {
          copyFile(inputPath, outputPath); // SVGs are copied as-is
        }
      }
    }
  } catch (err) {
    console.error('Error processing directory', inputDir, err);
  }
}

(async () => {
    try {
  await processDir(INPUT_DIR, OUTPUT_DIR);
  console.log('All images processed!');
} catch (err) {
    console.error("🔥 Uncaught error:", err)
    process.exit(1)
  }
})()
