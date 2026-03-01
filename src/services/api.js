const API_URL = import.meta.env.VITE_API_URL;

const apiFetch = (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });
};

export const tacheService = {

    getAll: () =>
        apiFetch("/taches").then(r => r.json()),

    getById: (id) =>
        apiFetch(`/taches/${id}`).then(r => r.json()),

    create: (tache) =>
        apiFetch("/taches", {
            method: "POST",
            body: JSON.stringify(tache)
        }).then(r => r.json()),

    update: (id, tache) =>
        apiFetch(`/taches/${id}`, {
            method: "PUT",
            body: JSON.stringify(tache)
        }).then(r => r.json()),

    delete: (id) =>
        apiFetch(`/taches/${id}`, { method: "DELETE" })
};

export default apiFetch;