import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator.ts";

export const LoginForm = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
    } = useForm<>({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    return (
        <>
            <form className="w-full px-6 py-8 flex flex-col gap-6 bg-slate-300 rounded-md shadow-md" onSubmit={handleSubmit()}>
                <label className="block">
                    Email:
                    <input className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500" type="text" {...register("email")} />
                </label>
                <label className="block">
                    Password:
                    <input className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500" type="password" {...register("password")} />
                </label>
                <button className="h-8 mt-2 flex items-center justify-center text-[18px] text-white bg-slate-800 border-2 border-slate-800 rounded-sm shadow-md transition-all duration-200 hover:scale-[1.02]">Confirm</button>
            </form>
        </>
    );
};
