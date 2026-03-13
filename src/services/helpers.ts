// універсальна функція отримання даних зі сховища LocalStorage
export const retrieveLocalStorage = <T>(key: string) => {
    // отримання рядка з LocalStorage за ключем key або запис пустого рядку у змінну
    const object = localStorage.getItem(key) || "";

    // якщо дані відсутні, повертається пустий об'єкт, приведений до типу T
    if (!object) {
        return {} as T;
    }

    // перетворення рядка в об'єкт
    const parse = JSON.parse(object);

    // повернення об'єкту зі вказаним типом
    return parse as T;
};