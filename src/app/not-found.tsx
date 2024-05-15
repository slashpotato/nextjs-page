// src/app/not-found.tsx
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

const NotFoundPage = async () => {
    const publicDirectory = path.join(process.cwd(), 'public');
    const srcDirectory = path.join(process.cwd(), 'src/app');

    let publicFiles: string[] = [];
    let srcDirectories: string[] = [];

    try {
        // Получаем файлы из директории public
        publicFiles = await fs.readdir(publicDirectory);

        // Получаем все элементы из директории src
        const srcItems = await fs.readdir(srcDirectory);

        // Фильтруем только папки из src
        const srcStats = await Promise.all(srcItems.map(async item => {
            const itemPath = path.join(srcDirectory, item);
            const stats = await fs.stat(itemPath);
            return { item, isDirectory: stats.isDirectory() };
        }));

        srcDirectories = srcStats.filter(stat => stat.isDirectory).map(stat => stat.item);

    } catch (err) {
        console.error('Error reading files or directories:', err);
    }

    return (
        <div className="container p-4 classic">
            <h1 className="text-2xl font-bold mb-4">404 | Not Found</h1>
            <p className='mb-2'>Here&apos;s where you can go:</p>
            <h2 className="text-2xl font-bold mb-4">Pages</h2>
            {srcDirectories.length === 0 ? (
                <p>No directories found in the src directory.</p>
            ) : (
                <ol className="space-y-2 list-none">
                    {srcDirectories.map((dir, index) => (
                        <li key={index} className="text-white">
                            <Link href={`/${dir}`} passHref className='noblue flex items-center gap-[2px]'>
                                <span className="material-symbols-rounded">article</span> {dir}
                            </Link>
                        </li>
                    ))}
                </ol>
            )}
            <h2 className="text-2xl font-bold mb-4 mt-8">Public Files</h2>
            {publicFiles.length === 0 ? (
                <p>No files found in the public directory.</p>
            ) : (
                <ol className="space-y-2 list-none">
                    {publicFiles.map((file, index) => (
                        <li key={index} className="text-white">
                            <Link href={`/${file}`} passHref className='noblue flex items-center gap-[2px]'>
                                <span className="material-symbols-rounded">draft</span> {file}
                            </Link>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default NotFoundPage;
