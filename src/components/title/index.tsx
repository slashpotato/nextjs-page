import Link from "next/link";
import TitleElement from "@/components/title/element"
import localFont from "next/font/local";

const hlebozavod = localFont({
    src: './../../../public/fonts/hlebozavod/Hlebozavod-Medium.woff',
    display: 'swap',
})

function showDropdown() {

}

export default function Title() {
    return (
        <main id="title">
            <Link href={"/"} className={`${hlebozavod.className} text-4xl font-semibold`} id="header">slshptt</Link>
            <Link className="titleel" href={"/projects"}>projects<button className="material-symbols-rounded">arrow_drop_down</button></Link>
            <Link id="floating-settings-btn" href={"/settings"} className="material-symbols-rounded flex fixed right-6">settings</Link>
        </main>
    );
}