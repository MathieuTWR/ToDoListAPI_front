// logique qui permet de recuperer les taches et de les afficher
function TacheList({ taches, onEdit, onDelete }) {
    return (
        <ul>
            {taches.map(tache => (
                <li key={tache.id}>
                    <span><strong>{tache.titre}</strong> — {tache.statut}</span>
                    <button onClick={() => onEdit(tache)}>Modifier</button>
                    <button onClick={() => onDelete(tache.id)}>Supprimer</button>
                </li>
            ))}
        </ul>
    );
}

export default TacheList;