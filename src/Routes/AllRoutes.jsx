import { Routes, Route } from "react-router-dom";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import PrivateRoute from "./PrivateRoute";
import DoubtHistory from "../Components/DoubtHistory"
import CreateDoubt from '../Components/CreateDoubt'


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/history" element={<DoubtHistory />} />
            <Route path="/create" element={<CreateDoubt />} />
        </Routes>
    );
};
export { MainRoutes };

