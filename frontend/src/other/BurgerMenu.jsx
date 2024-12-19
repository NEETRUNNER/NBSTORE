import { Link as RouterLink } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';
import { Link as ScrollLink } from 'react-scroll';
import FilterInput from "./InputFilter";

import { useEffect } from "react";

import { useProductContext } from "../hooks/useProductContext";

const BurgerMenu = ({active, toggleActive, setActive}) => {
    const {setValue, setFilteredData, productData, setCards, setSelect, basketData} = useProductContext();

    useEffect(() => {
        const menu = document.querySelector('.header-menu');
        const burger = document.querySelector('.burger');
        const handleClickOutside = (e) => {
            // Проверяем, был ли клик ВНЕ меню и ВНЕ иконки бургера
            if (menu && !menu.contains(e.target) && !burger.contains(e.target)) {
                setActive(false); // Закрываем меню
            } else if (burger && burger.contains(e.target)) {
                setActive(active); // Открываем/закрываем меню при клике на бургер
            }
        };

        document.addEventListener('click', handleClickOutside);

        // Очистка обработчика при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [active]); // Добавляем зависимость на состояние "active"

    return (
        <ul
            className={`header-menu md:overflow-auto xs:overflow-hidden bg-black fixed transition-all duration-500 z-50 md:w-2/5 flex justify-center flex-col text-center h-full xs:w-full xs:z-40 lg:w-2/6 xl:w-3/12 ${active ? 'left-0' : 'left-[-100%]'}`}
        >
            <button onClick={toggleActive} className="btn btn-circle absolute top-10 right-10 md:block xs:hidden ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 bg-white "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <FilterInput className="xs:flex md:hidden my-3 border-gray-700 pt-4 mx-auto" />

            <RouterLink to='/' onClick={toggleActive}>
                <li className="header-menu__li cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide">
                    Головна
                </li>
            </RouterLink>

            <RouterLink to='/for-woman' onClick={toggleActive}>
                <li className="header-menu__li cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide">
                    Жінкам
                </li>
            </RouterLink>

            <RouterLink to='/for-man' onClick={toggleActive}>
                <li className="header-menu__li cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide">
                    Чоловікам
                </li>
            </RouterLink>

            <RouterLink to='/for-bags' onClick={toggleActive}>
                <li className="header-menu__li cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide">
                    Портфелі та сумки
                </li>
            </RouterLink>

            <RouterLink to='/basket' onClick={toggleActive}>
                <li className="header-menu__li md:hidden block cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide">
                    Кошик ({basketData.length})
                </li>
            </RouterLink>

            <RouterLink to='/about-us'>
                <li
                    onClick={toggleActive}
                    className="header-menu__li cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide"
                >
                    Про нас
                </li>
            </RouterLink>
            <RouterLink to='/contacts'>
                <li
                    onClick={toggleActive}
                    className="header-menu__li cursor-pointer text-white font-medium py-3 border-b border-gray-700 md:text-lg lg:text-lg text-sm uppercase hover:bg-gray-800 tracking-wide"
                >
                    Контакти
                </li>
            </RouterLink>
        </ul>
    );
    
    
}

export default BurgerMenu;