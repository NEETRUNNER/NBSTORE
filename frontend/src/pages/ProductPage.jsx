import { useParams, useLocation } from 'react-router-dom';
import Path from "../other/Path";
import { FaShoppingCart } from 'react-icons/fa'; // Импортируем иконку корзины
import { useProductContext } from "../hooks/useProductContext";
import Modal from "../other/Modal";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Добавили библиотеку которая создаёт уникальный идентификатор

import slugify from 'slugify'; // Библиотека для транслитерации, она делает обычное название с русского на транслите английского, в целом она делает URL-friendly

const ProductPage = () => {
  const { setBasketData, setSelectSize, selectSize, openModal, setOpenModal, productData } = useProductContext();

  const location = useLocation();
  console.log(location)
  
  const [itemInfo, setItemInfo] = useState([]);
  const [product, setProduct] = useState();
  const [disabled, setDisabled] = useState(false) // Отключении кнопки

  const { itemDetailTitle } = useParams();  // Получаем параметры из URL
  console.log(itemDetailTitle)

  useEffect(() => {
    setItemInfo(productData);
  }, [productData]) // Был пустой массив

  const getCardToBasket = () => {
    const uniqueId = uuidv4(); // Уникальный идентификатор
    if (product.category === 'bags') {
      setBasketData((prevBasketData) => [...prevBasketData, { ...product, size: '', id: uniqueId}]);
    } else {
      setBasketData((prevBasketData) => [...prevBasketData, { ...product, size: selectSize, id: uniqueId}]);
    }
    setDisabled(true);

    setOpenModal(true)

    setTimeout(() => {
      setDisabled(false);
      setOpenModal(false)
    }, 1500);

    console.log('Товар отправлен в корзину')
    console.log(selectSize)
  }

  useEffect(() => {
      if (itemInfo.length > 0) {
        getProduct();
      }
  }, [location.pathname, itemInfo]);  // Это было сделано для того чтобы при переходе на другую карточку товара мы перерисовывали данные

  const getProduct = () => {
    const currentItem = itemInfo.find(item => slugify(item.title, { lower: true, locale: 'ru' }) === itemDetailTitle);
    console.log(currentItem)
    if (currentItem) {
      setProduct(currentItem);
    }
  };

  const selectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectSize(selectedValue.toUpperCase())
  }

  return (
    <section className="card-item h-full md:py-8 xs:py-0 bg-gray-50">
      <div className="card-container my-11 md:w-full w-3/4 mx-auto flex justify-center md:flex-nowrap xs:flex-wrap xs:w-11/12">
        {product && (
          <>
            <img 
              src={require(`../img/${product.image}`)} 
              alt={product.name} 
              className="card-img xs:w-full object-cover md:mr-6 md:w-max"
            />
  
            <div className="card-wrap  p-6 md:w-1/3 xs:w-full flex flex-col text-left h-full xs:mt-4 md:mt-0">
              <Path />
              <h1 className="card-title mt-4 text-2xl text-gray-800	font-light mb-3 lg:text-4xl md:text-2xl xs:text-xl">
                {product.title}
              </h1>

              <div className="card-price font-light text-lg text-gray-600 mb-4">
                <span className="text-gray-500 font-medium">Ціна: </span>{product.price} ₴
              </div>

              {product.category === 'bags' ? null : <div className="card-size font-light	text-gray-600 mb-5">
                <label htmlFor="size" className="mr-2">Розмір:</label>
                <select
                  onChange={(e) => selectChange(e)}
                  id="size" 
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-gray-500"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="2xl">2XL</option>
                </select>
              </div>}

              <div className="card-descr font-light text-gray-600 text-base leading-relaxed mb-4">
                <span className="text-gray-500 font-medium">Опис товару: </span>{product.descr}
              </div>

              <button
                disabled={disabled}
                onClick={getCardToBasket}
                type="button" 
                className="mt-4 font-mono w-max	 bg-gray-800 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-base px-4 py-2 transition-colors duration-200 flex justify-center items-center"
              >
                <FaShoppingCart className="mr-2" />{disabled ? 'Зачекайте...' : 'Додати у кошик'}
              </button>
            </div>
          </>
        )}
      </div>
      {openModal ? <Modal title={'Товар додано до кошику'}/> : null}
    </section>
  );
}

export default ProductPage;

// Вроде всё работает