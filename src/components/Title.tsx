import Link from "next/link";
import TitleElement from "@/components/TitleElement"
import localFont from "next/font/local";

const hlebozavod = localFont({
    src: './../../public/fonts/hlebozavod/Hlebozavod-Medium.woff',
    display: 'swap',
})

export default function Title() {
    return (
        <main className={`w-max h-full flex justify-start items-center ml-24 ${hlebozavod.className} font-semibold text-4xl`}>
            <Link href={"/"}>slshptt</Link>
        </main>
    );
}