import axios from 'axios';

// const API_URI = 'https://aquatrack-api-myzh.onrender.com/api';

const API_URI = 'http://localhost:8080/api';

const headerConfig = {
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const publicInstance = axios.create({ ...headerConfig, baseURL: API_URI });

// ITEMS

export const getItems = async () => {
  const { data } = await publicInstance.get('/');
  return data;
};

export const getItemsToBuy = async () => {
  const { data } = await publicInstance.get('/buy');
  return data;
};

export const getItemsToBuyHouse = async () => {
  const { data } = await publicInstance.get('/buy/houses');
  return data;
};

export const getItemsToBuyFlat = async () => {
  const { data } = await publicInstance.get('/buy/flats');
  return data;
};

export const getItemsToRent = async () => {
  const { data } = await publicInstance.get('/rent');
  return data;
};

export const getItemsToRentHouse = async () => {
  const { data } = await publicInstance.get('/rent/houses');
  return data;
};

export const getItemsToRentFlat = async () => {
  const { data } = await publicInstance.get('/rent/flats');
  return data;
};

export const getItemsCommercial = async () => {
  const { data } = await publicInstance.get('/commercial');
  return data;
};

export const getItemsToBuyCommercial = async () => {
  const { data } = await publicInstance.get('/commercial/buy');
  return data;
};

export const getItemsToRentCommercial = async () => {
  const { data } = await publicInstance.get('/commercial/rent');
  return data;
};

export const getItemsFavorite = async () => {
  const { data } = await publicInstance.get('/favorite');
  return data;
};

export const getItemById = async (id) => {
  const { data } = await publicInstance.get(`/${id}`);
  return data;
};

export const createItem = async (itemData) => {
  const { data } = await publicInstance.post('/', itemData);
  return data;
};

export const updateItem = async (id, updatedData) => {
  const { data } = await publicInstance.put(`/${id}`, updatedData);
  return data;
};

export const deleteItem = async (id) => {
  const { data } = await publicInstance.delete(`/${id}`);
  return data;
};


const itemsApi = { getItems, 
    getItemsToBuy, 
    getItemsToBuyHouse, 
    getItemsToBuyFlat, 
    getItemsToRent, 
    getItemsToRentFlat, 
    getItemsToRentHouse, 
    getItemsCommercial, 
    getItemsToBuyCommercial, 
    getItemsToRentCommercial, 
    getItemsFavorite, 
    getItemById, 
    createItem, 
    updateItem, 
    deleteItem };

export default itemsApi;