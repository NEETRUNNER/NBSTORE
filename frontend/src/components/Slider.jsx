import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slideOne from '../img/slide_1.jpg';
import slideTwo from '../img/slide_2.jpg';
import slideThree from '../img/slide_3.jpg';

import bordo from '../img/bordo_suit.jpg';
import choco from '../img/choco_suit.jpg';
import banankaOne from '../img/man_bananka.jpg';
import banankaTwo from '../img/man_bananka3.jpg';
import blackJacket from '../img/man_jacket_black.jpg';
import blueJacket from '../img/man_jacket_blue.jpg';

import { useState, useEffect } from "react";

const Main = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
        
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: "contain", // Обеспечивает полное покрытие контейнера изображением
                backgroundRepeat: "no-repeat", // Предотвращает повторение изображения
                width: "40px", // Ширина стрелки
                height: "40px", // Высота стрелки
                right: '20px'
            }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: "contain", // Обеспечивает полное покрытие контейнера изображением
                backgroundRepeat: "no-repeat", // Предотвращает повторение изображения
                width: "40px", // Ширина стрелки
                height: "40px", // Высота стрелки
                left: '20px',
                zIndex: '35'
            }}
                onClick={onClick}
            />
        );
    }

        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
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
                    arrows: true,
                    swipe: true,
                    dots: false
                },
            },
        ],
            customPaging: i => (
                <div
                style={{
                    width: "15px", // Устанавливаем размер точки
                    height: "15px",
                    backgroundColor: "white", // Цвет точки
                    margin: "0 5px"
                }}
                >
                </div>
            )
        };

    // Отслеживание изменения ширины окна
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Удаляем обработчик при размонтировании
    }, []);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 480);
    };

    return (
        <main id='main' className="main">
            <div className="slider-container relative">
            {isMobile ? 
            <Slider {...settings}>
            <div>
                <img src={bordo} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={choco} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={banankaOne} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={banankaTwo} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={blackJacket} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={blueJacket} alt="" className="mx-auto" />
            </div>
            </Slider> :

            <Slider {...settings}>
            <div>
                <img src={slideOne} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={slideTwo} alt="" className="mx-auto" />
            </div>
            <div>
                <img src={slideThree} alt="" className="mx-auto" />
            </div>
            </Slider>}
            </div>
        </main>
    );
            
}
export default Main;