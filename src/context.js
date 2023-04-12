import { useState, createContext } from "react";

export const Context = createContext();
export const dataProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    <Context.Provider value={{isOpen,setIsOpen}}>
        {children}
    </Context.Provider>
}