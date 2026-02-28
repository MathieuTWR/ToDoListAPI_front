# ToDoList Front avec React + Vite (web) et Tauri (Desktop)

Frontend pédagogique construit avec React et Vite, consommant l'API ToDoList Spring Boot.

Permet de manipuler et de mettre en pratique du dev dans un environnement JavaScript moderne.

## Technos

- React 19
- Vite 6
- JavaScript ES2024 (fetch natif, axios est possible aussi)
- npm (gestionnaire de dépendances)

## Prérequis

- [Node.js 20+](https://nodejs.org) installé
- [L'API Spring Boot](https://github.com/MathieuTWR/ToDoListAPI) lancée sur `http://localhost:8080`

## Documentations

| Outil | Documentation |
|-------|---------------|
| [React](https://react.dev) | Composants, hooks (`useState`, `useEffect`), JSX |
| [Vite](https://vite.dev) | Serveur de dev, HMR, `.env`, build production |
| [ES Modules natifs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/import) | `import/export`, `import.meta.env` |
| [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API) | Requêtes HTTP natives |
| [npm](https://docs.npmjs.com) | `npm install`, `npm run dev`, `package.json` |


## Lancer le projet

### 1. Cloner le repo

`git clone https://github.com/MathieuTWR/ToDoListFront.git`

`cd ToDoListFront`

### 2. Installer les dépendances

`npm install`

### 3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine (déjà dans le `.gitignore`) :

```
VITE_API_URL=http://localhost:8080/api
```

> Sans ce fichier, les appels API échoueront silencieusement.
> Toutes les variables Vite doivent commencer par `VITE_` pour être exposées au navigateur.

### 4. Lancer le serveur de développement

- Front web disponible ici : http://localhost:5173 après avoir fait : `npm run dev`
- L'API Java Spring Boot doit tourner sur : http://localhost:8080
> Vite recharge automatiquement le navigateur à chaque modification de fichier.

### 5. Application Desktop (Tauri)

Pour générer l'application au format desktop, les outils suivants sont obligatoires :

- [Rust](https://rustup.rs/)
- **Visual Studio Build Tools** avec le workload _"Développement Desktop en C++"_
- Executer les commandes suivantes pour installer tauri via `npm` : 
- `npm install --save-dev @tauri-apps/cli`
- `npm install @tauri-apps/api`
- Suivi de la commande : `npx tauri init` pour l'initialisation de tauri dans le projet
- Ajouter la clé suivante dans la clé `scripts` deja presente dans le fichier `package.json` :
```json
    "tauri": "tauri"
```
- executer `npm install` pour charger les dépendances tauri dans le projet
- Mode développement desktop `npm run tauri dev`
- Build .msi `npm run tauri build`
  > Attention l'application .msi effectue ses requêtes depuis `http://tauri.localhost`
  > 
  > L'origine de l'app doit être autorisée coté API Spring Boot en plus de `http://localhost:5173`

## Structure du projet
```
src/
├── components/              # les composant reutilisable
│   ├── TacheList.jsx           # tableau des taches
├── pages/                   # les vues
│   ├── index.jsx              # liste des taches
│   ├── form.jsx               # creation et modification
│   └── show.jsx               # fiche d'une tâche
├── services/
│   └── api.js          # consomme l'API java spring boot (communication HTTP)
├── App.jsx             # deviens le routeur
├── index.css           
└── main.jsx            # point d'entree de React
```

## Commandes utiles

### Lancer le serveur de développement
`npm run dev`

### Compiler pour la production (génère dist/)
`npm run build`

### Prévisualiser le build de production
`npm run preview`

### Vérifier les erreurs de lint
`npm run lint`

## Problèmes fréquents

### `VITE_API_URL` non défini
_TypeError: Failed to fetch_

1. Créer le fichier `.env` à la racine
2. Ajouter `VITE_API_URL=http://localhost:8080/api`
3. Relancer `npm run dev` (Vite ne recharge pas les `.env` à chaud)

### L'API ne répond pas
_NetworkError / ERR_CONNECTION_REFUSED_

Vérifier que l'API Spring Boot tourne bien :
`curl http://localhost:8080/api/taches`

Vérifier que Docker est lancé et les conteneurs actifs :
`docker compose ps`

### Erreur CORS
_Access-Control-Allow-Origin missing_

Vérifier que `CorsConfig.java` est bien présent côté API et autorise `http://localhost:5173` :
```java
registry.addMapping("/api/**")
        .allowedOrigins("http://localhost:5173")
```

### `node_modules` absent ou corrompu
_Cannot find module_

Supprimer et réinstaller les dépendances :
```
rm -rf node_modules
npm install
```
