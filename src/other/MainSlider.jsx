import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slideOne from '../img/slide_1.jpg';
import slideTwo from '../img/slide_2.jpg';
import slideThree from '../img/slide_3.jpg';

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
        width: "50px", // Ширина стрелки
        height: "50px", // Высота стрелки
        right: '30px'
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
        width: "50px", // Ширина стрелки
        height: "50px", // Высота стрелки
        left: '30px',
        zIndex: '999'
      }}
      onClick={onClick}
    />
  );
}

const MainSlider = () => {
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
  return (
    <div className="slider-container relative">
      <Slider {...settings}>
      <div>
          <img src={slideOne} alt="" className="" />
      </div>
      <div>
          <img src={slideTwo} alt="" className="" />
      </div>
      <div>
          <img src={slideThree} alt="" className="" />
      </div>
      </Slider>
    </div>
  );
}

export default MainSlider;