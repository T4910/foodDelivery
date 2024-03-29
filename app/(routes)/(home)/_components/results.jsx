import Card from "./foodcard"

const results = ({results}) => {
    const number = results.length;
    const spacing = (number !== 1) ? 'content-evenly' : 'ml-2.5';
    
    // The calc function below calculates the height required of the div 
    // to allow the cards to only wrap once i.e 2 spaces for cards 
    let height = {
      height: `calc(100% + (${number - ((number % 2 === 0) ? 3 : 2)} * 23%))`
    };

    const ShowResults = () => {
        return (
          <div className={`${spacing} pt-48 flex flex-col flex-wrap space-y-4`} style={height}>
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
      );
    }

    const NoResults = () => {
      return (
        <div className="pt-48 flex flex-col flex-wrap space-y-4">
          <h3 className="font-bold text-2xl inline w-44 text-left pl-4">
            Found <br /> 0 results
          </h3>
          <p className="text-lg font-light text-gray-500 pl-4">No results found</p>
        </div>
      );
    }
  
    return (
      <>
        {number === 0 ? <NoResults /> : <ShowResults />}
      </>
    );
};

export default results;