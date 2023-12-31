const price = ({price}) => {
    return (
        <p className="text-yellow-500 text-lg flex items-center">$<span className="text-black pl-0.5 text-3xl font-medium">{price}</span></p>
    )
}

export default price