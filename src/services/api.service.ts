import axios from "axios";
import {putToLocalStorage, retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
import type {IUser} from "../models/IUser.ts";
import type {IUserLoginData, IUserSignupData} from "../models/IAuth.ts";
import type {IProduct} from "../models/IProduct.ts";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const axiosPublic = axios.create({
    baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
});

axiosPrivate.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        const storedTokens = retrieveLocalStorage<ITokenPair>("token") || "";

        if (storedTokens) {
            const accessToken = storedTokens.access_token;
            requestObject.headers.Authorization = `Bearer ${accessToken}`;
        }
    }
    return requestObject;
})

export const login = async (user: IUserLoginData): Promise<ITokenPair> => {
    const {data} = await axiosPublic.post("/auth/login", user);
    console.log(data);
    putToLocalStorage<ITokenPair>("token", data);
    return data;
};

export const signup = async (user: IUserSignupData): Promise<void> => {
    const {data} = await axiosPublic.post("/users", user);
    console.log(data);
};

export const loadProfile = async (): Promise<IUser> => {
    const {data} = await axiosPrivate.get("/auth/profile", {});
    putToLocalStorage<IUser>("user", data)
    return data;
}

export const refresh = async () => {
    const tokens = retrieveLocalStorage<ITokenPair>("token");
    const {data} = await axiosPublic.post<ITokenPair>("/auth/refresh-token", {refreshToken: tokens.refresh_token});
    console.log(data);
    putToLocalStorage("token", data);
}

export const loadProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosPublic.get("/products", {});
    return data;
}

