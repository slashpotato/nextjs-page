"use client";

type switcher = 'on' | 'off';

export default function SettingElement(props: any) {
    if (typeof window !== 'undefined') {
        // get param from localStorage
        const state: any = localStorage.getItem(props.id);

        // set default if not found
        if (state == undefined) {
            switch (props.id) {
                case "theme":
                    localStorage.setItem(props.id, "default")
                    break;
            
                default:
                    localStorage.setItem(props.id, "false")
                    break;
            }
        }

        // return
        return (
            <li>{props.text.toString()} = {state}</li>
        );
    } else { return (<p>Error: <pre>window</pre> is not defined</p>) }
}