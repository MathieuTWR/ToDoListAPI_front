import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import apiFetch from "../../services/api";

export default function Register() {
    const [form, setForm] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await apiFetch("/auth/register", {
                method: "POST",
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            navigate("/login");
        } catch {
            alert("Erreur lors de l'inscription");
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => setForm({...form, username: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setForm({...form, password: e.target.value})}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success">S'inscrire</button>
                    <p className="p-2">Déjà un compte ? <Link to="/login">S'inscrire</Link></p>
                </div>
            </form>
        </div>
    );
}
