'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from 'lucide-react';
import { Search } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";
import { useForm, useFormState } from "react-hook-form";

    // when user types in search box
    //  |-> remove search icon
    //  |-> change filter button to search button
    // redirect to results page with query
    //  |-> when user presses enter
    //  |-> when user clicks on search button


const searchbox = () => {
    const path = usePathname();
    const router = useRouter();

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
          search: ""
        }
    });
    const { dirtyFields } = useFormState({control}); 

    function search(data){
        console.log(data.search);
        router.push(`/results?q=${data.search}`);
    }

    return (
            <div className={(path === '/') ? "mr-7" : ''}>
                <form 
                    className="flex justify-between space-x-5" 
                    onSubmit={handleSubmit(search)}
                >
                    <div className="w-5/6 flex items-center gap-1 bg-slate-100 rounded-md px-4">
                        {(!!dirtyFields?.search) ? null : <Search />}
                        <input 
                            {...register("search")}
                            className="flex-grow ml-2 focus-visible:outline-none bg-inherit w-52 py-3" 
                            type="text"
                            placeholder="Search food..."
                        />
                    </div>
                    <Button 
                        className="text-black py-6"
                        type="submit"    
                    >
                        {(!!dirtyFields?.search) ? <Search /> : <SlidersHorizontal />}
                    </Button>
                </form>
            </div>

        )
}

export default searchbox