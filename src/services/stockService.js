import axios from 'axios';

const API_URL = 'https://sheetdb.io/api/v1/ssenjyt6x3abj';

async function getData() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    throw error;
  }
}

export default {
  getData,
};
