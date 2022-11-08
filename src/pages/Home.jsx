import React from 'react';
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
      <h1 className='text-4xl font-black text-[#56261c] shadow-md mt-8 mb-4 pb-4 text-center'>Добро пожаловать!</h1>
      <div className="bg-[#fefbda] pt-4 mb-8">
        <div className="flex flex-row gap-4 justify-around">
          <div className="flex flex-col basis-1/3 ml-0.5">
            <Link to={'/about'}>

              <img
                src="/images/1.jpg"
                alt=" "
                className="rounded drop-shadow-2xl w-72 h-72 object-cover group-hover:opacity-75 mx-auto" />

              <h3 className="mt-4 text-center text-base font-black uppercase text-[#56261c]">Пчёлки На Радость ...</h3>
              <p className="ml-4 flex-shrink">...это семейная пасека в Донбассе. Экологичные методы пчеловодства и качественный мед - главные приоритеты в нашем деле</p>
            </Link>
          </div>

          <div className="flex flex-col basis-1/3">
            <Link to={'/products'}>
              <img
                src="/images/2.jpg"
                alt=" "
                className="rounded shadow-md w-72 h-72 object-cover group-hover:opacity-75 mx-auto" />

              <h3 className="mt-4 text-center text-base font-black uppercase text-[#56261c]">Мёд</h3>
              <p className="flex-shrink">напрямую с пасеки к Вашему столу. У нас Вы можете выбрать мед на любой вкус: нежный майский, душистое разнотравье, ароматный подсолнечный или кремовый донник</p>
            </Link>
          </div>

          <div className="flex flex-col basis-1/3">
            <Link to={'/beequeens'}>
              <img
                src="/images/3.jpg"
                alt=" "
                className="rounded shadow-md w-72 h-72 object-cover group-hover:opacity-75 mx-auto" />

              <h3 className="mt-4 text-center text-base font-black uppercase text-[#56261c]">Пчеломатки</h3>
              <p className="flex-shrink">поколения F1 доступны к заказу.Пасека "Пчелки на Радость" специализируется на выведении и продаже маток F1 пород Карника и Бакфаст немецкой и беларуской селекции</p>
            </Link>
          </div>

        </div>
      </div >
    </div >
  )
}

export default Home