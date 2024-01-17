export const SET_LOADING = 'SET_LOADING';
export const SET_ITEMS = 'SET_ITEMS';
export const SET_COUNT = 'SET_COUNT';

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});

export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items,
});

export const setCount = (itemId, count) => ({
    type: SET_COUNT,
    payload: { itemId, count },
});
