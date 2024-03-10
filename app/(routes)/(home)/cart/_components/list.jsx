'use client'
import Item from "./item"
import { useContext } from "react"
import { SelectContext } from "./contextProvider"

const list = ({ foodlist }) => {
    const { showSelect, setShowSelect, isAllChecked, isCheckedList, setIsCheckedList } = useContext(SelectContext);

    if(foodlist.length === 0) return <div className="text-center text-lg font-semibold">No items in cart</div>

    return (
      <div className="flex justify-start flex-col gap-y-4 pb-4 overflow-y-auto">
          {
              foodlist.map((item) => (
                  <Item 
                      key={item.id}
                      id={item.id}
                      src={item.image}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      number={item.number}
                      select={{showSelect, setShowSelect}}
                      isAllChecked={isAllChecked}
                      checkedList={{isCheckedList, setIsCheckedList}}
                  />
              ))
          }
      </div>  
    )
}

export default list