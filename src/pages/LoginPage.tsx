import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    useEffect(() => {
        login({
           username: "emilys",
           password: "emilyspass",
           expiresInMins: 1,
        });
    }, []);

    return (
        <>
            <h1 className="my-8 text-[30px] text-center text-pink-800">You have successfully logged in</h1>
        </>
    );
};
