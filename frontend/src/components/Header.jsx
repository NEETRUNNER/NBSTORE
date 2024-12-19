import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../hooks/useProductContext';
import { useState, useEffect } from 'react';

import logo from '../img/logo.png';
import FilterInput from '../other/InputFilter';
import BasketCart from '../other/BasketCart';

const Header = ({ toggleActive }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const {basketData} = useProductContext();

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 300); // Длительность анимации
        return () => clearTimeout(timeout);
    }, [basketData.length]);

    return (
        <header className="header w-full h-20">
            <div className="header-container flex md:justify-evenly xs:justify-between xs:mx-6 items-center min-h-18 max-w-full max-h-full h-20">
                <Link className="xs:contents md:contents" to="/">
                    <img src={logo} alt="Logo" className="header-logo md:w-48 xs:w-2/5 h-auto z-30 xm:w-1/4" />
                </Link>

                <FilterInput className='xs:hidden md:flex'/>
                
                <div className="other flex items-center">
                    <div onClick={toggleActive} className="burger cursor-pointer z-40">
                        <span className="md:bg-black xs:bg-orange-400 mt-2 w-8 mb-2.5 block h-0.5"></span>
                        <span className="md:bg-black xs:bg-orange-400 mt-2 w-8 mb-2.5 block h-0.5"></span>
                        <span className="md:bg-black xs:bg-orange-400 mt-2 w-6 mb-2.5 block h-0.5 ml-auto"></span>
                    </div>
                    <BasketCart/>
                </div>
            </div>
        </header>
    );
};

export default Header;