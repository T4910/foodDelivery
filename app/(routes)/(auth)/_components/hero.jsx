import Logo from "./logo";

const hero = () => {
  return (
    <div className="relative flex-grow">
        <div className="absolute bg-food-pattern bg-opacity-10 inset-0 from-white via-white to-transparent"></div>  
        <div className="relative z-10 grid place-items-center h-full">
            <Logo />
        </div>
    </div>
  )
}


export default hero