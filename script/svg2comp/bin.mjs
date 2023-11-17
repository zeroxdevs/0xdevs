// "npx @svgr/cli --template ./template.js --typescript --out-dir ./src/components/Svg/assets -- ./public/*";
import inquirer from 'inquirer';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const __dirname = new URL('.', import.meta.url).pathname;
const __root = path.join(__dirname, '..', '..');
const sourceDir = path.join(__root, 'public', 'assets');
const distDir = path.join(__root, 'src', 'components', 'Svg', 'assets');

const totalSvgCount = fileCounter(sourceDir);

if (totalSvgCount) {
  const yesNoQuestion = [
    {
      type: 'confirm',
      name: 'convertSvg',
      message: `\x1b[94m${totalSvgCount} \x1b[97m SVG files were found in the "${sourceDir}" ​​folder, would you like to convert it to component?`,
      default: true,
    },
    {
      type: 'confirm',
      name: 'deleteSvg',
      message: '\x1b[33m Should I delete SVGs after conversion?',
      default: false,
    },
  ];

  inquirer.prompt(yesNoQuestion).then((answers) => {
    const { convertSvg, deleteSvg } = answers;
    if (convertSvg) {
      const command = `npx @svgr/cli --typescript --out-dir ${distDir} -- ${path.join(
        sourceDir,
        '*',
      )}`;
      console.log(execSync(command).toString());
      if (deleteSvg) {
        deleteSvgFiles(sourceDir);
      }
    }
  });
} else {
  console.log('\x1b[33m', `No SVG files found in "${sourceDir}"`);
}

export default function fileCounter(directory) {
  let svgCount = 0;
  const items = fs.readdirSync(directory);
  for (const item of items) {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      svgCount += fileCounter(fullPath);
    } else {
      if (path.extname(fullPath).toLowerCase() === '.svg') {
        svgCount++;
      }
    }
  }
  return svgCount;
}

function deleteSvgFiles(directory) {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const fullPath = path.join(directory, item);

    if (fs.statSync(fullPath).isDirectory()) {
      deleteSvgFiles(fullPath);
    } else {
      if (path.extname(fullPath).toLowerCase() === '.svg') {
        fs.unlinkSync(fullPath);
        console.log(`\x1b[31m Deleted: ${fullPath} \x1b[97m`);
      }
    }
  }
}
