const fs = require('fs');

const updates = [
  'src/app/work/page.tsx',
  'src/app/student-hub/page.tsx',
  'src/app/insights/page.tsx',
  'src/app/technologies/page.tsx',
  'src/app/process/page.tsx',
  'src/app/services/page.tsx'
];

updates.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('min-h-[60vh]')) {
      content = content.replace(/min-h-\[60vh\]/g, 'min-h-screen');
      fs.writeFileSync(file, content);
      console.log('Updated to min-h-screen:', file);
    } else {
      console.log('No min-h-[60vh] found in:', file);
    }
  } else {
    console.log('File not found:', file);
  }
});
