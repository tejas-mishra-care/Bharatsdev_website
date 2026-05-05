const fs = require('fs');

const updates = [
  {
    file: 'src/app/work/page.tsx',
    search: '<section className="pt-40 pb-24 relative overflow-hidden">',
    replacement: '<section className="relative pt-40 pb-32 flex items-center justify-center min-h-[60vh] overflow-hidden border-b border-[#2A2A2E]">'
  },
  {
    file: 'src/app/student-hub/page.tsx',
    search: '<section className="pt-40 pb-24 relative overflow-hidden">',
    replacement: '<section className="relative pt-40 pb-32 flex items-center justify-center min-h-[60vh] overflow-hidden border-b border-[#2A2A2E]">'
  },
  {
    file: 'src/app/insights/page.tsx',
    search: '<section className="pt-40 pb-24 relative overflow-hidden border-b border-[#2A2A2E]">',
    replacement: '<section className="relative pt-40 pb-32 flex items-center justify-center min-h-[60vh] overflow-hidden border-b border-[#2A2A2E]">'
  },
  {
    file: 'src/app/technologies/page.tsx',
    search: '<section className="py-20 md:py-32 text-center bg-gradient-to-b from-secondary/50 via-background to-background relative overflow-hidden">',
    replacement: '<section className="relative pt-40 pb-32 flex items-center justify-center min-h-[60vh] text-center overflow-hidden border-b border-[#2A2A2E]">'
  },
  {
    file: 'src/app/process/page.tsx',
    search: '<section className="py-20 md:py-32 text-center bg-gradient-to-b from-secondary/50 via-background to-background relative overflow-hidden">',
    replacement: '<section className="relative pt-40 pb-32 flex items-center justify-center min-h-[60vh] text-center overflow-hidden border-b border-[#2A2A2E]">'
  },
  {
    file: 'src/app/services/page.tsx',
    search: '<section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">',
    replacement: '<section className="relative pt-40 pb-32 flex items-center justify-center min-h-[60vh] overflow-hidden border-b border-[#2A2A2E]">'
  }
];

updates.forEach(update => {
  if (fs.existsSync(update.file)) {
    let content = fs.readFileSync(update.file, 'utf8');
    if (content.includes(update.search)) {
      content = content.replace(update.search, update.replacement);
      fs.writeFileSync(update.file, content);
      console.log('Updated', update.file);
    } else {
      console.log('Search string did not match in', update.file);
    }
  } else {
    console.log('File not found:', update.file);
  }
});
