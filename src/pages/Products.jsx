import React from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
  return (
    <main>
      <h1 className='text-4xl font-black text-[#56261c] shadow-md mt-8 mb-4 pb-4 text-center'>Мёд и пыльца</h1>

      <div className="m-4 mb-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Link to={'/product'}>
            <img
              src="./images/akaciia.jpg"
              alt="Мед из акации"
              className="h-full w-full hover:scale-110 duration-500 hover:opacity-75" />
            </Link>
           </div>
      
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Майский мед</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">1л</h3>
          </div>
          <div className='text-[#56261c] flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">1000 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>
        </div>
         

        <a href="" className="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/raznotr.jpeg"
              alt=""
              className="h-full w-full hover:scale-110 duration-500 hover:opacity-75" />
          </div>
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Мед луговое разнотравье</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">1л</h3>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">800 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>

          </div>
        </a>

        <a href="" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/podsoln.jpeg"
              alt=""
              className="h-full w-full hover:opacity-75 hover:scale-110 duration-500" />
          </div>
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Подсолнечный мед</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">1л</h3>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">500 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>
        </a>

        <a href="" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/donnik.jpg"
              alt=""
              className="h-full w-full hover:opacity-75 hover:scale-110 duration-500" />
          </div>
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Донниковый мед</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">1л</h3>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">600 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>
        </a>

        <a href="" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/propolis.jpg"
              alt=""
              className="h-full w-full hover:opacity-75 hover:scale-110 duration-500" />
          </div>
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Прополис</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">10гр</h3>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">100 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>
        </a>

        <a href="" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/pollen.jpg"
              alt=""
              className="h-full w-full hover:opacity-75 hover:scale-110 duration-500" />
          </div>
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Пыльца</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">100гр</h3>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">150 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>
        </a>

        <a href="" className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src="./images/podmor.jpg"
              alt=""
              className="h-full w-full hover:opacity-75 hover:scale-110 duration-500" />
          </div>
          <div className='flex flex-row justify-between'>
            <h3 className="mt-4 text-sm text-[#56261c]">Пчелиный подмор</h3>
            <h3 className="mt-4 text-transform: lowercase text-[#56261c]">50гр</h3>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="mt-1 text-lg font-medium text-[#56261c]">200 руб</p>
            <a href='/cart' className='text-[#56261c] bg-[#Fbeb44] p-1 font-medium rounded hover:scale-110 hover:bg-[#f7e311] duration-300'>В корзину</a>
          </div>
        </a>

      </div>
    </main>
  )

}

export default Products