const price = ({price}) => {
    const numericValue = Number(price);
    const isNotANumber = isNaN(numericValue);

    // Use toFixed to format the number with two decimal places
    const formattedValue = numericValue.toFixed(2);

    return (
        <p className="text-yellow-500 text-lg flex items-center">
            $<span className="text-black pl-0.5 text-2xl font-medium">
                {isNotANumber ? '__.__' : formattedValue}
            </span>
        </p>
    )
}

export default price