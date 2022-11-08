import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 w-full h-48">
      <div
        className='w-full bg-[#Fbeb44] shadow-md first-line:text-xl font-black text-[#56261c] mb-4 pl-24'>
        Контакты
      </div>

      <div className='flex flex-row'>
        <div className="flex flex-col">
          <p className='pl-20 text-lg font-bold text-[#622929]'>Илья</p>
          <a href="tel:+79493156621"
            className='ml-20 text-lg font-bold text-[#622929]'>+79493156621</a>
          <p className='pl-20 pt-4 text-lg font-bold text-[#622929]'>Email</p>
          <a href="mailto:lanov.honey@yandex.ru"
            className='ml-20 text-lg font-bold text-[#622929]'>lanov.honey@yandex.ru</a>
        </div>

        <div className='flex grow gap-4 self-center ml-96'>
          <a href="https://instagram.com/pchelovek_dn?igshid=YmMyMTA2M2Y="
            rel="noopener noreferrer"
            target="_blank"
            className='hover:bg-[#fbfa44] hover:rounded-3xl p-px'>
            <i className="fa-brands fa-instagram text-5xl text-[#622929] " />
          </a>
          <a href="https://vk.com/pchelki_na_radost"
            rel="noopener noreferrer"
            target="_blank"
            className='hover:bg-[#fbfa44] hover:rounded-3xl p-px'>
            <i className="fa-brands fa-vk text-5xl text-[#622929]" />
          </a>

        </div>

        <div className="flex">
          <Link to={"/"}>
            <img className="flex w-28 h-28 mr-8 mt-2"
              src="/images/img.png"
              alt="" />
          </Link>
        </div>

      </div>




    </footer>
  )
}

export default Footer