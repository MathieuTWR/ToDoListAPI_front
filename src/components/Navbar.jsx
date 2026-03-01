import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ToDoList Front</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Tâches
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/taches">Liste des tâches</Link></li>
                                <li><Link className="dropdown-item" to="/taches/create">Créer une tâche</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Catégories
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/categories">Liste des catégories</Link></li>
                                <li><Link className="dropdown-item" to="/categories/create">Créer une catégorie</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-outline-danger" onClick={handleLogout}>
                        Se déconnecter
                    </button>
                </div>
            </div>
        </nav>
    );
}
