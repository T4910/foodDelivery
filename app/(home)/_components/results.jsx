import Card from "./foodcard"

const results = ({results}) => {
  return (
    <div className="flex flex-col flex-wrap justify-start gap-4 h-[180rem]">
        <h3 className="font-semibold text-xl inline w-32">Found <br /> {results.length} results</h3>
        {
            results.map((result, index) => (
                <Card key={index} />
            ))
        }
    </div>
  )
}

export default results