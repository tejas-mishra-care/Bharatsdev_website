const fs = require('fs');
const glob = require('glob'); // Note: we might not have glob, but we know the exact files from grep.

const files = [
  'src/app/careers/page.tsx',
  'src/app/services/strategy-design/page.tsx',
  'src/app/services/app-development/page.tsx',
  'src/app/services/web-ecommerce/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/enterprise-ai/page.tsx',
  'src/app/process/page.tsx',
  'src/app/technologies/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove heroRef definition
    content = content.replace(/const heroRef = useRef\(null\);\n\s*const heroInView = useInView\(heroRef.*?\);\n/g, '');
    
    // Remove ref={heroRef}
    content = content.replace(/ref=\{heroRef\}\n\s*/g, '');
    
    // Replace animate={heroInView ? ... : ...}
    // E.g. animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    // E.g. animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
    content = content.replace(/animate=\{heroInView \? (\{[^}]+\}) : \{[^}]+\}\}/g, 'animate=$1');

    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
