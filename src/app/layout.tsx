import type { Metadata } from "next";
import localFont from 'next/font/local'

const Geologica = localFont({ src: '../../public/fonts/GeologicaNerdFont-Medium.ttf' })

import "./globals.css";

export const metadata: Metadata = {
    title: "slshptt",
    description: "slashpotato's website"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${Geologica.className} bg-white dark:bg-black text-black dark:text-white`}>
                <div id="content" className="max-w-full min-h-screen z-0">
                    {children}
                </div>
            </body>
        </html>
    );
}