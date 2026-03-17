import {useState} from "react";
import {AuthMenu} from "../components/menu/AuthMenu.tsx";

export const HomePage = () => {
    const [loggedIn] = useState<boolean>(!!localStorage.getItem("token"));

    return (
        <>
            {
                loggedIn ?
                    <div className="mb-8 text-center text-[26px] text-slate-800">Dear <span className="font-semibold text-amber-600">user</span>, welcome to homepage!</div>
                :
                    <div>
                        <div className="mb-8 text-center text-[26px] text-slate-800">Dear <span className="font-semibold text-amber-600">guest</span>, welcome to
                            homepage!
                        </div>
                        <AuthMenu/>
                    </div>
            }

        </>
    );
};
