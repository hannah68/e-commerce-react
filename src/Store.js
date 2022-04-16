import React from "react";
export const StoreContext = React.createContext();

export class StoreActions {
	static PRODUCTS = "PRODUCTS";
	static RANDOM_PRODUCTS = "RANDOM_PRODUCTS";

    static UPDATE_SHOPPINGCART = "UPDATE_SHOPPINGCART";
}

export const initialState = {
	products: [],
	randomProducts: [],
    shoppingCart: []
	
};

export const shopReducer = (state, action) => {
	switch (action.type) {
		case StoreActions.PRODUCTS:
			return {
				...state,
				shop: { products: action.payload },
			};

		case StoreActions.RANDOM_PRODUCTS:
			console.log({
				...state,
				shop: { ...state.shop, randomProducts: action.payload },
			});
			return {
				...state,
				shop: { ...state.shop, randomProducts: action.payload },
			};

		default:
			return state;
	}
};

const ShoppingcartReducer = (state, action) => {
    switch(action.type){
        case StoreActions.UPDATE_SHOPPINGCART:
            return {
                ...state,
                shoppingCart: action.payload
            }

        default: 
            return state
    }
   
}

const combineReducers = (reducers) => {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}
		return newState;
	};
};

export const rootReducer = combineReducers({
	Shoppingcart: ShoppingcartReducer
});
