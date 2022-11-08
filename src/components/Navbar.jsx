import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex w-full bg-[#Fbeb44]">
      <nav className="flex gap-48 h-10 items-center ml-32 text-xl font-black text-[#56261c]">
        <Link to={'/about'}
          className="hover:text-[#9E9764]">О нас</Link>
        <Link to={'/blog'}
          className="hover:text-[#9E9764]">Блог</Link>
        <Link to={'/products'}
          className="hover:text-[#9E9764]">Мед и пыльца</Link>
        <Link to={'/beequeens'}
          className="hover:text-[#9E9764]">Матки</Link>
        <Link to={'/contacts'}
          className="hover:text-[#9E9764]">Контакты</Link>

      </nav>
    </div>
  )
}

export default NavBar