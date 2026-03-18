import {AuthMenu} from "../components/menu/AuthMenu.tsx";
import {retrieveLocalStorage} from "../services/helpers.ts";
import type {IUser} from "../models/IUser.ts";

export const HomePage = () => {
    const loggedIn = !!localStorage.getItem("token");
    const user = retrieveLocalStorage<IUser>("user");
    const userName = user?.name || "guest";

    return (
        <>
            {
                loggedIn ?
                    <div className="mb-8 text-center text-[26px] text-slate-800">Dear <span className="font-semibold text-amber-600">{userName}</span>, welcome to homepage!</div>
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
