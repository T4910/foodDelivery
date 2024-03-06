import Card from "./foodcard"

const results = ({results}) => {
  const number = results.length;

  const heightLogic = (number !== 1) ? // Displays in a certain way if just one item
                        (number === 2) ? 
                          `h-[77%] content-evenly` : // tailwind calc can't calculate negative number multiplication, so had to add this login here
                          `${`h-[calc(100%+(${number - ((number % 2 === 0) ? 3 : 2)}*23%))] content-evenly`}` // The calc function below calculates the height required of the div to allow the cards to only wrap twice 
                      : 'ml-2.5';
  return (
      <div className={`${heightLogic} pt-48 flex flex-col flex-wrap space-y-4 `}>
          <h3 className="font-bold text-2xl inline w-44 text-left pl-4">
            Found <br /> {number} results
          </h3>
          {
            results.map((result, index) => 
              <Card 
                key={result.id} 
                id={result.id} 
                image={result.image} 
                name={result.name} 
                description={result.description} 
                calories={result.calories} 
                price={result.price}
                route="/results"
              />)
          }
      </div>
  )
}

export default results