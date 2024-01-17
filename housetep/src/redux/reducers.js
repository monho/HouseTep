import { SET_LOADING, SET_ITEMS, SET_COUNT } from './actions';

const initialState = {
    loading: true,
    items: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        case SET_COUNT:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.itemId ? { ...item, count: action.payload.count } : item,
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
