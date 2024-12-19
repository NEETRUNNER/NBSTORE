// Интеграция библиотек
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const { Router } = require('express');

// Создание роута 
const router = new Router();

// Создание сервера с помощью библиотеки express
const app = express();

const PORT = process.env.PORT; // Создали порт
const bdUrl = process.env.MONGO_URI // Ссылка на базу данных mongoDB

app.use(express.json()); // Строка app.use(express.json()); в Express используется для подключения встроенного middleware (промежуточного программного слоя), который позволяет вашему приложению автоматически обрабатывать входящие запросы с JSON-данными.

app.use(cors()); // Убирает корс ошибку has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.use('/api', router); // Все маршруты, объявленные в router, будут доступны по префиксу /form

const startApp = async () => { // Функция для запуска нашего сервера
    try {
        await mongoose.connect(bdUrl);
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порте ${PORT}`);
        })
    } catch (e) {
        console.log(e)
    }
}
startApp();

const Form = new mongoose.model('Product', new mongoose.Schema({ // Важно создавать модель для работы методов
    branche: {
        type: Map,
        required: false
    },
    cards: {
        type: [Map],
        required: true
    },
    city: {
        type: Map,
        required: false
    },
    delivery: {
        type: Map,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}))

router.post('/form', async (req, res) => {
    try {
        const item = await Form.create(req.body);
        console.log('Данные отправлены')
        return res.json(item);
    } catch (e) {
        res.status(500).json(e)
    }
})

app.get('/test', (req, res) => { // Так можно проверить роут и получить ответ в консоль
    if (res.status(200)) {
        console.log('Мы получили успешный запрос')
    }
})