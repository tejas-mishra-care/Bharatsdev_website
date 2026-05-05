const fs = require('fs');

const heroFiles = [
  'src/components/home/hero.tsx',
  'src/app/process/page.tsx',
  'src/app/work/page.tsx',
  'src/app/technologies/page.tsx',
  'src/app/student-hub/page.tsx',
  'src/app/services/page.tsx',
  'src/app/insights/page.tsx',
  'src/app/contact/page.tsx'
];

const otherFiles = [
  'src/components/home/solutions-grid.tsx',
  'src/components/home/pillars.tsx',
  'src/components/home/hero-case-study.tsx',
  'src/components/home/final-cta.tsx'
];

function processFiles(files, isHero) {
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the mix-blend and opacity on the video tag
    // Some are opacity-30, opacity-40, opacity-80
    content = content.replace(/mix-blend-luminosity opacity-\d+/g, isHero ? 'opacity-75' : 'opacity-50');
    
    // Sometimes mix-blend is separated or alone
    content = content.replace(/mix-blend-[a-z-]+ /g, '');

    // Replace the gradient overlay divs with a simpler black film
    // The divs usually look like: <div className="absolute inset-0 bg-gradient-to-t from-... via-... to-..." />
    content = content.replace(/<div className="absolute inset-0 bg-gradient-to-t from-[^"]+" \/>/g, 
      isHero ? '<div className="absolute inset-0 bg-black/25" />' : '<div className="absolute inset-0 bg-black/50" />');
      
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  });
}

processFiles(heroFiles, true);
processFiles(otherFiles, false);
