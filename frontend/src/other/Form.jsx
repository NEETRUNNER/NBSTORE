import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useProductContext } from "../hooks/useProductContext";

import axios from "axios";
import Select from 'react-select'

const PaymentForm = () => {
    const [cityData ,setCityData] = useState([]);
    const [branchData, setBranchData] = useState([]);
    const [cityDescr, setCityDescr] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('')

    const {setBasketData, openModal, setOpenModal, basketData} = useProductContext();

    const citiesData = [ // Так как у новой почты нет api с городами приходится изощеряться
        "Київ",
        "Харків",
        "Одеса",
        "Дніпро",
        "Запоріжжя",
        "Львів",
        "Кривий Ріг",
        "Миколаїв",
        "Вінниця",
        "Херсон",
        "Полтава",
        "Чернігів",
        "Черкаси",
        "Суми",
        "Житомир",
        "Хмельницький",
        "Рівне",
        "Івано-Франківськ",
        "Тернопіль",
        "Луцьк",
        "Ужгород",
        "Чернівці"
    ];
    
    const { register, handleSubmit, watch, reset, setValue, getValues, control, formState: {errors} } = useForm()

    const getCity = async () => {
        try {
            const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
                apiKey: "c307c39437e0ab84d133a2266fb9465e",
                modelName: "Address",
                calledMethod: "getCities",
                methodProperties: {}
            });
    
            const cities = response.data.data.filter(item => citiesData.includes(item.Description))
            setCityData(cities);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    const getBranch = async (selectedCity) => {
        try {
            const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
                apiKey: "c307c39437e0ab84d133a2266fb9465e",
                modelName: "AddressGeneral",
                calledMethod: "getWarehouses",
                methodProperties: {
                    CityName: selectedCity,
                    limit: "5",
                    page: "1"
                }
            });

            const branchType = response.data.data.filter(item => item.CategoryOfWarehouse === 'Branch');
            setBranchData(branchType);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const request = await axios.post('http://localhost:5000/api/form', data);
            console.log(request)

            reset();
            setBasketData([]) // Иммитация удаления оформленных товаров
            setOpenModal(!openModal)
            setValue('delivery', null);
            setValue('city', null);
            setValue('branche', null)

            return request;
        } catch (e) {
            console.log(e);
        } finally {
            reset();
            setBasketData([]) // Иммитация удаления оформленных товаров
            setOpenModal(!openModal)
            setValue('delivery', null);
            setValue('city', null);
            setValue('branche', null)
        }
    }

    useEffect(() => {
        setValue('cards', basketData);
    }, [basketData, setValue]);

    useEffect(() => {
        getCity();
    }, []);

    useEffect(() => {
        getBranch(cityDescr);
    }, [cityDescr])

    return (
        <form id='payment-form' className="payment-form my-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="payment-container flex justify-evenly pt-3 flex-wrap">

                <div className="payment-client flex flex-col min-w-64">
                    <h1 className="payment-client__title text-xl font-medium mb-4 mt-4">Дані покупця</h1>
                    <div>
                        <input placeholder="ПІБ" type="text" className="min-h-8 text-xm pl-2 border-b-2 text-gray-500 outline-none p-3"
                        {...register('name', {
                            required: 'Введіть ваше ім я',
                            minLength: {
                                value: 10,
                                message: 'Введіть корректний ПІБ'
                            },
                        })}
                        />
                        {errors.name && <p className="text-sm text-red-600 mt-2">{errors.name.message}</p>}
                    </div>

                    <div>
                        <input placeholder="email" type="text" className="min-h-8 text-xm pl-2 border-b-2 text-gray-500 outline-none p-3"
                        {...register('email', {
                            required: 'Введіть електронну адресу',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Введите корректный email",
                            },
                        })}
                        />
                        {errors.email && <p className="text-sm text-red-600 mt-2">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input placeholder="Номер телефону" type="number" className="min-h-8 text-xm pl-2 border-b-2 text-gray-500 outline-none p-3"
                        {...register('phone', {
                            required: 'Введіть номер телефону',
                            minLength: {
                                value: 12
                            },
                            maxLength: {
                                value: 12
                            },
                        })}
                        />
                        {errors.phone && <p className="text-sm text-red-600 mt-2">{errors.phone.message}</p>}
                    </div>

                </div>

                <div className="payment-delivery">
                <h1 className="payment-delivery__title text-xl font-medium mb-4 mt-4">Доставка</h1>
                    <div className="p-3">
                        <Controller // Используется для интеграции компонентов и связывает компонент с react-hook-form через name и control
                            name='delivery'
                            control={control}
                            rules={{required: 'Обов язкове поле'}}
                            render={({ field }) => ( // render(field) передаёт нам методы onchange и value 
                            <Select
                                {...field}
                                placeholder='Спосіб доставки'
                                className="md:max-w-96 md:min-w-96 text-xm text-left"
                                options={[{
                                    label: 'Нова пошта', value: 'Нова пошта'}, {label: 'Нова пошта(кур єр)', value: 'Нова пошта(кур єр)'}
                                ]}
                                onChange={(selectedOption) => {
                                    field.onChange(selectedOption); // Для react-hook-form
                                    setDeliveryMethod(selectedOption.label); // Дополнительное действие
                                }}
                            />   
                            )}
                        />
                        {errors.delivery && <p className="text-sm text-red-600 mt-2">{errors.delivery.message}</p>}
                    </div>

                    {deliveryMethod === 'Нова пошта(кур єр)' 
                    ?
                    <div className="p-3">
                        <input placeholder="Введіть вашу адресу" type="text" className="min-h-8 text-xm pl-2 border-b-2 text-gray-500 outline-none p-3"
                        {...register('address', {
                            required: 'Обов язкове поле',
                            minLength: {
                                value: 5,
                            },
                        })}
                        />
                        {errors.address && <p className="text-sm text-red-600 mt-2">{errors.address.message}</p>}
                    </div>
                    : <>
                        <div className="p-3">
                            <Controller // Используется для интеграции компонентов и связывает компонент с react-hook-form через name и control
                                name='city'
                                control={control}
                                rules={{required: 'Обов язкове поле'}}
                                render={({ field }) => ( // render(field) передаёт нам методы onchange и value 
                                <Select
                                    {...field}
                                    placeholder='Оберіть місто'
                                    className="md:max-w-96 md:min-w-96 text-xm text-left"
                                    options={cityData.map(item => ({
                                        label: item.Description,
                                        value: item.Ref 
                                    }))}
                                    
                                    onChange={(selectedOption) => {
                                        field.onChange(selectedOption); // Для react-hook-form
                                        setCityDescr(selectedOption.label); // Дополнительное действие
                                    }}
                                />
                                )}
                            />
                            {errors.city && <p className="text-sm text-red-600 mt-2">{errors.city.message}</p>}
                        </div>

                        <div className="p-3">
                            <Controller // Используется для интеграции компонентов и связывает компонент с react-hook-form через name и control
                                name='branche'
                                control={control}
                                rules={{required: 'Обов язкове поле'}}
                                render={({ field }) => ( // render(field) передаёт нам методы onchange и value 
                                <Select
                                    {...field}
                                    placeholder='Оберіть відділення'
                                    className="md:max-w-96 md:min-w-96 text-xm text-left"
                                    options={cityDescr ? branchData.map(item => ({
                                        label: item.Description,
                                        value: item.Ref
                                    })) : []}
                                    isLoading
                                    onChange={(selectedOption) => {
                                        field.onChange(selectedOption); // Для react-hook-form
                                        setCityDescr(selectedOption.label); // Дополнительное действие
                                    }}
                                />
                                )}
                            />
                            {errors.branche && <p className="text-sm text-red-600 mt-2">{errors.branche.message}</p>}
                        </div>
                    </>}
                </div>

                <div className="payment-type min-w-64">
                    <h1 className="payment-type__title text-xl font-medium mb-4 mt-4">Оплата</h1>
                    
                    <div className="flex items-baseline flex-col">
                        <div className="payment-type__wrap">
                        <input id="payment-delivery" name='payment' type="radio" value='payment-delivery'
                        {...register('payment' , {
                            required: 'Оберіть тип оплати'
                        })}
                        />
                            <label htmlFor="payment-delivery" className="font-light text-xm ml-2">
                                Оплата при отриманні
                            </label>
                        </div>

                        <div className="payment-type__wrap pt-2">
                        <input id="payment-card" name='payment' type="radio" value='payment-card'
                        {...register('payment' , {
                            required: 'Оберіть тип оплати'
                        })}
                        />
                            <label htmlFor="payment-card" className="font-light text-xm ml-2">
                                Оплата карткою Visa/Mastercard
                            </label>
                        </div>
                    </div>
                    {errors.payment && <p className="text-sm text-red-600 mt-2">{errors.payment.message}</p>}
                </div>

                <input 
                type="hidden"
                {...register('cards')}
                />
                
            </div>
            <button
                disabled={openModal}
                type="submit"
                className="form-button w-full md:w-auto px-6 py-3 mt-6 bg-gray-800 text-white font-semibold transition-all duration-300 hover:bg-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                {openModal ? 'Зачекайте...' : 'Оформити товар'}
            </button>
            
        </form>
    )
}

export default PaymentForm;