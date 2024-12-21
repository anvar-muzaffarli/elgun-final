import React, {useRef} from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import Button from './Button';

const Header:React.FC = () => {

    const mobileMenyuRefi = useRef<HTMLDivElement>(null) 

    const  navbariAc = () => {
        if(mobileMenyuRefi.current) {
            mobileMenyuRefi.current.classList.add("aktiv")
        }
    }

    const navbariBagla = () => {
        if(mobileMenyuRefi.current) {
            mobileMenyuRefi.current.classList.remove("aktiv")
        }
    }

  return (
    <>
    <div className="mobile-menyu" ref={mobileMenyuRefi}>

    <IoIosClose className='fa-xmark' onClick={navbariBagla} />

    <nav className="mobile-nav-links">
        <a href="">What is arcarta?</a>
        <a href="">Solutions</a>
        <a href="">FAQs</a>
        <a href="">Contact</a>
        <a href="">Login</a>
    </nav>
  </div>
<header>
    <div className="container">
        <div className="row">
            <div className="header d-flex">
                
                <img  className="" src="./assets/images/header/header.svg" alt="" />

                <HiMiniBars3BottomRight className='d-md-none' onClick={navbariAc} />

                <div className="header_right d-none d-md-flex">
                    <nav className="header-nav">
                        <a href="">What is arcarta?</a>
                        <a href="">Solutions</a>  
                        <a href="">FAQs</a>
                        <a href="">Contact</a>
                        <a href="">Login</a>
                    </nav>

                   <Button buttonunIcindekiYazi="Get started" />
                </div>
            </div>
        </div>
    </div>
</header>
</>
  )
}

export default Header