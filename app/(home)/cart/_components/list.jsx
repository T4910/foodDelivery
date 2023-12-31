import Item from "./item"

const list = ({ foodlist }) => {
  return (
    <div className="flex flex-col gap-y-4 overflow-y-auto">
        {
            foodlist.map((item, index) => (
                <Item 
                    key={index}
                    name={item.name}
                    details={item.details}
                    price={item.price}
                    number={item.number}
                />
            ))
        }
    </div>  
  )
}

export default list