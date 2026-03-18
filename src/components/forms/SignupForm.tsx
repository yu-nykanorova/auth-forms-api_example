import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {signupValidator} from "../../validators/signup.validator.ts";
import {signup} from "../../services/api.service.ts";
import {useNavigate} from "react-router-dom";
import type {IUserSignupData} from "../../models/IAuth.ts";

export const SignupForm = () => {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid, isSubmitting},
    } = useForm<IUserSignupData>({
        mode: "all",
        resolver: joiResolver(signupValidator)
    });

    const navigateToLoginPage = () => {
        navigate("/login", {
            replace: true,
            state: {
                message: "Registration successful! Now you can log in"
            }
        });
    };

     const signupHandler = async (formValues: IUserSignupData) => {
        try {
            await signup(formValues);
            console.log("User registered successfully");
            reset();
            navigateToLoginPage();
        } catch (error) {
            console.log("Signup error is", error);
        }
     };

    return (
        <div className="w-100 mt-10 mx-auto">
            <h2 className="mb-6 text-center text-[22px] text-slate-800">Registration form</h2>
            <form className="px-6 py-8 flex flex-col gap-6 bg-slate-300 rounded-md shadow-md" onSubmit={handleSubmit(signupHandler)}>
                <label className="block">
                    Username:
                    <input
                        className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500"
                        type="text"
                        {...register("name")}
                        placeholder="Your username"
                    />
                    {errors.name && (<p className="error">{errors.name.message}</p>)}
                </label>
                <label className="block">
                    Email:
                    <input
                        className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500"
                        type="email"
                        {...register("email")}
                        placeholder="your_email@mail.com"
                    />
                    {errors.email && (<p className="error">{errors.email.message}</p>)}
                </label>
                <label className="block">
                    Password:
                    <input
                        className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500"
                        type="password"
                        {...register("password")}
                        placeholder="Your password"
                    />
                    {errors.password && (<p className="error">{errors.password.message}</p>)}
                </label>
                <label className="block">
                    Avatar:
                    <input
                        className="w-full block mt-2 p-2 bg-white rounded-sm focus:outline-2 focus:outline-slate-500"
                        type="text"
                        {...register("avatar")}
                        placeholder="https://example.com/avatar.jpg"
                    />
                    {errors.avatar && <p className="error">{errors.avatar.message}</p>}
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