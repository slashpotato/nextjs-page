import Link from "next/link";

export default function TitleElement(href: any, title: string) {
    return (
        <ol className="h-12 w-full">
            <Link href={`${href}`}>a</Link>
        </ol>
    );
}