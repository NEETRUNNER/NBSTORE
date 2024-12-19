import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom'; // При публикации не на github использовать BrowseRouter
import React, { Suspense, lazy } from 'react'
import { useEffect, useState } from 'react';

import { ContextWrapper } from './hooks/useProductContext'; // Используя хук useContext мы получаем
import MoonLoader from "react-spinners/MoonLoader";

import Header from "./components/Header";
import Footer from './components/Footer';
import BurgerMenu from './other/BurgerMenu';

// Lazy компоненты должны быть первыми после app, это правило без которого оно не будет работать, так обязательно убираем импорты сверху, их либо комментируем чтобы они не создавали проблем или удаляем
const LazyMain = lazy(() => import('./pages/HomePage'))
const LazyProductList = lazy(() => import('./pages/ProductListPage'))
const LazyProduct = lazy(() => import('./pages/ProductPage'))
const LazyBasket = lazy(() => import('./pages/BasketPage'))
const LazyAbout = lazy(() => import('./pages/AboutPage'))
const LazyContacts = lazy(() => import('./pages/Contacts'))
const LazyError = lazy(() => import('./pages/ErrorPage'))

const App = () => {
  const [active, setActive] = useState(false); // Бургер меню
  const [startLoading, setStartLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartLoading(false);
    }, 1500);
  }, [])

/*   const { itemDetailTitle } = useParams();  // Получаем параметры из URL
  console.log(itemDetailTitle) // нету */
  
  const toggleActive = () => {
    setActive(!active);
  }

  return (
    <>
    <Suspense fallback={<div className="overlay h-screen w-full flex justify-center items-center flex-col"><MoonLoader speedMultiplier={2}/><span className='font-light text-xl'>Завантаження</span></div>}>
    
     {startLoading ? <div className="overlay h-screen w-full flex justify-center items-center flex-col"><MoonLoader speedMultiplier={2}/><span className='font-light text-xl'>Завантаження</span></div> : <ContextWrapper>
      <Router>
        <BurgerMenu active={active} toggleActive={toggleActive} setActive={setActive}/>
        <Header active={active} setActive={setActive} toggleActive={toggleActive}/>

        <Routes>
            <Route path='/' element={<LazyMain/>}></Route> {/* Адаптив есть */}
            <Route path='/for-woman' element={<LazyProductList category="woman" title={'Для жінок'} />}/> {/* Адаптив есть */}
            <Route path='/for-man' element={<LazyProductList category="man" title={'Для чоловіків'} />}/> {/* Адаптив есть */}
            <Route path='/for-bags' element={<LazyProductList category="bags" title={'Сумки та портфелі'} />}/> {/* Адаптив есть */}
            
            <Route path='/:itemDetailTitle' element={<LazyProduct/>}></Route> {/* Адаптив есть */}
            <Route path='/for-woman/:itemDetailTitle' element={<LazyProduct/>}></Route>
            <Route path='/for-man/:itemDetailTitle' element={<LazyProduct/>}></Route>
            <Route path='/for-bags/:itemDetailTitle' element={<LazyProduct/>}></Route>

            <Route path='/basket' element={<LazyBasket/>}></Route> {/* Адаптив есть */}

            <Route path='/about-us' element={<LazyAbout/>}></Route>
            <Route path='/contacts' element={<LazyContacts/>}></Route>

            <Route path='*' element={<LazyError></LazyError>}></Route> {/* Адаптив есть */}
        </Routes>
        
        <Footer/>
      </Router>

      </ContextWrapper>}
      </Suspense>
    </>
  );
}

export default App;