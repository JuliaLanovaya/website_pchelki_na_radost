import React from 'react';

const Contacts = () => {
  return (

    <main>
      <h1 className='text-4xl font-black text-[#56261c] shadow-md mt-8 mb-4 text-center'>Контакты</h1>
      <div className="flex pt-12 pb-28">
        <div className="min-h-full flex justify-center p-4 basis-2/3">
          <div className="max-w-md w-full">
          
            <form className="" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm">
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block
                  w-full px-3 py-2 mb-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-[#622929]
                  focus:border-[#622929] focus:z-10 sm:text-sm"
                placeholder="Ваше имя"
              />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block
                  w-full px-3 py-2 mb-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-[#622929]
                  focus:border-[#622929] focus:z-10 sm:text-sm"
                  placeholder="Ваш Email"
                />
                <input
                  type="text"
                  required
                className="h-36 leading-[200px] appearance-none rounded-md
                  w-full px-3 mb-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-[#622929]
                  focus:border-[#622929] focus:z-10 sm:text-sm"
                  placeholder="Введите текст Вашего сообщения"
                />
              
            </div>

           

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent font-semibold
                rounded-md text-[#56261c] bg-[#FFDC33] hover:bg-[#Fbeb44]
                focus:outline-none"
              >                
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>

        <div className='flex flex-col basis-1/3 pt-8'>
          <div className='flex pb-6'>
            <i className="fa-regular fa-location-dot pr-6 text-2xl text-[#56261c]"/>
            <p className='pt-2 text-[#56261c] font-medium'>г.Донецк</p>
          </div>
          <div className='flex pb-6'>
              <i className="fa-regular fa-phone pr-6 text-2xl text-[#56261c]"/>
              <a href="tel:+79493156621" 
              className='pt-1 text-[#56261c] font-medium'>+7 (949) 315-66-21</a>
          </div>
          <div className='flex pb-6'>
            <i className="fa-regular fa-envelope pr-6 text-2xl text-[#56261c]" />
            <a href="mailto:lanov.honey@yandex.ru" 
              className='pt-1 text-[#56261c] font-medium'>lanov.honey@yandex.ru</a>
          </div>
          <div className='flex gap-4 ml-12'>
            <a href="https://instagram.com/pchelovek_dn?igshid=YmMyMTA2M2Y="
              rel="noopener noreferrer"
              target="_blank"
              className='hover:bg-[#fbfa44] hover:rounded-3xl'>
              <i className="fa-brands fa-instagram text-6xl text-[#622929]" />
            </a>
            <a href="https://vk.com/pchelki_na_radost"
              rel="noopener noreferrer"
              target="_blank"
              className='hover:bg-[#fbfa44] hover:rounded-3xl'>
              <i className="fa-brands fa-vk text-6xl text-[#622929]" />
            </a>

          </div>
          
          
            
      </div>
      </div>

    </main>

  )
}

export default Contacts