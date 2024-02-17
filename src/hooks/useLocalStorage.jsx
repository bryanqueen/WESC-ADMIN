import { useState } from "react";

export const useLocalstorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);

            if (value) {
                return JSON.parse(value)
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    });

    const setValue = (newValue) => {
        try {
            window.localStorage.getItem(keyName, JSON.stringify(newValue));
        } catch (error) {
            console.log(error)
        }
        setStoredValue(newValue)
    };
    return [storedValue, setValue]
}