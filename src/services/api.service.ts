import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

// тип даних, які відправляються під час логіну

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

// створення екземпляру axios з базовими налаштуваннями

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth', // базовий url api
    headers: {}
});

// додавання перехоплювача - функції, яка буде виконуватись перед запитом HTTP

axiosInstance.interceptors.request.use((requestObject) => {
    // перевірка чи відповідає метод запиту GET
    if(requestObject.method?.toUpperCase() === "GET") {
        // додавання до заголовку "Authorization" токену accessToken, який отримується зі сховища LocalStorage за допомогою імпортованої з файлу helpers.ts функції retrieveLocalStorage
        requestObject.headers.Authorization = `Bearer ${retrieveLocalStorage<IUserWithTokens>("user").accessToken}`;
    }
    // повернення модифікованого об'єкту запиту
    return requestObject;
})

// функція для логіну користувача

export const login = async ({username, password, expiresInMins}: LoginData): Promise<void> => {
    // відправка post запиту на адресу /login
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/login", {username, password, expiresInMins});

    // виведення отриманих даних користувача та його токенів у консоль
    console.log(userWithTokens);

    // збереження даних користувача та його токенів у сховище LocalStorage
    localStorage.setItem("user", JSON.stringify(userWithTokens));
};

// функція оновлення accessToken за допомогою refreshToken

export const refresh = async () => {
    // отримання користувача з токенами зі сховища LocalStorage за допомогою імпортованої функції retrieveLocalStorage
    const userWithTokens = retrieveLocalStorage<IUserWithTokens>("user");

    // відправка post запиту на адресу /refresh, у якому передаються refreshToken та час тривалості дії accessToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("/refresh", {refreshToken: userWithTokens.refreshToken, expiresInMins: 1});

    // виведення нових отриманих токенів у консоль
    console.log(accessToken, refreshToken);

    // збереження нових accessToken та refreshToken у об'єкті користувача
    userWithTokens.accessToken = accessToken;
    userWithTokens.refreshToken = refreshToken;

    // збереження оновлених даних користувача у LocalStorage
    localStorage.setItem("user", JSON.stringify(userWithTokens));
}

// універсальна функція завантаження ресурсів, які доступні авторизованим користувачам

export const loadAuthResource = async <T>(url: string): Promise<T> => {
    // виконання GET запиту на переданий url
    const {data} = await axiosInstance.get(url, {});

    // повернення об'єкту з даними
    return data;
}
