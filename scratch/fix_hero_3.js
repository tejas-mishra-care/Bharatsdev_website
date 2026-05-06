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

    // 1. Remove the line: const heroRef = useRef(null);
    content = content.replace(/const heroRef = useRef\(null\);\n\s*/g, '');

    // 2. Remove the line: const heroInView = useInView(heroRef, { once: true... });
    content = content.replace(/const heroInView = useInView\(heroRef[^\)]*\);\n\s*/g, '');

    // 3. Remove ref={heroRef}
    content = content.replace(/\s*ref=\{heroRef\}/g, '');

    // 4. Fix animate
    // e.g. animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    // We only want the first object: { opacity: 1, y: 0 }
    // Using string replace with precise regex
    content = content.replace(/animate=\{heroInView \? (\{[^}]+\}) : \{[^}]+\}\}/g, 'animate={$1}');

    fs.writeFileSync(file, content);
    console.log('Successfully fixed', file);
  }
});
