'use client'
import { useState, createContext } from "react";
import { useSwipeable } from 'react-swipeable';

export const SelectContext = createContext();

export const SelectStateWrapper = ({ children }) => {
    const [showSelect, setShowSelect] = useState(false);
    const [isAllChecked, CheckAll] = useState(false);
    const [isCheckedList, setIsCheckedList] = useState([]);
    const handlers = useSwipeable({
        onTap: ({event :{ target }}) => {}
    });

    return (
        <SelectContext.Provider value={{showSelect, setShowSelect, isAllChecked, CheckAll, isCheckedList, setIsCheckedList}}>
            <div className='flex flex-col justify-between h-[100dvh] bg-slate-50' {...handlers}>
                {children}
            </div>
        </SelectContext.Provider>
    )
}
