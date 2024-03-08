'use client'
import Item from "./item"
import { useContext } from "react"
import { SelectContext } from "./contextProvider"

const list = ({ foodlist }) => {
    const { showSelect, setShowSelect, isAllChecked } = useContext(SelectContext);

    return (
      <div className="flex flex-col gap-y-4 pb-4 overflow-y-auto">
          {
              foodlist.map((item, index) => (
                  <Item 
                      key={index}
                      src={item.image}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      number={item.number}
                      select={{showSelect, setShowSelect}}
                      isAllChecked={isAllChecked}
                  />
              ))
          }
      </div>  
    )
}

export default list