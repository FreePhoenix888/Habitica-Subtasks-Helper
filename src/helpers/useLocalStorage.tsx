import {Dispatch, SetStateAction, useState} from 'react';

type IUseLocalStorage = <T>(key: string, iniitialValue: T) => readonly [[T, Dispatch<SetStateAction<T>>][0], ((value: (((value: T) => T) | T)) => void)]

export const useLocalStorage: IUseLocalStorage = <T extends unknown>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = window.localStorage.getItem(key);

        return item ? (JSON.parse(item) as T) : initialValue;
    });

    function setValue(value: T | ((value: T) => T)) {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }

    return [storedValue, setValue] as const;
}
