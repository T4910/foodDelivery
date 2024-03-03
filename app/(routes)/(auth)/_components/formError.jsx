import { MdError } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

const Flash = ({ state: { status, message } }) => {
    const condition = {
        success: "bg-emerald-500/15 text-emerald-500",
        error: "bg-red-500/70 text-red-500"
    };
    
    // status and message string is empty or invalid
    if(!!!condition[status] || !!!message) return null;

    // checks for preferred icons
    const Icon = (status) => (status === "success") ? <MdCheckCircle className="h-4 w-4"/> : <MdError className="h-4 w-4"/>;

    return (
        (!!message) && <div className={`w-full flex items-center gap-x-2 text-sm p-3 mb-2 ${condition[status ?? "error"]}`}>
            <Icon status={status} />
            <p>{message}</p>
        </div>
    );
};

export default Flash;