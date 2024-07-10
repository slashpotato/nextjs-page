import dynamic from "next/dynamic";

const SettingElement = dynamic(() => import('@/components/settings/element'), { ssr: false, })

export default function Page() {
    return (
        <main className="classic p-4 container">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <ol>
                <SettingElement id="theme" text="Current theme" />
            </ol>
        </main>
    );
}