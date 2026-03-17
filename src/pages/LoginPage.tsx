import {LoginForm} from "../components/forms/LoginForm.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(!!localStorage.getItem("token"));

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    };

    return (
        <>
            {
                loggedIn ?
                    <div className="max-w-300">
                        <p className="mb-8 text-center text-[26px] text-amber-600">Authorization successful!</p>
                        <div className="flex flex-col justify-center items-center gap-6 text-center text-[20px]">
                            <Link to={"/profile"} className="decoration-solid decoration-blue-600 transition-all duration-100 hover:text-blue-600 hover:underline">
                                Show profile
                            </Link>
                            <button className="h-8 w-100 mx-auto mt-2 self-stretch flex items-center justify-center text-[18px] text-white bg-slate-800 border-2 border-slate-800 rounded-sm shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-amber-600 hover:border-amber-600" onClick={logoutHandler}>
                                Logout
                            </button>
                        </div>
                    </div>
                    :
                    <LoginForm onLogin={() => setLoggedIn(true)}/>

            }
        </>
    );
};
