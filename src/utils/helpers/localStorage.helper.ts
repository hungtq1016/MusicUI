const localStorage: Storage = window.localStorage;

export const createValues = (values: Array<{ key: string, value: string }>): void => {
    values.forEach(value => createValue(value.key, value.value));
}

export const createValue = (key: string, value: string): void => {
    localStorage.setItem(key, value);
}

export const readValue = (key: string): string | null => {
    return localStorage.getItem(key);
}

export const deleteValue = (key: string): void => {
    localStorage.removeItem(key);
}

export const clearValues = (): void => {
    localStorage.clear();
}
