import { createContext, useContext, useState } from "react";


const AlertContext = createContext();

export function Alert({ children }) {
    const [alert, setAlert] = useState({ type: 'Alert', message: 'Questo è un alert!' });

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    )

}

export function useAlert() {
    const context = useContext(AlertContext);
    return context;
}
