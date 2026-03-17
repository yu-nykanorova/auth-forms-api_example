import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {SignupPage} from "../pages/SignupPage.tsx";
import {ProfilePage} from "../pages/ProfilePage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "signup",
                element: <SignupPage/>
            },
            {
                path: "profile",
                element: <ProfilePage/>,
            },
            {
                path: "products",
                element: <ProductsPage/>
            }
        ]
    }
]);