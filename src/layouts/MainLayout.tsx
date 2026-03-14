import {Outlet} from "react-router-dom";
import {MainMenu} from "../components/menu/MainMenu.tsx";

export const MainLayout = () => {
    return (
        <div className="bg-slate-50">
            <MainMenu/>
            <div className="min-h-screen max-w-300 mx-auto pt-20">
                <Outlet/>
            </div>
        </div>
    );
};
