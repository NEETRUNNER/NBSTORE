import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import slugify from 'slugify';
import GetApi from "../Service/GetProductApi";
import Path from '../other/Path'
import SortByPrice from "../other/SortByPrice";
import { useProductContext } from "../hooks/useProductContext";

const ProductListPage = ({ category, title}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false)
  const {productData, setProductData, filteredData, cards, setCards, setFilteredData, setValue, setSelect} = useProductContext(); // Не забывать что мы достаём всё из контекста поэтому мы пишем именно хук для получения этих пропсов а не параметр компонента
  
  useEffect(() => {
    setCards(6); // Сброс количества отображаемых карточек
    setFilteredData(productData); // Сброс фильтрованных данных
    setValue([0, 4000]); // Сброс диапазона цен
    setSelect(''); // Сброс сортировки
    setDisabled(false); // Сброс кнопки "Загрузить"
  }, [category]); // Срабатывает при изменении категории

  useEffect(() => {
    setFilteredData(productData);

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [productData]);

  const request = () => {
    const filteredItems = productData.filter(item => item.category === category); // Тут получает данные только категория woman

    if (cards + 3 >= filteredItems.length) {
      console.log('Конец массива');
      setCards(filteredItems.length); // Устанавливаем cards на длину массива, чтобы не увеличивать его дальше
      setDisabled(true)
    } else {
      setCards(prev => prev + 3)
    }
    console.log(filteredData)
  }; 

  const reset = () => {
    setFilteredData(productData);
    setValue([0, 4000]);
  };

  const handleClick = () => {
    reset();
    request();
  }

  console.log(filteredData) // количество отфильтрованных карточек

  const dataToDisplay = filteredData.length === 0 ? productData : filteredData; // Проблема в изначальной загрузке, я загружаю сразу filteredData когда должен изначально загружить productData
  console.log(dataToDisplay)
  return (
    <section className="productList">
      <div className="product-container py-10 lg:w-5/6 xl:w-9/12 mx-auto xs:w-11/12 text-center xs:py-4">
        <h1 className="product-title font-medium xs:mt-0 md:mt-12 md:w-max mx-auto text-center md:text-2xl lg:text-3xl uppercase xs:w-max xs:text-xl xl:text-3xl  text-black p-2">
          {title}
        </h1>
        <span className="line h-0.5 block bg-gray-500 md:w-40 xs:w-28 mx-auto"></span>

        <Path className="flex justify-start my-6"/>

        <div className="sort-wrap flex md:flex-wrap md:justify-center lg:justify-normal lg:flex-nowrap xs:flex-wrap xs:justify-center">
          
            <SortByPrice category={category}/>
            
          <div className="product-wrap w-full flex flex-wrap justify-center items-center md:my-0 xs:my-6">
            {isLoading ? <ClipLoader/> : filteredData.length === 0 ? <div className="text-gray-500 mt-4 xs:text-sm md:text-xl">Нічого не знайдено за поточним фільтром.</div> : (
              dataToDisplay
                .filter(item => slugify(item.category, { lower: true, locale: 'ru' }) === category)
                .slice(0, cards)
                .map((item, index) => (
                  <Link
                    key={index}
                    className="catalog-block__link border border-gray-200 shadow-md m-4 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105 xs:w-full xm:w-2/5 sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/3 2xl:w-1/4"
                    to={`/${'for-' + category}/${slugify(item.title, { lower: true, locale: 'ru' })}`}
                  >
                    <div className="catalog-block relative w-full h-full">
                      <img
                        src={require(`../img/${item.image}`)}
                        alt={item.name}
                        className="catalog-block__img w-full h-full object-cover"
                      />
                      <div className="catalog-block__info max-h-max absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 text-center">
                        <div className="catalog-block__title xs:text-sm font-semibold xl:text-md lg:text-sm text-gray-800">
                          {item.title}
                        </div>
                        <div className="catalog-block__price font-medium text-indigo-500 mt-2">
                          {item.price} ₴
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
            )}
          </div>   
        </div>
        {isLoading ? null : <button
          disabled={disabled}
          onClick={handleClick}
          type="button"
          className={`my-4 py-2.5 px-6 text-sm font-semibold transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            disabled 
              ? "bg-gray-400 text-gray-300 cursor-not-allowed" // Стили при disabled
              : "bg-gray-800 text-white hover:bg-gray-600 focus:ring-gray-500"
          }`}
        >
          {disabled ? 'Немає товарів' : 'Завантажити'}
        </button>}
      </div>
    </section>
  );
};

export default ProductListPage; // Проблема решена, останется лишь проверить