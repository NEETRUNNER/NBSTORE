import { useState } from 'react';
import logo from '../img/logo.png'
import { GoSearch } from "react-icons/go";

const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <header className="header w-full h-20">
            <div className="header-container flex justify-evenly items-center min-h-18 max-w-full max-h-full h-20">
                <img src={logo} alt="" className="header-logo max-w-48 h-auto" />
                <div className="header-input__block md:flex items-center rounded border-2 max-w-max xs:hidden">
                    <input placeholder='Пошук' type="text" className="header-input max-w-max min-w-56 min-h-12 pl-2" />
                    <GoSearch className='mx-3.5 cursor-pointer'/>
                </div>
                <div className='burger cursor-pointer'>
                    <span className='bg-black mt-2 w-9 mb-3.5 block h-0.5'></span>
                    <span className='bg-black mt-2 w-9 mb-3.5 block h-0.5'></span>
                    <span className='bg-black mt-2 w-6 mb-3.5 block h-0.5 ml-auto'></span>
                </div>
            </div>
        </header>
    )
}

export default Header;