import { readdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const dirPath = resolve(__dirname, 'files');

        const fileList = await readdir(dirPath)
        console.log(fileList);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();