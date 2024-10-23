import Slider from "react-slick";
import { Tab } from '@headlessui/react'
import GetApi from '../other/getApi'
import ClipLoader from "react-spinners/ClipLoader";

import { useEffect, useState } from 'react';

const Catalog = () => {
    const [catalog, getCatalog] = useState([]);
    const [active, setActive] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // Текущее состояние активного таба

    const getApi = new GetApi();

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
        setActive(false)
        const timer = setTimeout(() => {
            setActive(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [activeTab])

    const getProduct = async () => {
        try {
            const data = await getApi.getApi();
            console.log(data);
            getCatalog(data);
        } catch(err) {
            throw new err;
        }
    }

    const firstTabCatalog = catalog.slice(0, 6);
    const secondTabCatalog = catalog.slice(6, 12);
    const thirdTabCatalog = catalog.slice(12, 18);

    const loading = !active ? <ClipLoader/> : null;

    return (
        <section className="catalog">
            <div className="catalog-container my-10	w-9/12 mx-auto">
                <h1 className="catalog-title text-center md:text-4xl uppercase xs:text-3xl">Наш каталог</h1>
                <Tab.Group onChange={setActiveTab}> {/* Обновляем активный таб */}
                    <Tabs />
                    <Tab.Panels className='pt-8 mx-auto text-center'>
                        {loading ? <ClipLoader /> : (
                            <TabsContent
                                firstTabCatalog={firstTabCatalog}
                                secondTabCatalog={secondTabCatalog}
                                thirdTabCatalog={thirdTabCatalog}
                                activeTab={activeTab} // Передаем активный таб в контент
                            />
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
        slidesToShow: 2,
        speed: 500,
        infinite: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    swipe: true,
                    dots: false
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
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
                    <Tab className={({ selected }) => selected ? 'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition' : 
                    'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition'}>Жіноче 
                    </Tab>

                    <Tab className={({ selected }) => selected ? 'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition' : 
                    'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition'}>Чоловіче 
                    </Tab>

                    <Tab className={({ selected }) => selected ? 'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition' : 
                    'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition'}>Сумки та портфелі 
                    </Tab>
                </Slider>
            ) : (
                <>
                    <Tab className={({ selected }) => selected ? 'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition' : 
                    'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition'}>Жіноче 
                    </Tab>

                    <Tab className={({ selected }) => selected ? 'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition' : 
                    'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition'}>Чоловіче 
                    </Tab>

                    <Tab className={({ selected }) => selected ? 'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition' : 
                    'min-h-16 min-w-48 text-black p-2.5 uppercase font-bold rounded-lg transition'}>Сумки та портфелі 
                    </Tab>
                </>
            )}
        </Tab.List>
    );
};

const TabsContent = ({ firstTabCatalog, secondTabCatalog, thirdTabCatalog, activeTab }) => {
    return (
        <>
            <Tab.Panel className={activeTab === 0 ? 'fade-in flex flex-wrap justify-center' : 'hidden'}>
                {firstTabCatalog.map((item, index) => (
                    <div key={index} className="catalog-block ml-4 mr-4 mb-6 cursor-pointer overflow-hidden">
                        <img src={require(`../img/${item.image}`)} alt={item.name} className="catalog-block__img hover:opacity-80 transition" />
                        <div className="catalog-block__title text-center font-semibold pt-4">{item.title}</div>
                        <div className="catalog-block__price text-center">{item.price}</div>
                    </div>
                ))}
            </Tab.Panel>

            <Tab.Panel className={activeTab === 1 ? 'fade-in flex flex-wrap justify-center' : 'hidden'}>
                {secondTabCatalog.map((item, index) => (
                    <div key={index} className="catalog-block ml-4 mr-4 mb-6 cursor-pointer">
                        <img src={require(`../img/${item.image}`)} alt={item.name} className="catalog-block__img hover:opacity-80 transition" />
                        <div className="catalog-block__title text-center font-semibold pt-4">{item.title}</div>
                        <div className="catalog-block__price text-center">{item.price}</div>
                    </div>
                ))}
            </Tab.Panel>

            <Tab.Panel className={activeTab === 2 ? 'fade-in flex flex-wrap justify-center' : 'hidden'}>
                {thirdTabCatalog.map((item, index) => (
                    <div key={index} className="catalog-block ml-4 mr-4 mb-6 cursor-pointer">
                        <img src={require(`../img/${item.image}`)} alt={item.name} className="catalog-block__img hover:opacity-80 transition" />
                        <div className="catalog-block__title text-center font-semibold pt-4">{item.title}</div>
                        <div className="catalog-block__price text-center">{item.price}</div>
                    </div>
                ))}
            </Tab.Panel>
        </>
    );
};