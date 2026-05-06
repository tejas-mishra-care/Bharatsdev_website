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

    // Clean up unused imports of useInView
    // If it's `import { useInView } from 'framer-motion';` and not used anywhere else
    // Actually, it might be used in other sections.
    // Let's check if `useInView` is used elsewhere in the file.
    const useInViewMatch = content.match(/useInView/g);
    if (useInViewMatch && useInViewMatch.length === 1) { // Only the import exists
        content = content.replace(/import\s*\{\s*useInView\s*\}\s*from\s*['"]framer-motion['"];\n/g, '');
        content = content.replace(/,\s*useInView/g, '');
        content = content.replace(/useInView\s*,\s*/g, '');
    }

    fs.writeFileSync(file, content);
  }
});
