import { rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = resolve(__dirname, 'files', 'fileToRemove.txt');

        await rm(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();