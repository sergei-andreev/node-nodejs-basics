import { rename as rn, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { constants } from 'node:fs';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = resolve(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = resolve(__dirname, 'files', 'properFilename.md');

    try {
        await access(newFilePath, constants.F_OK);
        throw new Error('FS operation failed');
    } catch(error) {
        if (error.code !== 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }

    try {
        await rn(filePath, newFilePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();