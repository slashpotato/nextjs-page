export default function MaterialIcon(type: any) {
    switch (type) {
        case "folder":
            return <span className="material-symbols-rounded">folder</span>
            break;
    
        case "file":
            return <span className="material-symbols-rounded">draft</span>
            break;

        default:
            break;
    }
}