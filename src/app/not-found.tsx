import Image from "next/image";

export default function Page() {
    return (
        <div className="h-screen w-full flex justify-center items-center"><Image src={"https://http.cat/404"} alt={"404"} width={750} height={600} /></div>
    )
}