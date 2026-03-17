import {SignupForm} from "../components/forms/SignupForm.tsx";
import {useNavigate} from "react-router-dom";

export const SignupPage = () => {
    const navigate = useNavigate();

    const navigateToLoginPage = () => {
        navigate("/login", {
            replace: true,
            state: {
                message: "Registration successful!"
            }
        });
    };

    return (
        <>
            <SignupForm onSignup={navigateToLoginPage} />
        </>
    );
};
