import { FcOk } from "react-icons/fc";
import {useSpring, animated, useTransition} from '@react-spring/web' // Добавили анимацию с помощью react spring

const Modal = ({title}) => {

    const slideDown = useSpring({
        from: { transform: 'translateY(-100%)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { tension: 200, friction: 20 },
    });

    const scaleAndSlide = useSpring({
        from: { transform: 'scale(0.8) translateY(-20px)', opacity: 0 },
        to: { transform: 'scale(1) translateY(0)', opacity: 1 },
        config: { tension: 220, friction: 18 },
    });

    const fadeInBlur = useSpring({
        from: { opacity: 0, filter: 'blur(10px)' },
        to: { opacity: 1, filter: 'blur(0px)' },
        config: { duration: 300 },
    });

    const slideLeftAndRotate = useSpring({
        from: { transform: 'translateX(-100%) rotate(-10deg)', opacity: 0 },
        to: { transform: 'translateX(0) rotate(0deg)', opacity: 1 },
        config: { tension: 250, friction: 20 },
    });

    return (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <animated.div style={fadeInBlur}> {/* Так мы не трогаем задний фон а создаём анимацию только для самого окна */}
                <div className="modal-wrap md:min-w-96 xs:max-w-72 md:max-w-max bg-white shadow-lg p-6 text-center">
                <div className="flex justify-end items-center border-gray-200">
            </div>
                <FcOk className="text-center mx-auto text-5xl"/>
                <h1 className="modal-accept xs:text-md md:text-xl mt-4 uppercase font-light">{title}</h1>
            </div>
            </animated.div>
        </div>
    )
}

export default Modal;