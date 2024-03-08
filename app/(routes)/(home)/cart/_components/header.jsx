'use client'
import { useSession } from "next-auth/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContext } from "react"
import { SelectContext } from "./contextProvider";
import { Trash2 } from 'lucide-react'
import { TfiCheckBox } from "react-icons/tfi"
import { IoMdCheckboxOutline } from "react-icons/io"
import { Separator } from "@/components/ui/separator"
import { IoMdDoneAll } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";




const header = () => {
    const session  = useSession();
    const {showSelect, ...context} = useContext(SelectContext);

    return (
      <div className={`flex justify-between items-center ${showSelect ? 'p-0 mb-2 h-44 box-border' : 'px-4 pt-5 mb-8'}`}>
        {showSelect ? <Delete allStates={context}/> : <Default session={session} />}
      </div>
    )
}

const Default = ({ session }) => {
  return (
    <>
      <Button className="bg-transparent hover:bg-white p-4"><ChevronLeft className="size-8"/></Button>
      <h2 className="text-xl font-semibold">Cart Food</h2>
      <Avatar className="rounded-md size-10 mr-4">
          <AvatarImage src={session?.image} />
          <AvatarFallback className="rounded-md bg-primary font-medium">TA</AvatarFallback>
      </Avatar>
      </>  
    )
}

const Delete = ({allStates: { setShowSelect, isAllChecked, CheckAll, isCheckedList }}) => {
  return (
    <div className="flex justify-between size-full p-4 pb-0">
      <Button 
        onClick={() => CheckAll((state) => !state)}
        className="hover:text-yellow-500 w-full grid place-items-center text-primary gap-2 text-md font-medium p-0 h-full rounded-3xl rounded-tr-none rounded-b-none"
        variant="outline"
      >
        <div className={`flex ${isAllChecked ? 'gap-0' : 'gap-1'} items-center`}>
          <IoMdCheckboxOutline className="size-8"/>
          <p>{isAllChecked ? "Unselect All" : "Select All"}</p>    
        </div>
      </Button>
      <Button
        onClick={() => console.log(isCheckedList)}
        className="hover:text-yellow-500  w-full grid place-items-center text-primary gap-2 text-md font-medium p-0 h-full rounded-none"   
        variant="outline"
      >
        <div className="flex gap-1 items-center">
          <p>Delete</p>
          <Trash2 className="size-7"/>
        </div>
      </Button>
      <Button
        onClick={() => { 
          setShowSelect(false);
          CheckAll(false); //not working
        }}
        className="hover:text-yellow-500  w-full grid place-items-center text-primary gap-2 text-md font-medium p-0 h-full rounded-3xl rounded-tl-none rounded-b-none"   
        variant="outline"
      >
        <div className="flex gap-2 items-center">
          <BsBoxArrowUpRight className="size-6 font-medium stroke-1"/>
          <p className="pt-1">Done</p>
        </div>
      </Button>
    </div>
  )
}



export default header