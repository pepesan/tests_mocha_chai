import axios from 'axios';

export async function getData() {
    try {
        const response = await axios.get('https://api.example.com/data');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}