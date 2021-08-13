import * as ActionTypes from './ActionTypes';

export const Trades = (state = {
    isLoading: true,
    errMess: null,
    trades: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TRADES:
            return {...state, isLoading: false, errMess: null, trades: action.payload};
        case ActionTypes.TRADES_LOADING:
            return {...state, isLoading: true, errMess: null, trades: []};
        case ActionTypes.TRADES_FAILED:
            return {...state, isLoading: false, errMess:action.payload};
        default:
            return state;
    }
};