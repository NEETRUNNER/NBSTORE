import { FaTelegram, FaInstagramSquare  } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-cyan-50">
      <div className="footer-container py-10">

      <div className="footer-wrap max-w-7xl mx-auto flex flex-wrap justify-around xs:gap-y-4 md:gap-y-10 gap-x-10 md:gap-x-40 px-4 md:px-8">

        <div className="footer-catalog">
          <h1 className="footer-catalog__title md:text-left xs:text-center text-xl text-gray-800 mb-6 uppercase font-semibold tracking-wide">Каталог</h1>
          <ul className="space-y-4">
            <Link to="/for-woman">
              <li className="footer-catalog__li md:text-md xs:text-sm mb-6 md:text-left xs:text-center text-gray-600 hover:text-orange-600 transition duration-200 ease-in-out uppercase font-medium tracking-wide">Для жінок</li>
            </Link>
            <Link to="/for-man">
              <li className="footer-catalog__li md:text-md xs:text-sm mb-6 md:text-left xs:text-center text-gray-600 hover:text-orange-600 transition duration-200 ease-in-out uppercase font-medium tracking-wide">Для чоловіків</li>
            </Link>
            <Link to="/for-bags">
              <li className="footer-catalog__li md:text-md xs:text-sm mb-6 md:text-left xs:text-center text-gray-600 hover:text-orange-600 transition duration-200 ease-in-out uppercase font-medium tracking-wide">Сумки та портфелі</li>
            </Link>
          </ul>
        </div>

        <div className="footer-info">
          <h1 className="footer-info__title md:text-left xs:text-center text-xl text-gray-800 mb-6 uppercase font-semibold tracking-wide">Інформація</h1>
          <ul className="space-y-4">
            <Link to="/about-us">
              <li className="footer-catalog__li md:text-md xs:text-sm mb-6 md:text-left xs:text-center text-gray-600 hover:text-orange-600 transition duration-200 ease-in-out uppercase font-medium tracking-wide">Про нас</li>
            </Link>
            <Link to="/contacts">
              <li className="footer-catalog__li md:text-md xs:text-sm mb-6 md:text-left xs:text-center text-gray-600 hover:text-orange-600 transition duration-200 ease-in-out uppercase font-medium tracking-wide">Контакти</li>
            </Link>
          </ul>
        </div>

        <div className="footer-social">
          <h1 className="footer-social__title md:text-left xs:text-center text-xl text-gray-800 mb-6 uppercase font-semibold tracking-wide">Соціальні мережі</h1>
          <div className="footer-social__wrap flex space-x-6 md:space-x-8">
            <Link className="text-3xl text-gray-600 hover:text-orange-600 transition-transform transform hover:scale-125 duration-200 ease-in-out">
              <FaTelegram />
            </Link>
            <Link className="text-3xl text-gray-600 hover:text-orange-600 transition-transform transform hover:scale-125 duration-200 ease-in-out">
              <AiFillTikTok />
            </Link>
            <Link className="text-3xl text-gray-600 hover:text-orange-600 transition-transform transform hover:scale-125 duration-200 ease-in-out">
              <FaInstagramSquare />
            </Link>
            <Link className="text-3xl text-gray-600 hover:text-orange-600 transition-transform transform hover:scale-125 duration-200 ease-in-out">
              <FaSquareFacebook />
            </Link>
          </div>
        </div>

      </div>

        <span className="line block w-32 h-px bg-gray-300 mx-auto my-4"></span>
        <h1 className="text-center text-sm">© 2024 NBSTORE</h1>
    </div>
  </footer>
  );
};

export default Footer;