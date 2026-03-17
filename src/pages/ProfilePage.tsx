import {useEffect} from "react";
import {loadProfile} from "../services/api.service.ts";

export const ProfilePage = () => {
    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <>Profile</>
    );
};
