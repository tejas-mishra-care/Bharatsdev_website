const fs = require('fs');

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

    // Fix the broken animate syntax
    content = content.replace(/animate=\{\s*opacity: 1/g, 'animate={{ opacity: 1');
    content = content.replace(/animate=\{\{ opacity: 1([^}]+)\}\s*/g, 'animate={{ opacity: 1$1 }}\n');
    content = content.replace(/animate=\{\{ opacity: 1, y: 0 \}\s*/g, 'animate={{ opacity: 1, y: 0 }}\n');
    content = content.replace(/animate=\{\{ opacity: 1, y: 0, scale: 1 \}\s*/g, 'animate={{ opacity: 1, y: 0, scale: 1 }}\n');
    
    // Remove the declarations
    content = content.replace(/const heroRef = useRef\(null\);[\s\n]*const heroInView = useInView\(heroRef, \{ once: true([^\}]*)\} \);/g, '');
    content = content.replace(/const heroRef = useRef\(null\);[\s\n]*const heroInView = useInView\(heroRef[^)]*\);/g, '');
    
    // Remove the ref usage
    content = content.replace(/ref=\{heroRef\}/g, '');

    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
