import {NavLink} from "react-router-dom";

export const MainMenu = () => {
    const menuItemClass = ({isActive}: {isActive: boolean}) =>
        `p-1 text-xl ${isActive ? "text-yellow-200 border-b border-b-yellow-200" : "text-white"}`;

    return (
        <div className="w-screen fixed bg-slate-800 shadow-lg z-10">
            <ul className="max-w-300 mx-auto p-4 flex justify-evenly items-center gap-6">
                <li><NavLink to={"/"} className={menuItemClass}>Home</NavLink></li>
                <li><NavLink to={"/profile"} className={menuItemClass}>Profile</NavLink></li>
                <li><NavLink to={"/products"} className={menuItemClass}>Products</NavLink></li>
            </ul>
        </div>
    );
};