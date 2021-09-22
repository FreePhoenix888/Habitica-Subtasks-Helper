import {useState} from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
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
