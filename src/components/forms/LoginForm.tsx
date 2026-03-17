import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators/login.validator.ts";
import type {IUserLoginData} from "../../models/IUserData.ts";
import {login} from "../../services/api.service.ts";
import type {FC} from "react";

type FormProps = {
    onLogin: () => void;
};

export const LoginForm: FC<FormProps> = ({onLogin}) => {

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid, isSubmitting},
    } = useForm<IUserLoginData>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    });

    const loginHandler = async (formValues: IUserLoginData) => {
        try {
            await login(formValues);
            console.log("Login successful");
            reset();
            onLogin();
        } catch (error) {
            console.log("Login error is", error);
        }
    };

    return (
        <div className="w-100 mt-10 mx-auto">
            <form className="px-6 py-8 flex flex-col gap-6 bg-slate-300 rounded-md shadow-md" onSubmit={handleSubmit(loginHandler)}>
                <label className="block">
                    Email:
                    <input className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500" type="email" {...register("email")} />
                    {errors.email && (<p className="error">{errors.email.message}</p>)}
                </label>
                <label className="block">
                    Password:
                    <input className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500" type="password" {...register("password")} />
                    {errors.password && (<p className="error">{errors.password.message}</p>)}
                </label>
                <button className="h-8 mt-2 flex items-center justify-center text-[18px] text-white bg-slate-800 border-2 border-slate-800 rounded-sm shadow-md transition-all duration-200 enabled:hover:scale-[1.02] disabled:text-gray-300 disabled:bg-gray-400 disabled:border-gray-400" disabled={!isValid || isSubmitting}>
                    {
                        isSubmitting ? "Loading..." : "Confirm"
                    }
                </button>
            </form>
        </div>
    );
};
