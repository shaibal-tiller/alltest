import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

const AdminLogin = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();


    const handleLogin = () => {
        login({ email: 'magfurrume.tiller@gmail.com', password: '123456' }).then(() => {
            navigate(state?.path || "auth/dashboard");
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
};

export default AdminLogin