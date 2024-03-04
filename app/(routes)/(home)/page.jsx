import Search from "./_components/searchbox"
import Navbar from "./_components/navbar"
import Foodlist from './_components/foodlist'
import Header from "./_components/header"


const page = async () => {
  return (
    <div className="flex flex-col h-[100dvh]">  
      <div className="flex flex-col flex-grow pl-7 pt-5 h-full overflow-y-auto">
          <Header />
          <h1 className="text-3xl font-bold py-8">Let's eat <span className="block">Quality food 😋</span></h1>
          <Search />
          <Foodlist />
      </div>
      <Navbar />
    </div>
  )
}

export default page