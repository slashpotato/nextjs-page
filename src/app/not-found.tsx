import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

const NotFoundPage = async () => {
    const publicDirectory = path.join(process.cwd(), 'public');
    const srcDirectory = path.join(process.cwd(), 'src/app');

    let publicFiles: string[] = [];
    let publicDirectories: string[] = [];
    let srcDirectories: string[] = [];

    try {
        const publicItems = await fs.readdir(publicDirectory);

        const publicStats = await Promise.all(publicItems.map(async item => {
            const itemPath = path.join(publicDirectory, item);
            const stats = await fs.stat(itemPath);
            return { item, isDirectory: stats.isDirectory() };
        }));

        publicDirectories = publicStats.filter(stat => stat.isDirectory).map(stat => stat.item);
        publicFiles = publicStats.filter(stat => !stat.isDirectory).map(stat => stat.item);

        const srcItems = await fs.readdir(srcDirectory);

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
            <h1 className="text-2xl font-bold mb-4 mono">404 | Not Found</h1>
            <p className='mb-2 mono'>Here&apos;s where you can go:</p>
            <h2 className="text-2xl font-bold mb-4 mono">Pages</h2>
            <Link href={`/`} passHref className='noblue flex items-center gap-[2px] mono pb-2'>
                <span className="icon pr-1">home</span> homepage
            </Link>
            {srcDirectories.length === 0 ? (
                <p>No directories found in the src directory.</p>
            ) : (
                <ol className="space-y-2 list-none">
                    {srcDirectories.map((dir, index) => (
                        <li key={index} className="text-white">
                            <Link href={`/${dir}`} passHref className='noblue flex items-center gap-[2px] mono'>
                                <span className="icon pr-1">article</span> {dir}
                            </Link>
                        </li>
                    ))}
                </ol>
            )}
            <h2 className="text-2xl font-bold mb-4 mt-8 mono">Public Files</h2>
            {publicDirectories.length === 0 && publicFiles.length === 0 ? (
                <p>No files or directories found in the public directory.</p>
            ) : (
                <ol className="space-y-2 list-none">
                    {publicDirectories.map((dir, index) => (
                        <li key={index} className="text-white">
                            <Link href={`/${dir}`} passHref className='noblue flex items-center gap-[2px] mono'>
                                <span className="icon pr-1">folder</span> {dir}
                            </Link>
                        </li>
                    ))}
                    {publicFiles.map((file, index) => (
                        <li key={index} className="text-white">
                            <Link href={`/${file}`} passHref className='noblue flex items-center gap-[2px] mono'>
                                <span className="icon pr-1">draft</span> {file}
                            </Link>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default NotFoundPage;