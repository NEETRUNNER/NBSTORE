import React from 'react';
import { GoSearch } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useProductContext } from "../hooks/useProductContext";

import { useState, useEffect, useRef } from 'react';

import slugify from 'slugify';

const FilterInput = ({className}) => {
    const [inputData, setInputData] = useState(''); // Введеное значение для инпута
    const [filterForItems, setFilterForItems] = useState([]);
    const {productData} = useProductContext();

    const getInputData = (e) => {
        const inputValue = e.target.value;
        setInputData(inputValue);
        if (inputValue) {
            const filteredItems = productData.filter((item) =>
                item.title.toLowerCase().includes(inputValue.toLowerCase()) // Метод includes проверяет содержит ли массив определенные значения среди своих елементов, и возвращает true или false
            );
            setFilterForItems(filteredItems);
        }
    };

    useEffect(() => {
        const closeInput = (e) => {
            const inputResults = document.querySelector('.filter-results');
            if (inputResults && !inputResults.contains(e.target)) {
                closeFilter(false)
            }
        }

        document.addEventListener('click', closeInput);

        return () => {
            document.removeEventListener('click', closeInput);
        }
    }, [filterForItems])

    const closeFilter = (boolean = true) => { // Способ оптимизации кода если нужна одна функция которая будет делать немного разные вещи
        if (boolean) {
            setInputData('')
            setFilterForItems([]);
        }
    }

    return (
        <div className={`filter-wrap h-full z-45 flex items-center xs:max-h-max md:mt-0 relative ${className}`}>
            <div className='filter-wrap__input md:flex items-center rounded border-2 max-w-max xs:flex relative'>
                <input
                    value={inputData || ''}
                    onChange={(e) => getInputData(e)}
                    placeholder="Пошук"
                    type="text"
                    className="filter-input max-w-max min-w-56 xs:min-h-8 md:min-h-12 pl-2"
                />
                <GoSearch className="mx-3.5 cursor-pointer xs:text-white md:text-black" />

                {filterForItems.length > 0 && (
                    <div className={`filter-results xs:top-9 md:top-12 bg-white shadow-lg md:p-0 xs:p-4 xs:max-h-44 md:max-h-80 overflow-y-auto z-50 absolute left-0 right-0 transition ${inputData ? "opacity-100 visible" : "opacity-0 hidden"}`}>
                        {filterForItems.map((item, index) => (
                            <Link key={index} to={`/${slugify(item.title, { lower: true, locale: 'ru' })}`}>
                                <div onClick={closeFilter} className="filter-items__wrap flex items-center space-x-4 p-2 border-b cursor-pointer">
                                    <img src={require(`../img/${item.image}`)} alt={item.title} className="filter-items__img w-16 h-16 object-cover rounded" />
                                    <h1 className="filter-items__title text-base font-medium">{item.title}</h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default FilterInput;

// Компонент показывает товары которые совпадают с введенным значением из инпута и фильтрует на основе этих данных совпадение по названию с карточками, помещаем эти данные в массив из которого мы потом формируем вёрстку