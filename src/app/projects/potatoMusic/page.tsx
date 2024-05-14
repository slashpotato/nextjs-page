import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const hlebozavod = localFont({
    src: './../../../../public/fonts/hlebozavod/Hlebozavod-Medium.woff',
    display: 'swap',
})

export default function Page() {
    return (
        <main className="classic projectdiv">
            <h1 className={`${hlebozavod.className} projecttitle`}><Link href={"https://github.com/slashpotato/potatoMusic"}>potatoMusic</Link></h1>
            <span className={`projecth`}>An qt music player for linux</span>
            <Image src={"https://github.com/slashpotato/potatoMusic/blob/master/screenshot1.png?raw=true"} alt={"screenshot1"} width="400" height="400"></Image>
        </main>
    );
}