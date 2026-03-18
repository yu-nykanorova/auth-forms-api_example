import {useEffect, useState} from "react";
import {loadProfile} from "../services/api.service.ts";
import type {IUser} from "../models/IUser.ts";

export const ProfilePage = () => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const userData = await loadProfile();
            setUser(userData);
        }
        fetchData();
    }, []);

    return (
        <>
            {user ? (
                <div>
                    <h1 className="mb-6 text-center text-[22px] text-slate-800 font-semibold">Personal info of User <span className="text-amber-600">ID: {user.id}</span> </h1>
                    <div className="flex justify-center gap-6">
                        <div className="w-50 h-50">
                            <img className="w-full h-full object-cover" src={user.avatar} alt={`${user.name} photo`}/>
                        </div>
                        <div>
                            <h2 className="text-[26px] text-amber-600 font-semibold">{user.name}</h2>
                            <p className="text-[18px]">Role: {user.role}</p>
                            <p className="text-[18px]">Email: {user.email}</p>
                            <p className="text-[18px]">Password: {user.password}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="mb-6 text-center text-red-600 text-[24px]">You must be logged in to see personal info</p>
            )}
        </>
    );
};
