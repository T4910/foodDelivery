const ingredients = ({ ingredients }) => {
  return (
    <div>
        <h1 className="block font-bold text-xl">Ingredients</h1>
        <div>
            {
                <ul>
                    {
                        ingredients.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    </div>
  )
}

export default ingredients