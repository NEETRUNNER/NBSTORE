# NBStore: Магазин Одежды

**NBStore** — это полноценное веб-приложение магазина одежды, реализованное на современном стеке технологий. Проект разрабатывался в течение 1–1.5 месяцев и включает в себя широкий функционал, позволяющий пользователю легко взаимодействовать с каталогом товаров, оформлять заказы, а также сохранять данные корзины между сессиями.

---

## 📖 Описание проекта

NBStore представляет собой удобный и функциональный онлайн-магазин, где пользователи могут:
- Просматривать каталог товаров.
- Ознакомиться с деталями каждого товара.
- Оформлять заказы через удобную форму с интеграцией внешнего API.
- Управлять корзиной покупок с сохранением данных между сессиями.

---

## 🚀 Технологический стек

Для реализации проекта были использованы следующие технологии и библиотеки:

- **React** — основа приложения для построения интерфейса.
- **React Hooks** — для управления состоянием и эффектами.
- **React Router** — для реализации навигации и динамических маршрутов.
- **React Hook Form** — для управления формами ввода.
- **Tailwind CSS** — для стилизации компонентов.
- **Local Storage** — для сохранения данных корзины между сессиями.

---

## 🌟 Основной функционал

1. **Каталог товаров**:
   - Динамическая маршрутизация для отображения страниц каждого отдельного товара.
   - Удобная структура категорий (например, для женщин, для мужчин, сумки и портфели).

2. **Форма заказа**:
   - Интеграция с **API Новой Почты** для обновления информации в зависимости от выбора клиента (например, выбор отделения доставки).
   - Управление полями формы через **React Hook Form** для гибкости и валидации.

3. **Корзина**:
   - Реализована с использованием **Local Storage**, что позволяет сохранять содержимое корзины даже после закрытия или перезагрузки страницы.

---

## 🛠️ Проблемы и решения

- **Динамическая маршрутизация в React Router**: 
  Первоначально возникли трудности с созданием динамических путей для отдельных товаров. Проблема была решена после изучения особенностей работы React Router и использования параметров URL.

- **React Hook Form**: 
  Этот инструмент был новым, поэтому параллельно с разработкой проводилось его изучение. В результате, форма заказа получилась функциональной и удобной для пользователей.

---

## 📚 Изученные навыки

Работа над проектом позволила улучшить навыки в следующих областях:
- Работа с маршрутизацией в React.
- Использование React Hook Form для создания сложных форм с интеграцией внешних API.
- Реализация адаптивной стилизации с помощью Tailwind CSS.
- Оптимизация пользовательского опыта за счет сохранения данных корзины.

---

## 📦 Структура проекта

```plaintext
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Basket.jsx
│   └── ... (другие переиспользуемые компоненты)
├── pages/
│   ├── HomePage.jsx
│   ├── ProductListPage.jsx
│   ├── ProductPage.jsx
│   ├── BasketPage.jsx
│   ├── AboutPage.jsx
│   └── Contacts.jsx
├── hooks/
│   └── useProductContext.js
├── other/
│   └── BurgerMenu.jsx
├── App.jsx
├── index.js
└── styles/ (Tailwind CSS стили)
```

🛒 Live Demo
Попробовать приложение можно [здесь](https://neetrunner.github.io/NBSTORE/).

📧 Контакты
Если у вас есть вопросы или предложения, вы можете связаться со мной через [телеграм](https://t.me/FrontendJunDev).
