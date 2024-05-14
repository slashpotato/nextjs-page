import Link from "next/link";
import TitleElement from "@/components/TitleElement"
import localFont from "next/font/local";

const hlebozavod = localFont({
    src: './../../public/fonts/hlebozavod/Hlebozavod-Medium.woff',
    display: 'swap',
})

function showDropdown() {

}

export default function Title() {
    return (
        <main className={`w-max h-full flex justify-between gap-4 items-center ml-24 text-2xl font-black`} id="title">
            <Link href={"/"} className={`${hlebozavod.className} mr-14 text-4xl font-semibold`}>slshptt</Link> <Link className="titleel" href={"/projects"}>projects<button className="material-symbols-rounded">arrow_drop_down</button></Link>
        </main>
    );
}