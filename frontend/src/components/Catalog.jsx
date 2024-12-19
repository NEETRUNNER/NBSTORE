import Slider from "react-slick";
import { Tab } from '@headlessui/react'
import GetApi from '../Service/GetProductApi'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import slugify from 'slugify';

import { useProductContext } from "../hooks/useProductContext";

const Catalog = () => { // Можно минимизировать данные с помощью useCallback так как при переходе на основную страницу мы опять обновляем данные когда они уже загружены
    const {productData, setProductData} = useProductContext(); // Актуальные данные
    const [activeModal, setActiveModal] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // Текущее состояние активного таба

    useEffect(() => {
        setActiveModal(false)
        const timer = setTimeout(() => {
            setActiveModal(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [activeTab])

    const firstTabCatalog = productData.filter(item => item.category === 'woman').slice(0, 6);
    const secondTabCatalog = productData.filter(item => item.category === 'man').slice(0, 6);
    const thirdTabCatalog = productData.filter(item => item.category === 'bags').slice(0, 6);

    const loading = !activeModal ? <ClipLoader/> : null;

    return (
        <section id="catalog" className="catalog min-h-96">
            <div className="catalog-container my-10	md:w-11/12 mx-auto xs:w-11/12">
                <h1 className="catalog-title font-medium w-max mx-auto text-center md:text-4xl uppercase xs:text-2xl text-black p-2">Каталог</h1>
                <span className="line h-0.5 block bg-gray-500 md:w-40 xs:w-28 mx-auto"></span>
                <Tab.Group onChange={setActiveTab}> {/* Обновляем активный таб */}
                    <Tabs activeTab={activeTab}/>
                        <Tab.Panels className='mx-auto text-center sm:w-9/12 md:w-10/12 min-h-72 flex justify-center items-center flex-col'> {/* Добавил flex-col */}
                            {loading ? <ClipLoader /> : (
                                <>
                                    <TabsContent
                                        firstTabCatalog={firstTabCatalog}
                                        secondTabCatalog={secondTabCatalog}
                                        thirdTabCatalog={thirdTabCatalog}
                                        activeTab={activeTab} // Передаем активный таб в контент
                                    />
                                </>
                            )}
                        </Tab.Panels>
                </Tab.Group>
            </div>
        </section>
    )
}

export default Catalog;

const Tabs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Отслеживание изменения ширины окна
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Удаляем обработчик при размонтировании
    }, []);

    const settings = {
        className: 'center',
        centerMode: false,
        infinite: false,
        centerPadding: '60px',
        slidesToShow: 1,
        speed: 500,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    swipe: true,
                    dots: false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    swipe: true,
                    dots: false
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    swipe: true,
                    dots: false
                },
            }
        ]
    };

    // Функция для обновления состояния при изменении ширины окна
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    return (
        <Tab.List className="pt-10 flex md:justify-center xs:block text-center">
            {isMobile ? (
                <Slider {...settings}>
                    <Tab className={({ selected }) => 
                    `relative max-h-max !w-full text-sm px-4 py-2 uppercase font-semibold 
                    transition duration-300 ease-in-out transform whitespace-nowrap
                    ${selected ? 'text-neutral-950 shadow-lg scale-105' : 'text-gray-700 hover:bg-gray-300 hover:scale-105'}`
                    }>
                        Жіноче
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </Tab>

                    <Tab className={({ selected }) => 
                    `relative max-h-max !w-full text-sm px-4 py-2 uppercase font-semibold 
                    transition duration-300 ease-in-out transform whitespace-nowrap
                    ${selected ? 'text-neutral-950 shadow-lg scale-105' : 'text-gray-700 hover:bg-gray-300 hover:scale-105'}`
                    }>
                        Чоловіче
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </Tab>

                    <Tab className={({ selected }) => 
                    `relative max-h-max !w-full text-sm px-4 py-2 uppercase font-semibold 
                    transition duration-300 ease-in-out transform whitespace-nowrap
                    ${selected ? 'text-neutral-950 shadow-lg scale-105' : 'text-gray-700 hover:bg-gray-300 hover:scale-105'}`
                    }>
                        Сумки та портфелі
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
                    </Tab>
                </Slider>
            ) : (
                <>
                    <Tab className={({ selected }) => 
                        `min-h-16 min-w-20 p-2.5 uppercase font-bold rounded-lg transition relative ml-2 mr-2 group ${selected ? 'text-black' : 'text-gray-500'}`}>
                        Жіноче
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span> 
                    </Tab>

                    <Tab className={({ selected }) => 
                        `min-h-16 min-w-20 p-2.5 uppercase font-bold rounded-lg transition relative ml-2 mr-2 group ${selected ? 'text-black' : 'text-gray-500'}`}>
                        Чоловіче
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span> 
                    </Tab>

                    <Tab className={({ selected }) => 
                        `min-h-16 min-w-20 p-2.5 uppercase font-bold rounded-lg transition relative ml-2 mr-2 group ${selected ? 'text-black' : 'text-gray-500'}`}>
                        Сумки та портфелі
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span> 
                    </Tab>
                </>
            )}
        </Tab.List>
    );
};

const TabsContent = ({ firstTabCatalog, secondTabCatalog, thirdTabCatalog, activeTab }) => {
    return (
        <>
        <div>
            <Tab.Panel className={activeTab === 0 ? 'fade-in flex flex-wrap justify-center xs:mt-8' : 'hidden'}>
                <RenderCards catalog={firstTabCatalog}/>
            </Tab.Panel>
            {activeTab === 0 ? <Link to='/for-woman'><button className="bg-black p-3 mt-6 text-white font-normal">Перейти до одягу</button></Link> : null}
        </div>
            
        <Tab.Panel className={activeTab === 1 ? 'fade-in flex flex-wrap justify-center xs:mt-8' : 'hidden'}>
            <RenderCards catalog={secondTabCatalog}/>
        </Tab.Panel>
        {activeTab === 1 ? <Link to='/for-man'><button className="bg-black p-3 mt-6 text-white font-normal">Перейти до одягу</button></Link> : null}
    
        <Tab.Panel className={activeTab === 2 ? 'fade-in flex flex-wrap justify-center xs:mt-8' : 'hidden'}>
            <RenderCards catalog={thirdTabCatalog}/>
        </Tab.Panel>
        {activeTab === 2 ? <Link to='/for-bags'><button className="bg-black p-3 mt-6 text-white font-normal">Перейти до сумок</button></Link> : null}
        </>
    );
    
};

const RenderCards = ({catalog}) => {
    return (
        catalog.map((item, index) => (
            <Link
                key={index}
                className="catalog-block__link border border-gray-200 shadow-md m-4 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105 xm:w-2/5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                to={`/${slugify(item.title, { lower: true, locale: 'ru' })}`}
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
    )
}