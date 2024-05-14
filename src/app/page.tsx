import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="classic">
            <div className="pl-10 pt-8 text-3xl">
                <ol id="social-ol">
                    <li><Link href={"https://ovk.to/slashpotato"}><Image src={"/ovk.svg"} alt={"openvk logo"} width={32} height={16} /> OpenVK</Link></li>
                    <li><Link href={"https://t.me/slashpatata"}><Image src={"/telegram.svg"} alt={"telegram logo"} width={32} height={16} className="invert" /> Telegram</Link></li>
                    <li><Link href={"https://discord.gg/WFaGuxgNPp"}><Image src={"/discord.svg"} alt={"discord logo"} width={32} height={16} className="invert" /> Discord</Link></li>
                    <li><Link href={"https://github.com/slashpotato"}><Image src={"/github.svg"} alt={"github logo"} width={32} height={16} className="invert" /> GitHub</Link></li>
                </ol>
            </div>
        </main>
    );
}