import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';
import { convertToTs } from '../interpreter/interpreter';

const filePath = process.argv[2];

if (!filePath) {
    throw new Error('File path is missing.');
}

if (path.extname(filePath) !== '.shinchan') {
    throw new Error('Invalid file extension. Expected .shinchan file');
}

const shinchanCode = fs.readFileSync(filePath, 'utf-8');
const tsCode = convertToTs(shinchanCode);
const tempFilePath = 'temp.ts';

try {
    fs.writeFileSync(tempFilePath, tsCode);
    child_process.execSync(`ts-node ${tempFilePath}`, { stdio: 'inherit' });
} finally {
    // Delete the temporary TypeScript file after execution
    fs.unlinkSync(tempFilePath);
}
