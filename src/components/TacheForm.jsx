import { useState, useEffect } from "react";

const FORM_VIDE = { titre: "", description: "", statut: "A_FAIRE", categorie: { id: 1 } };

// logique qui permet d'ajouter ou de modifier une tache
function TacheForm({ onSubmit, tacheEnEdition, onAnnuler }) {
    const [form, setForm] = useState(FORM_VIDE);

    // pre remplir le formulaire si on modifie une tache qui existe
    useEffect(() => {
        setForm(tacheEnEdition ?? FORM_VIDE);
    }, [tacheEnEdition]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm(FORM_VIDE);
    };

    // generation du HTML
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="titre"
                placeholder="Titre"
                value={form.titre}
                onChange={handleChange}
                required
            />
            <input
                name="description"
                placeholder="Description"
                value={form.description ?? ""}
                onChange={handleChange}
            />
            <select name="statut" value={form.statut} onChange={handleChange}>
                <option value="A_FAIRE">À faire</option>
                <option value="EN_COURS">En cours</option>
                <option value="TERMINE">Terminé</option>
            </select>
            <button type="submit">
                {tacheEnEdition ? "Modifier" : "Ajouter"}
            </button>
            {tacheEnEdition && (
                <button type="button" onClick={onAnnuler}>Annuler</button>
            )}
        </form>
    );
}

export default TacheForm;
