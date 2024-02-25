import type { Metadata } from "next";
import { Noto_Sans, Noto_Color_Emoji } from "next/font/google";
import dynamic from "next/dynamic";


const Title = dynamic(() => import('@/components/Title'), {ssr: false,})

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
    description: "slashpotato's website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${noto.className}`}>
                <header className="h-18 w-full fixed top-0 left-0 right-0 z-50">
                    <div className="m-2 top-0 h-10 rounded-xl flex justify-center items-center backdrop-blur-md bg-[rgba(39,39,42,0.5)]">
                        <Title />
                    </div>
                </header>
                <div id="content" className="max-w-full min-h-screen fixed top-0 left-0 right-0 z-0">
                    {children}
                </div>
            </body>
        </html>
    );
}
