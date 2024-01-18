import { SET_LOADING, SET_ITEMS, SET_COUNT } from './actions';
import { combineReducers } from 'redux';
import { UPDATE_TOTAL_VALUES } from './actions';

const initialState = {
    loading: true,
    items: [],
    totalQuantity: 0, // 초기값 설정
    totalPrice: 0,
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
        case UPDATE_TOTAL_VALUES:
            return {
                ...state,
                totalQuantity: action.payload.totalQuantity,
                totalPrice: action.payload.totalPrice,
            };
        default:
            return state;
    }
};

export default rootReducer;
