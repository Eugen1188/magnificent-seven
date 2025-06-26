import axios from 'axios';

const API_URL = 'https://sheetdb.io/api/v1/i3p1vfy1nyvi6/?sheet=$';

async function getData(sheetName) {
  try {
    const response = await axios.get(API_URL + sheetName);
    return response.data;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    throw error;
  }
}

export default {
  getData,
};
