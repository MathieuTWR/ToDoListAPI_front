import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import Logout from "./pages/auth/Logout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Index from "./pages/taches/index.jsx";
import Show from "./pages/taches/show.jsx";
import TacheFormPage from "./pages/taches/form.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route element={<PrivateRoute><Layout/></PrivateRoute>}>
                    <Route
                        path="/"
                        element={
                            <Index/>
                        }
                    />
                    <Route
                        path="/taches"
                        element={
                            <Index/>
                        }
                    />
                    <Route
                        path="/taches/create"
                        element={
                            <TacheFormPage/>
                        }
                    />
                    <Route
                        path="/taches/:id"
                        element={
                            <Show/>
                        }
                    />
                    <Route
                        path="/taches/:id/edit"
                        element={
                            <TacheFormPage/>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
