import React from 'react'

const BeeQueens = () => {
  return (

    <main>
      <h1 className='text-4xl font-black text-[#56261c] shadow-md mt-8 mb-4 pb-4 text-center'>Матки</h1>

      <div className="ml-10 mb-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full object-cover overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/karnika.jpeg"
              alt=""
              className="h-full w-full hover:scale-110 duration-500 hover:opacity-75" />
          </div>
            <h3 className="mt-4 text-sm text-[#56261c]">Матки Карника</h3>
                    
          <div className='text-[#56261c] flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">700 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>

        </a>


        <a href="" className="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/bakfast.jpg"
              alt=""
              className="h-full w-full hover:scale-110 duration-500 hover:opacity-75" />
          </div>
            <h3 className="mt-4 text-sm text-[#56261c]">Матки Бакфаст</h3>
                    
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">700 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>

          </div>
        </a>
        </div>

    </main>



  )
}

export default BeeQueens