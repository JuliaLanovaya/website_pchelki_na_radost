import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <header className="flex flex-col w-full h-48 bg-[#fefbda]">

      <div className="flex flex-row">
        <Link to={"/"}>
          <img className="flex w-44 h-44 ml-[36rem] mb-2 mt-2"
            src="/images/img.png"
            alt="" />
        </Link>
        <Link to={'/cart'} className="h-1 mt-32 mr-10 ml-auto">
          <i className="fa-regular fa-cart-shopping text-5xl text-[#56261c]" />
        </Link>
      </div>


    </header>

  )
}

export default Header