import { Link, useParams } from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri";
import { useProductContext } from '../hooks/useProductContext';
import { useState, useEffect } from 'react';

const BasketCart = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const {basketData} = useProductContext();

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 300); // Длительность анимации
        return () => clearTimeout(timeout);
    }, [basketData.length]);

    return (
        <div className="basket-block items-center ml-8 md:flex xs:hidden relative">
            <Link to='/basket'>
                <RiShoppingCartLine className='text-3xl text-gray-800' />
            </Link>
            <div className={`basket-counter font-bold text-white bg-black w-6 h-6 flex items-center justify-center rounded-full ${isAnimating ? 'transform scale-110' : ''} transition-transform duration-300 ease-out`}>
                {basketData.length}
            </div>
        </div>
    );
};

export default BasketCart;

// Компонент содержит в себе карточку корзины, мы получаем из контекста данные basketData(это количество карточек в корзине) после создали анимацию которую добавили в useEffect, где при 300 миллисекунд происходит анимация, и зависит это от массива зависимости basketData.length, далее возвращаем вёрстку этой карточки где в счётчике получаем актуальное количество карточек