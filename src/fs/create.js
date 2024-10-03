import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = resolve(__dirname, 'files', 'fresh.txt');

        await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
        console.log('File successfully created');
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
