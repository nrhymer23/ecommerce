import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast'; // popup notifications 

const Context = createContext();

export const StateContext = ({children}) => {
 const [showCart, setShowCart] = useState (false);
 const [cartItems, setShowItems] = useState();
 const [totalPrice, setTotalPrice] = useState();
 const [totalQuantities, setTotalQuantities] = useState();
 const [qty, setQty] = useState(1);

 return(
    <Context.Provider
    value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty
    }}
    ></Context.Provider>
 )
}

