import { redirect } from "next/navigation"

// Simply here to redirect users to proper page
const page = () => {
    redirect('/');
}

export default page