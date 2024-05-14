import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="classic">
            <Link href={"/projects/potatoMusic"}>potatoMusic</Link>
        </main>
    );
}