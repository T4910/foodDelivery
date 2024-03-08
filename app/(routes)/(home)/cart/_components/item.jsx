'use client'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import Details from '@/app//(routes)/(home)/cart/_components/foodDetails'
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSwipeable } from 'react-swipeable';
import { useState, useEffect } from 'react'

const item = ({id, src, name, description, price, number, isAllChecked, checkedList: {isCheckedList, setIsCheckedList}, select: {showSelect, setShowSelect}}) => {
    let hold;
    const [ isChecked, Check ] = useState(false);

    const handlers = useSwipeable({
      onSwipedLeft: ({ event }) => {
        console.log('swiped left', event)
      },

      onTouchStartOrOnMouseDown: ({ event }) => hold = setTimeout(() => {
          console.log('holding...')
          Check(true);
          setShowSelect(true);
      }, 1500),
      onTouchEndOrOnMouseUp: () => clearTimeout(hold)
    });

    useEffect(() => {
      console.log('check all triggered', isAllChecked)
      Check(isAllChecked);
    }, [isAllChecked]);
 
    useEffect(() => {
      const isNotThere = !isCheckedList?.includes(id); // acting as a safety net

      if(isChecked){
        // add to array
        isNotThere ? setIsCheckedList((arr) => [...arr, id]) : null;
      } else {
        // remove from array
        isNotThere ? null : setIsCheckedList((arr) => arr.filter(item => item !== id))
      }
    }, [isChecked])

    return (
      <div 
        className="w-fit mx-auto relative" 
        {...handlers}
      >
        <div className='z-10 relative flex items-center mx-auto px-3 py-3 w-fit min-w-[370px] justify-between bg-white rounded-lg space-x-2'>
            {showSelect ? <Checkbox 
              className="mr-1" 
              checked={isChecked}
              onClick={() => Check((state) => !state)}
              /> 
            : null}
            <div className="relative flex-grow size-28 aspect-square">
              <Image className="aspect-square" src={src} fill={true}/>
            </div>
            <Details 
              name={name}
              description={description}
              price={price}
              number={number}
            />
        </div>
        <Button className="h-full pr-7 hover:bg-red-500 w-20 bg-red-200 size-full flex justify-end absolute bottom-0 right-0 rounded-lg z-0"><Trash2 className="size-8"/></Button>
      </div>
    );
};

export default item;