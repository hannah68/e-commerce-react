import React from 'react'
export const StoreContext = React.createContext();

export class StoreActions {
    static PRODUCTS = 'PRODUCTS'
    static RANDOM_PRODUCTS = 'RANDOM_PRODUCTS'
}


export const initialState = {
    shop : {
        products: [],
        randomProducts: []
    }
}

export const shopReducer = (state, action) => {
    switch(action.type) {
        case StoreActions.PRODUCTS:
        return {
            ...state, 
            shop : {products : action.payload}
        };

        case StoreActions.RANDOM_PRODUCTS:
            console.log({
                ...state, shop : {...state.shop,randomProducts : action.payload}
            });
        return {
            ...state, 
            shop : {...state.shop, randomProducts : action.payload}
        };
        

        
        default:
            return state;
    }
}