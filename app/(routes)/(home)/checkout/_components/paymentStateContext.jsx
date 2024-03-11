'use client'
import { useState, createContext } from "react";

export const PaymentContext = createContext();

export const PaymentStateWrapper = ({ children }) => {
    const [deliverySpeed, setDeliverySpeed] = useState('');
 
    return (
        <PaymentContext.Provider value={{deliverySpeed, setDeliverySpeed}}>
            {children}
        </PaymentContext.Provider>
    )
}
