import axios from 'axios';

class GetApiFromJson {
    
    getApi = async () => { // Лучше использовать async/await нежели then и catch, они работают более не стабильно
        try {
            const response = await axios('/catalog.json');
            return response.data;
        } catch(error) {
            console.error('Ошибка при получении данных:', error);
            throw error; // Пробрасываем ошибку, чтобы обработать её в компоненте
        }
    }
}

export default GetApiFromJson;