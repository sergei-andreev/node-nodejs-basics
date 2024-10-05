import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = resolve(__dirname, 'files', 'fileToRead.txt');

        const fileContent = await readFile(filePath, { encoding: 'utf8' })
        console.log(fileContent);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();