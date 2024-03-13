
// creat a add to cart usign context Api and useReducer function 

// question. what does useReducer return => state and dispatch


// step 1  => settion up useReducer part initial state and reducer funtion

// step 2 create a StateProvider.jsx inside the context goto this file


// useReducer() hook setup  
// initialState and reducer function

// step 1
export const initialState = {
    // product come to inside the empty array 
    cart: [],
    fav: []
};

// step 2
function reducer(state, action) {

    // get the data once you click add to cart button 
    console.log('action', action)
    // addd some action here using swith case
    switch (action.type) {
        // add action here
        // action meaning => what descript what wants to do
        // action is describing ki kyaa krna hai
        case 'ADD_TO_FAV':
            // if (state.fav._id == state.fav._id) {
            //     alert("product is already present in the cart");
            //     return;
            // }
            // logic to add an item to the cart
            return {
                ...state, // copy the initial state
                // inside the cart copy the cart item , and  add a new object using action.payload
                fav: [...state.fav, action.payload]
            }

        case 'REMOVE_FROM_FAV':
            // logic to remove an item from the cart
            let newFav = [...state.fav]

            const index = state.fav.findIndex((item) => item._id == action.payload._id);

            console.log('index', index)

            if (index >= 0) {
                newFav.splice(index, 1);
            }

            return {
                ...state, fav: newFav
            }

        
        // add to cart reducer setup / remoce form cart 
        case 'ADD_TO_CART':
           
            // logic to add an item to the cart
            return {
                ...state, // copy the initial state
                // inside the cart copy the cart item , and  add a new object using action.payload
                cart: [...state.cart, action.payload]
            }

        case 'REMOVE_FROM_CART':
            // logic to remove an item from the cart
            let newCart = [...state.cart]

            const index2 = state.cart.findIndex((item) => item._id == action.payload._id);

            console.log('index', index2)

            if (index2 >= 0) {
                newCart.splice(index2, 1);
            }

            return {
                ...state, cart: newCart
            }

        default:
            return state;

    }
};

export default reducer;