export const selectAllItems = state => state.items.items;

export const selectItemsToBuy = state => state.items.itemsToBuy;
export const selectItemsToBuyHouses = state => state.items.itemsToBuyHouse;
export const selectItemsToBuyFlats = state => state.items.itemsToBuyFlat;

export const selectItemsToRent = state => state.items.itemsToRent;
export const selectItemsToRentHouses = state => state.items.itemsToRentHouse;
export const selectItemsToRentFlats = state => state.items.itemsToRentFlat;

export const selectItemsCommercial = state => state.items.itemsCommercial;
export const selectItemsCommercialToBuy = state => state.items.itemsToBuyCommercial;
export const selectItemsCommercialToRent = state => state.items.itemsToRentCommercial;

export const selectItemsFavorite = state => state.items.itemsFavorite;

export const selectItem = state => state.items.item;

export const selectIsLoading = state => state.items.isLoading;

export const selectIsError = state => state.items.isError;
