const API_URL = import.meta.env.VITE_API_URL;

export const tacheService = {

    getAll: () =>
        fetch(`${API_URL}/taches`).then(r => r.json()),

    getById: (id) =>
        fetch(`${API_URL}/taches/${id}`).then(r => r.json()),

    create: (tache) =>
        fetch(`${API_URL}/taches`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tache)
        }).then(r => r.json()),

    update: (id, tache) =>
        fetch(`${API_URL}/taches/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tache)
        }).then(r => r.json()),

    delete: (id) =>
        fetch(`${API_URL}/taches/${id}`, { method: "DELETE" })
};
