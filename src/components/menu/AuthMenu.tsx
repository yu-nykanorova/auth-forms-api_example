import {NavLink} from "react-router-dom";

export const AuthMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `h-8 flex items-center justify-center text-[18px] shadow-md ${isActive ? "font-semibold" : ""}`;

    return (
        <>
            <h2 className="mb-8 text-center text-[22px] text-amber-600">Choose an action</h2>
            <ul className="w-60 mx-auto flex flex-col gap-6">
                <li className="text-white border-2 border-slate-800 bg-slate-800 rounded-sm transition-all duration-200 hover:scale-[1.02]"><NavLink to={"/login"} className={menuItemClass}>Login</NavLink></li>
                <li className="border-2 border-slate-800 bg-white rounded-sm transition-all duration-200 hover:scale-[1.02]"><NavLink to={"/signup"} className={menuItemClass}>Sign Up</NavLink></li>
            </ul>
        </>
    );
};