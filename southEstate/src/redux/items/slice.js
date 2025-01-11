import { createSlice } from '@reduxjs/toolkit';
import {
  fetchItems,
  fetchItemsToBuy,
  fetchItemsToBuyHouse,
  fetchItemsToBuyFlat,
  fetchItemsToRent,
  fetchItemsToRentHouse,
  fetchItemsToRentFlat,
  fetchItemsCommercial,
  fetchItemsToBuyCommercial,
  fetchItemsToRentCommercial,
  fetchItemsFavorite,
  fetchItemById,
  createItem,
  updateItem,
  deleteItem,
} from './operations.js';

const initialState = {
  items: [],
  itemsToBuy: [],
  itemsToBuyHouse: [],
  itemsToBuyFlat: [],
  itemsToRent: [],
  itemsToRentHouse: [],
  itemsToRentFlat: [],
  itemsCommercial: [],
  itemsToBuyCommercial: [],
  itemsToRentCommercial: [],
  itemsFavorite: [],
  item: null,
  isLoading: false,
  isError: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearError: state => {
      state.isError = null;
    },
  },
  extraReducers: builder => {
    // Fetch all items
    builder.addCase(fetchItems.pending, handlePending);
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, handleRejected);

    // Fetch items to buy
    builder.addCase(fetchItemsToBuy.pending, handlePending);
    builder.addCase(fetchItemsToBuy.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToBuy = action.payload;
    });
    builder.addCase(fetchItemsToBuy.rejected, handleRejected);

    // Fetch items to buy house
    builder.addCase(fetchItemsToBuyHouse.pending, handlePending);
    builder.addCase(fetchItemsToBuyHouse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToBuyHouse = action.payload;
    });
    builder.addCase(fetchItemsToBuyHouse.rejected, handleRejected);

    // Fetch items to buy flat
    builder.addCase(fetchItemsToBuyFlat.pending, handlePending);
    builder.addCase(fetchItemsToBuyFlat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToBuyFlat = action.payload;
    });
    builder.addCase(fetchItemsToBuyFlat.rejected, handleRejected);

    // Fetch items to rent
    builder.addCase(fetchItemsToRent.pending, handlePending);
    builder.addCase(fetchItemsToRent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToRent = action.payload;
    });
    builder.addCase(fetchItemsToRent.rejected, handleRejected);

    // Fetch items to rent house
    builder.addCase(fetchItemsToRentHouse.pending, handlePending);
    builder.addCase(fetchItemsToRentHouse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToRentHouse = action.payload;
    });
    builder.addCase(fetchItemsToRentHouse.rejected, handleRejected);

    // Fetch items to rent flat
    builder.addCase(fetchItemsToRentFlat.pending, handlePending);
    builder.addCase(fetchItemsToRentFlat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToRentFlat = action.payload;
    });
    builder.addCase(fetchItemsToRentFlat.rejected, handleRejected);

    // Fetch commercial items
    builder.addCase(fetchItemsCommercial.pending, handlePending);
    builder.addCase(fetchItemsCommercial.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsCommercial = action.payload;
    });
    builder.addCase(fetchItemsCommercial.rejected, handleRejected);

    // Fetch items to buy commercial
    builder.addCase(fetchItemsToBuyCommercial.pending, handlePending);
    builder.addCase(fetchItemsToBuyCommercial.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToBuyCommercial = action.payload;
    });
    builder.addCase(fetchItemsToBuyCommercial.rejected, handleRejected);

    // Fetch items to rent commercial
    builder.addCase(fetchItemsToRentCommercial.pending, handlePending);
    builder.addCase(fetchItemsToRentCommercial.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsToRentCommercial = action.payload;
    });
    builder.addCase(fetchItemsToRentCommercial.rejected, handleRejected);

    // Fetch favorite items
    builder.addCase(fetchItemsFavorite.pending, handlePending);
    builder.addCase(fetchItemsFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsFavorite = action.payload;
    });
    builder.addCase(fetchItemsFavorite.rejected, handleRejected);

    // Fetch item by ID
    builder.addCase(fetchItemById.pending, handlePending);
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    });
    builder.addCase(fetchItemById.rejected, handleRejected);

    // Create item
    builder.addCase(createItem.pending, handlePending);
    builder.addCase(createItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    });
    builder.addCase(createItem.rejected, handleRejected);

    // Update item
    builder.addCase(updateItem.pending, handlePending);
    builder.addCase(updateItem.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
    builder.addCase(updateItem.rejected, handleRejected);

    // Delete item
    builder.addCase(deleteItem.pending, handlePending);
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    });
    builder.addCase(deleteItem.rejected, handleRejected);
  },
});

export const { clearError } = itemsSlice.actions;

const itemsReducer = itemsSlice.reducer;

export default itemsReducer;
