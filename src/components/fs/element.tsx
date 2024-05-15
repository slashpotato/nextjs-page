/*import Link from "next/link";
import fs from 'fs';

export default function FSel() {
    let filels: string[] = [];

    fs.readdir('./public/', (err, files) => {
        files.forEach(file => {
            filels.push(file);
        });

        // тут мы создаем массив со списком файлов
    });

    return (
        // <ol> с <li>, каждый <li> - один файл из пути
    )
}*/

import { GetStaticProps } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type Props = {
  files: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filesDirectory = path.join(process.cwd(), 'public');
  let files: string[] = [];

  try {
    files = fs.readdirSync(filesDirectory);
    console.log('Files read from public directory:', files); // Отладочное сообщение
  } catch (err) {
    console.error('Error reading files:', err);
  }

  return {
    props: {
      files,
    },
  };
};

const FSel: React.FC<Props> = ({ files }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Files</h1>
      <p className="mb-4">Files are being served from the <code>/public</code> directory.</p>
      {files.length === 0 ? (
        <p>No files found in the public directory.</p>
      ) : (
        <ol className="list-decimal pl-5 space-y-2">
          {files.map((file, index) => (
            <li key={index} className="text-blue-500 hover:text-blue-700">
              <Link href={`/${file}`} passHref>
                <a>{file}</a>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default FSel;
