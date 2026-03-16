import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator.ts";
import type {IUserLoginData} from "../../models/IUserLoginData.ts";
import {login} from "../../services/api.service.ts";
import {useState} from "react";

export const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(!!localStorage.getItem("token"));

    const {
        handleSubmit,
        register,
        formState: {errors, isValid, isSubmitting},
    } = useForm<IUserLoginData>({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const loginHandler = async (formValues: IUserLoginData) => {
        try {
            await login(formValues);
            console.log("Login successful");
        } catch (error) {
            console.log("Login error is", error);
        }
    };

    return (
        <>
            {
                loggedIn
                    ?
                    <p>Success!</p>
                    :
                    <form className="w-full px-6 py-8 flex flex-col gap-6 bg-slate-300 rounded-md shadow-md" onSubmit={handleSubmit(loginHandler)}>
                        <label className="block">
                            Email:
                            <input className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500" type="email" {...register("email")} />
                            {errors.email && (<p>{errors.email.message}</p>)}
                        </label>
                        <label className="block">
                            Password:
                            <input className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500" type="password" {...register("password")} />
                            {errors.password && (<p>{errors.password.message}</p>)}
                        </label>
                        <button className="h-8 mt-2 flex items-center justify-center text-[18px] text-white bg-slate-800 border-2 border-slate-800 rounded-sm shadow-md transition-all duration-200 enabled:hover:scale-[1.02] disabled:text-gray-300 disabled:bg-gray-400 disabled:border-gray-400" disabled={!isValid || isSubmitting}>
                            {
                                isSubmitting ? "Loading..." : "Confirm"
                            }
                        </button>
                    </form>

            }
        </>
    );
};
