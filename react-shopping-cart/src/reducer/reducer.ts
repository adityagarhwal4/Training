
const initialState:any = {
    cartData: []
}

const reducer = (state = initialState, action: { type: string, data: { id: number } }) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.data]
            }
        case "REMOVE_TO_CART":
            let i = state.cartData.length - 1;
            while (i >= 0) {
                if (state.cartData[i].id === action.data.id) {
                    state.cartData.splice(i, 1);
                    break;
                }
                i--;
            }
            return {
                ...state,
                cartData: [...state.cartData],
            };
        default:
            return state;
    }
}

export default reducer;