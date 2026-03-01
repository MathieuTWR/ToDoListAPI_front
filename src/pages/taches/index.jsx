import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {tacheService} from "../../services/api.js";
import TacheList from "../../components/TacheList.jsx";

function Index() {
    const [taches, setTaches] = useState([]);
    const navigate = useNavigate();

    const chargerTaches = () => {
        tacheService.getAll()
            .then(data => {
                if (Array.isArray(data)) setTaches(data);
            })
            .catch(err => console.error("Erreur chargement tâches", err));
    };

    useEffect(() => {
        chargerTaches();
    }, []);

    const handleUpdate = (id) => {
        navigate(`/taches/${id}/edit`);
    };
    const handleDelete = (id) => {
        tacheService.delete(id).then(chargerTaches);
    };

    return (
        <div className="container py-4">
            <h1 className="text-center">ToDo List</h1>
            <div className="text-center m-4">
                <Link to="/taches/create" className="btn btn-primary">
                    Nouvelle tâche
                </Link>
            </div>
            <TacheList taches={taches} onDelete={handleDelete} onEdit={handleUpdate}/>
        </div>
    );
}

export default Index;