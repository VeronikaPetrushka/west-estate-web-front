import { createAsyncThunk } from '@reduxjs/toolkit';
import itemsApi from '../api.js';

export const fetchItems = createAsyncThunk(
    'items/fetchAll',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItems();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToBuy = createAsyncThunk(
    'items/fetchToBuy',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToBuy();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToBuyHouse = createAsyncThunk(
    'items/fetchToBuyHouse',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToBuyHouse();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToBuyFlat = createAsyncThunk(
    'items/fetchToBuyFlat',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToBuyFlat();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToRent = createAsyncThunk(
    'items/fetchToRent',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToRent();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToRentHouse = createAsyncThunk(
    'items/fetchToRentHouse',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToRentHouse();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToRentFlat = createAsyncThunk(
    'items/fetchToRentFlat',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToRentFlat();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsCommercial = createAsyncThunk(
    'items/fetchCommercial',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsCommercial();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToBuyCommercial = createAsyncThunk(
    'items/fetchToBuyCommercial',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToBuyCommercial();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsToRentCommercial = createAsyncThunk(
    'items/fetchToRentCommercial',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsToRentCommercial();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemsFavorite = createAsyncThunk(
    'items/fetchFavorite',
    async (_, thunkAPI) => {
      try {
        const res = await itemsApi.getItemsFavorite();
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchItemById = createAsyncThunk(
    'items/fetchById',
    async (_id, thunkAPI) => {
      try {
        const res = await itemsApi.getItemById(_id);
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const createItem = createAsyncThunk(
    'items/create',
    async (itemData, thunkAPI) => {
      try {
        const res = await itemsApi.createItem(itemData);
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const updateItem = createAsyncThunk(
    'items/update',
    async ({ id, itemData }, thunkAPI) => {
      try {
        const res = await itemsApi.updateItem(id, itemData);
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const deleteItem = createAsyncThunk(
    'items/delete',
    async (id, thunkAPI) => {
      try {
        const res = await itemsApi.deleteItem(id);
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );