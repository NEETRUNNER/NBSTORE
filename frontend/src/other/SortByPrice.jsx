import Slider from '@mui/material/Slider';
import { useProductContext } from '../hooks/useProductContext';
import Select from 'react-select'
import { useState } from 'react';

const minDistance = 300; // Минимальная дистанция при двух ползунках вместе

const SortByPrice = ({category}) => {
  
  const { value, setValue, productData, filteredData, setFilteredData, cards, setSelect, setSortCategory, sortCategory, isLoading, setIsLoading} = useProductContext(); // Вызвали кастомный хук из которого вытащили контекст как наши пропсы

  const filterChange = (event, newValue, activeThumb) => {
    console.log(newValue) // Новое значение которое помещается в стейт
    console.log(activeThumb) // Активный ползунок

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const selectChange = (selectedOption) => {
    const selectedValue = selectedOption?.value;
    const currentCards = filteredData.filter(item => item.category === category).slice(0, cards); // Берем только загруженные данные
    const filteredLow = currentCards.slice().sort((a, b) => a.price - b.price) // Фильтруем их по цене
    const filteredHigh = currentCards.slice().sort((a, b) => b.price - a.price) // Фильтруем их по цене
    setSelect(selectedValue);

    if (selectedValue === 'low') {
      console.log('Вибрано от дешевых к дорогим');
      setSelect(filteredLow)
      setFilteredData(filteredLow)
    } else if (selectedValue === 'high') {
      console.log('Вибрано от дорогих к дешевым')
      setSelect(filteredHigh)
      setFilteredData(filteredHigh)
    }
  }

  const sorting = () => {
    const currentCards = productData.filter(item => item.category === category).slice(0, cards); // Берем только загруженные данные
    const filteredCards = currentCards.filter(item => item.price >= value[0] && item.price <= value[1]); // Фильтруем их по цене
    setFilteredData(filteredCards);
    console.log(filteredData)
  }; // Цена не сортируется по категории одежды, только по всем

  const reset = () => {
    setFilteredData(productData); // Сброс данных к начальному состоянию
    setValue([0, 4000]);
  };

  const obj = [
    { value: 'high', label: 'Від дорогих до дешевих' },
    { value: 'low', label: 'Від дешевих до дорогих' }
  ]

  const uniqueTypes = [...new Set(productData.filter(item => item.category === category).map(item => item.type))];
  // Тонкости работы с new Set
  // Нельзя помещать отфильтрованные данные сразу в JSX разметку, так как Set возвращает примитивные данные(строки, числа, массивы)
  // Для корректной работы нужно разделять логику, например создать переменную и потом её переиспользовать

  const sortByCategory = (type) => {
    // Сначала фильтруем по категории
    const sortCategory = productData.filter(item => item.type === type)
    setFilteredData(sortCategory)
    setValue([0, 4000]);
    
    console.log(sortCategory); // Массив уникальных 'type' для текущей категории
  };

  return (
    <>
      <div className="slider-product max-w-full md:max-w-96 bg-white p-4 md:p-6 shadow-lg rounded-lg h-max xs:w-max">
        <div className="slider-title text-left font-semibold text-gray-700 mb-4 uppercase tracking-wide text-sm md:text-base">
          Ціна
        </div>
        
        <Slider className='!p-0'
          min={0}
          max={4000}
          value={value}
          onChange={filterChange}
          valueLabelDisplay="auto"
          disableSwap
          color="secondary"
          sx={{
            color: '#64748b',
            '& .MuiSlider-thumb': {
              width: 12,  // уменьшенный размер
              height: 12, 
              border: '2px solid #475569',
              backgroundColor: '#fff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            },
            '& .MuiSlider-track': {
              borderRadius: '8px',
            },
            '& .MuiSlider-rail': {
              opacity: 0.3,
            },
          }}
        />
        
        <div className="flex mt-4 md:mt-6 gap-2 md:gap-4">
          <div className="flex items-center w-1/2">
            <label className="title font-semibold text-gray-700 mr-2 text-xs md:text-sm">Від</label>
            <input
              type="number"
              value={value[0]}
              onChange={(e) => setValue([+e.target.value, value[1]])}
              placeholder="Min"
              className="w-3/4 p-1 md:p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 text-xs md:text-sm"
            />
            <span className="text-gray-500 ml-1 text-xs">₴</span>
          </div>
          
          <div className="flex justify-center items-center w-1/2">
            <label className="title font-semibold text-gray-700 mr-2 text-xs md:text-sm">До</label>
            <input
              type="number"
              value={value[1]}
              onChange={(e) => setValue([value[0], +e.target.value])}
              placeholder="Max"
              className="w-3/4 p-1 md:p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 text-xs md:text-sm"
            />
            <span className="text-gray-500 ml-1 text-xs">₴</span>
          </div>
        </div>
        
        <div className="flex justify-around mt-4 md:mt-6 gap-2 md:gap-4">
          <button
            disabled={isLoading}
            onClick={() => sorting()}
            type="button"
            className="py-1.5 px-4 md:py-2.5 md:px-6 text-xs md:text-sm bg-gray-800 text-white font-semibold transition-all duration-300 hover:bg-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Застосувати
          </button>
          
          <button
            onClick={() => reset()}
            type="button"
            className="py-1.5 px-4 md:py-2.5 md:px-6 text-xs md:text-sm border border-gray-300 text-gray-600 font-semibold transition-all duration-300 hover:bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            Скинути фільтр
          </button>
        </div>
        <div className="block w-full mt-4">
          <label className="block mb-2 text-sm font-semibold text-gray-600 w-full uppercase tracking-wide">
            Сортування
          </label>
            <Select
              placeholder='Сортування за ціною'
              options={obj}
              onChange={value => selectChange(value)}
              className='text-left'
            />
        </div>

        <div className="line h-0.5 w-2/3 block bg-black mx-auto my-4 mt-6"></div>

        <div className="category">
          <h1 className="category-wrap__title font-normal md:text-lg uppercase">Категорія одягу</h1>
          <div className="category-wrap flex flex-col items-center mt-4">
          {uniqueTypes.map((type, index) => {
            return <div 
            onClick={() => sortByCategory(type)} 
            key={index} 
            className="category-title min-w-48 uppercase bg-gray-700 text-white py-2 font-semibold xs:text-xs md:text-md xs:my-0.5 md:my-2 cursor-pointer hover:bg-black transition"
            >
              {type}
            </div >
          })}
          </div>
        </div>
      </div>  
    </>
  );
}

export default SortByPrice;