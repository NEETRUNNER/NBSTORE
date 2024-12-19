import Path from "../other/Path";
import empty from "../img/empty-cart.png"
import PaymentForm from '../other/Form'
import Modal from "../other/Modal";

import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { useProductContext } from "../hooks/useProductContext";
import { useEffect } from "react";

import { FaTrash } from "react-icons/fa";

const BasketPage = () => {

    const {basketData, setBasketData, selectSize, openModal, setOpenModal} = useProductContext();
    console.log(basketData)
    
    useEffect(() => {
        console.log(openModal)

        const timeoutId = setTimeout(() => {
            setOpenModal(false);
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId); // Очистка таймаута при размонтировании, сделать так же везде
        };
    }, [openModal])

    const deleteCard = (id) => {
        setBasketData((prevBasketData) => prevBasketData.filter(item => item.id !== id))
    }
    console.log(selectSize)

    const totalPrice = basketData.reduce((acc, item) => acc + item.price, 0);
        
    useEffect(() => {
        console.log("Обновление данных корзины:", basketData);
        console.log("Сумма корзины:", totalPrice);
    }, [basketData]);
    return (
        <>
        <section className="basket">
            <div className="basket-container flex flex-col h-full lg:w-5/6 xl:w-9/12 mx-auto xs:w-11/12 text-center xs:py-4 xs:my-0">
                <h1 className="basket-title md:mt-12 xs:mt-0 font-medium md:w-max mx-auto text-center md:text-2xl lg:text-3xl uppercase xs:w-max xs:text-xl xl:text-3xl text-black p-2">
                    Кошик товарів
                </h1>
                <span className="line h-0.5 block bg-gray-500 md:w-40 xs:w-28 mx-auto"></span>
                <Path/>
                
                <div className="basket-wrap flex flex-wrap xs:flex-col md:flex-row justify-around">

                    <div className="basket-item">
                    {basketData.length > 0 ? (basketData.map((item) => (
                    <div key={item.id} className="basket-item-wrapper">
                        <span className="line block h-px bg-gray-300"></span>
                        
                        <div className="basket-item flex flex-col md:flex-row items-center md:justify-around space-y-4 md:space-y-0 my-10">
                            <div className="basket-item__info flex xs:flex-col md:flex-row items-center md:w-3/4 text-center md:text-left space-y-2 md:space-y-0">
                                <img
                                    src={require(`../img/${item.image}`)}
                                    alt={item.title}
                                    className="basket-item__image xs:w-2/4 mx-auto md:mx-0 h-auto w-3/4 md:w-1/5 lg:w-1/6 object-cover"
                                />
                                <div className="basket-item__details ml-0 md:ml-4 mt-2 md:mt-0 flex-1">
                                    <h1 className="font-light xs:text-lg md:text-lg lg:text-xl text-gray-800 uppercase">
                                        {item.title}
                                    </h1>
                                </div>
                                <div className="basket-price text-lg md:text-xl font-semibold text-gray-700 mt-1">
                                        {item.price} ₴
                                    </div>
                            </div>
                            
                            <div className="basket-item__size text-gray-600 text-sm md:text-base font-medium">
                                {(item.size) || (item.category === 'bags' ? null : null)}
                            </div>
                            
                            <button 
                                className="basket-item__trash text-gray-500 hover:text-red-600 transition-colors duration-200 mt-2 md:mt-0"
                                onClick={() => deleteCard(item.id)}
                            >
                                <FaTrash size={18} />
                            </button>
                        </div>
                        
                        <span className="line block h-px bg-gray-300"></span>
                    </div>
                    ))) : <>
                            <img src={empty} alt="" className="basket-empty__card w-max h-auto mt-4 mx-auto"/>
                            <h1 className="basket-empty__title md:text-xl text-center font-mono py-3.5">У вашому кошику немає товарів</h1>
                        </>
                    }
                    </div>

                    {basketData.length > 0 ? 
                    <div className="basket-total__wrap xs:w-full xs:mx-auto md:mx-0 md:mt-4 2xl:mt-0 md:my-0 xs:my-4 h-max items-start p-4 shadow-lg max-w-64 border bg-zinc-300">
                        <h1 className="basket-total__title xs:text-sm md:text-md uppercase font-normal text-black">
                                Сума оплати за товар
                            </h1>
                            
                            <div className="basket-total__price w-max md:text-md mx-auto xs:text-xl md:text-3xl font-normal xs:my-3 py-4 text-black border-t border-b border-gray-600">
                                {totalPrice} грн
                            </div>

                            <ScrollLink
                            to="payment-form"
                            smooth={true}
                            duration={500}
                            >
                            <button className='bg-primary border-primary border inline-flex items-center justify-center py-3 px-5 text-center text-sm font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'>
                                Перейти до оформлення
                            </button>
                            </ScrollLink>
                    </div>
                    : null}
                </div>

                <Link className="w-max h-max my-8 mx-auto" to='/'>
                    <button type="button" className="px-4 md:py-2.5 md:px-6 p-3 bg-gray-800 text-white font-semibold transition-all duration-300 hover:bg-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Повернутися до магазину
                    </button>
                </Link>
            
            {basketData.length > 0 ? <div>
                <div className="line w-1/4 h-0.5 bg-gray-400 mx-auto my-4"></div>
                <h1 className="payment-title text-center text-2xl uppercase font-light pt-4">Оформлення замовлення</h1>
                <PaymentForm/>
            </div> : null}
            
            </div>

            {openModal ? <Modal title={'Товар успішно оформлено'}/> : null}
        </section>
        </>
    )
}

export default BasketPage;

// Вроде как работает чётко, после добавления уникального идентификатора всё чётко