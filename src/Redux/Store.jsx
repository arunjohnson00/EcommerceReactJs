import { createStore} from "redux";



const initialValue={
    count:0,
    productDetails:[],
    cart:{
    cart:0,
    
    },
    ProductToCart:[],
    search:''


}

function appReducer(prevState=initialValue, action){

switch(action.type){

case 'increment': return {
    ...prevState,
    count:prevState.count+1
};

case 'decrement': return {
    ...prevState,
    count:prevState.count-1
};
case 'Search': return {
    ...prevState,
    search:action.searchData
};


case 'ProductData':return{
    ...prevState,
    productDetails:action.productData
};

case 'productCategory':return{

    ...prevState, productCategory:action.productCategory
};

case 'cart':return{

    ...prevState, cart:{cart:prevState.cart.cart+1,
        ProductToCart:prevState.ProductToCart.push(action.productCart)
    }
}


case 'remove':return{

    ...prevState, cart:{cart:prevState.cart.cart-1,
        ProductToCart:prevState.ProductToCart.filter(value => value[0]!==action.removeProduct)
    }
}


}



return prevState;
}
const store=createStore(appReducer);

export default store;