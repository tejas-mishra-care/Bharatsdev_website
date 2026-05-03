const sharp = require('sharp');
const fs = require('fs');

async function resizeLogo() {
  try {
    const inputPath = 'public/bdlogo.png';
    const outputPath = 'src/app/favicon.ico';
    const appleIconPath = 'src/app/apple-icon.png';
    
    // Create tiny 64x64 favicon
    await sharp(inputPath)
      .resize(64, 64, { fit: 'contain' })
      .toFormat('png', { quality: 100 }) // .ico is effectively a png wrapper in modern browsers
      .toFile(outputPath);
      
    // Create 180x180 apple touch icon
    await sharp(inputPath)
      .resize(180, 180, { fit: 'contain' })
      .toFormat('png', { quality: 100 })
      .toFile(appleIconPath);
      
    console.log('Successfully generated optimized favicons.');
    
    // Check sizes
    const stat1 = fs.statSync(outputPath);
    const stat2 = fs.statSync(appleIconPath);
    console.log(`Favicon size: ${stat1.size / 1024} KB`);
    console.log(`Apple Icon size: ${stat2.size / 1024} KB`);
    
  } catch (error) {
    console.error('Error resizing logo:', error);
  }
}

resizeLogo();
