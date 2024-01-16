// itemActions.js
export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading,
});

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
});
