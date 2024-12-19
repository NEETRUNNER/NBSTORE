import { createContext, useContext, useEffect, useState } from 'react';
import GetProductApi from '../Service/GetProductApi';

// Создаем контекст
const ProductContext = createContext(); // Добавляем контекста в переменную productContext

// ProductContext это просто "пустой контейнер" для хранения данных. На этом этапе контекст ничего не знает о состоянии или значениях. Это как пустая коробка, в которую вы позже поместите что-то полезное с помощью провайдера

// Кастомный хук для использования контекста
export const useProductContext = () => useContext(ProductContext); // Создали хук в котором будут лежать наши пропсы, теперь вызов этого хука отдаст нам наш стейт переданный как пропс, так как мы уже создали контекст и поместили его в переменную ProductContext, используем метод useContext, и помещаем наш созданный контекст, и получаем использование переменной в качестве контекста

// Провайдер для оборачивания компонентов и предоставления состояния
export const ContextWrapper = ({ children }) => { // провайдер вашего контекста
  const [productData, setProductData] = useState([]); // Стейт в котором лежат все загруженные товары из json файла
  const [filteredData, setFilteredData] = useState([]); // Стейт в котором лежат отфильтрованные товары с помощью фильтра
  const [value, setValue] = useState([0, 4000]); // Стейт для ползунка, задали его диапазон
  const [cards, setCards] = useState(6); // Стейт который задаёт количество доступных карточек для секций товаров
  const [select, setSelect] = useState(''); // Стейт для выбора от дорогих к дешевым или наоборот
  const [selectSize, setSelectSize] = useState('S'); // Стейт для добавления размерности в корзину
  const [openModal, setOpenModal] = useState(false); // Стейт для открытия и закрытия окна
  const [basketData, setBasketData] = useState(() => {
    const basketSaveData = localStorage.getItem('basketData');
    return basketSaveData ? JSON.parse(basketSaveData) : [];
  }); // Стейт для хранения и передачи товара в корзину
  const [sortCategory, setSortCategory] = useState([]) // Стейт для сортировки по категории одежды

  const getData = async () => {
    try {
      const getCatalog = await GetProductApi();
      console.log(getCatalog)
      setProductData(getCatalog); // Данные сохранились в стейте
    } catch(error) {
      console.log(error);
      throw new error;
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    localStorage.setItem('basketData', JSON.stringify(basketData));
  }, [basketData])

  return (
    <ProductContext.Provider value={{ productData, setProductData, filteredData, setFilteredData, value, setValue, cards, setCards, select, setSelect, basketData, setBasketData, selectSize, setSelectSize, openModal, setOpenModal, setSortCategory, sortCategory }}> {/* Добавили в наш контекст стейт как пропсы, теперь мы можем использовать их по всему компоненту */}
      {children}
    </ProductContext.Provider>
  );
};

// Зачем нужен провайдер? Провайдер нужен, чтобы: Передавать данные от одного компонента к другому без необходимости пробрасывать пропсы вручную через каждый уровень вложенности. Упрощать доступ к данным в любом компоненте, который использует контекст.