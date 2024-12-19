import axios from 'axios';

const GetProductApi = async () => {
    try {
        const response = await axios.get('./catalog.json'); // Важно ставить точку для правильной работы на github
        return response.data;
    } catch(error) {
        console.error('Ошибка при получении данных:', error);
        return null;
    }
}

export default GetProductApi;