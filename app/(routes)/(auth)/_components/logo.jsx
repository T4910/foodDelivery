import Image from 'next/image'

const logo = () => {
  return (
    <div className='flex flex-col items-center py-7'>
        <Image src="/images/logo.png" alt='M logo' height={200} width= {200} className='h-24 pl-1 pr-2 aspect-auto'/>
        <h1 className='block text-2xl font-bold mt-1'>Emma's Food</h1>
        <p className='text-muted-foreground block'>Get food fast to you</p>
    </div>
  )
}

export default logo