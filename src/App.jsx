import { useState, useEffect } from "react";
import { tacheService } from "./services/api.js";

function App() {
    // declare la variables taches comme tableau vide
    const [taches, setTaches] = useState([]);

    // executer 1 seul fois au chargement du composant
    useEffect(() => {
        // on consomme l'API via le service
        // et on stock le retour dans le state (on met a jour taches [tableau vide à tableau avec les données de retour de notre API avec springboot])
        tacheService.getAll().then(setTaches);
    }, []);

    // on boucle sur taches pour afficher chaque tache dans une liste
    return (
        <div>
            <h1>ToDo List</h1>
            <ul>
                {taches.map(tache => (
                    <li key={tache.id}>{tache.titre}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;