import axios from "axios";
import {retrieveLocalStorage} from "./helpers.ts";
import type {IUserCreated, IUserLoginData, IUserSignupData} from "../models/IUserData.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const axiosPublic = axios.create({
    baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
});

axiosPrivate.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        const tokensObject = localStorage.getItem("token") || "";

        if (tokensObject) {
            const accessToken = JSON.parse(tokensObject).access_token;
            requestObject.headers.Authorization = `Bearer ${accessToken}`;
        }
    }
    return requestObject;
})

export const login = async (user: IUserLoginData): Promise<ITokenPair> => {
    const {data} = await axiosPublic.post("/auth/login", user);
    console.log(data);
    localStorage.setItem("token", JSON.stringify(data));
    return data;
};

export const signup = async (user: IUserSignupData): Promise<IUserCreated> => {
    const {data} = await axiosPublic.post("/users", user);
    console.log(data);
    return data;
};

export const loadProfile = async (): Promise<IUserCreated> => {
    const {data} = await axiosPrivate.get("/auth/profile", {});
    console.log(data);
    return data;
}

// export const refresh = async () => {
//     const userWithTokens = retrieveLocalStorage<IUserWithTokens>("user");
//     const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("/refresh", {refreshToken: userWithTokens.refreshToken, expiresInMins: 1});
//     console.log(accessToken, refreshToken);
//     userWithTokens.accessToken = accessToken;
//     userWithTokens.refreshToken = refreshToken;
//     localStorage.setItem("user", JSON.stringify(userWithTokens));
// }


// export const loadProducts = async <T>(url: string): Promise<T> => {
//     const {data} = await axiosInstance.get(url, {});
//     return data;
// }
//
