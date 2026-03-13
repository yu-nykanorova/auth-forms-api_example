import {NavLink} from "react-router-dom";

export const AuthMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `block px-10 py-2 text-xl ${isActive ? "font-semibold" : ""}`;

    return (
        <ul className="max-w-300 mx-auto flex justify-evenly items-center gap-6">
            <li className="text-white bg-slate-800 rounded-sm"><NavLink to={"/login"} className={menuItemClass}>Login</NavLink></li>
            <li className="inset-shadow-sm/50"><NavLink to={"/signup"} className={menuItemClass}>Sign Up</NavLink></li>
        </ul>
    );
};