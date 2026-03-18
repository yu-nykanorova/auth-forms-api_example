export const retrieveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || "";

    if (!object) {
        return {} as T;
    }

    const parse = JSON.parse(object);

    return parse as T;
};

export const putToLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
}