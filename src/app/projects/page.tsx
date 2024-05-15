// src/app/not-found.tsx
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

const NotFoundPage = async () => {
    const srcDirectory = path.join(process.cwd(), 'src/app/projects');

    let srcDirectories: string[] = [];

    try {
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
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            {srcDirectories.length === 0 ? (
                <p>No directories found in the src directory.</p>
            ) : (
                <ol className="space-y-2 list-none">
                    {srcDirectories.map((dir, index) => (
                        <li key={index} className="text-blue-500 hover:text-blue-700">
                            <Link href={`/projects/${dir}`} passHref className='noblue flex items-center gap-[2px]'>
                                <span className="material-symbols-rounded">article</span> {dir}
                            </Link>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default NotFoundPage;
