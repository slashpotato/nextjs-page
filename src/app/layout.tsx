import type { Metadata } from "next";
import { Noto_Sans, Noto_Color_Emoji } from "next/font/google";
import dynamic from "next/dynamic";

const Title = dynamic(() => import('@/components/title/index'), { ssr: false, })

import "./globals.css";

const noto = Noto_Sans({
    subsets: ["latin-ext", "cyrillic-ext"],
    weight: "500"
});
const emoji = Noto_Color_Emoji({
    subsets: ["emoji"],
    weight: "400"
});

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
            <body className={`${noto.className}`}>
                <header className="h-16 w-full fixed top-0 left-0 right-0 z-50 bg-black dark:bg-white text-white dark:text-black">
                    <Title />
                </header>
                <div id="content" className="max-w-full min-h-screen fixed top-0 left-0 right-0 z-0 bg-white dark:bg-black text-black dark:text-white">
                    {children}
                </div>
            </body>
        </html>
    );
}
