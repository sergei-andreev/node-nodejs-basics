import { cp } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const dirPath = resolve(__dirname, 'files');
        const copyDirPath = resolve(__dirname, 'files_copy')

        await cp(dirPath, copyDirPath, { recursive: true, errorOnExist: true, force: false });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
