# ALH Fuel Management

![CI](https://github.com/your-org/codex-alh-fuel/actions/workflows/ci.yml/badge.svg)

This project implements a fuel management application for **Groupe ALH** as
described in the PRD.  It uses **Next.js** for the frontend and **Supabase** for
authentication and data storage.  The application supports offline usage via a
service worker and local caching.

User roles are stored in the `users` table with additional permissions listed in
`user_permissions`. These roles determine access to features such as approving
requests or viewing analytics.

## Features

- Email/password authentication with Supabase
- Role-based access control (chauffeur, pompiste, superviseur, DG, etc.)
- Offline caching of fuel transactions and automatic sync when back online
- Basic API endpoint to receive transactions and requests
- Simple form to create fuel requests with offline support
- Basic API endpoint to receive transactions

## Getting Started

1. Install **Node.js 20+**.
2. Copy `frontend/.env.example` to `frontend/.env` and fill in your Supabase
   credentials.
3. Install dependencies (requires internet access):

# Gestion de Carburant ALH

![CI](https://github.com/your-org/codex-alh-fuel/actions/workflows/ci.yml/badge.svg)

Ce projet met en œuvre une application de gestion de carburant pour **Groupe ALH**, comme décrit dans le document de spécification (PRD).  
Il utilise **Next.js** pour le frontend et **Supabase** pour l’authentification et le stockage des données.  
L’application prend en charge l’utilisation hors ligne grâce à un service worker et une mise en cache locale.

## Fonctionnalités

- Authentification par email/mot de passe avec Supabase  
- Contrôle d’accès basé sur les rôles (chauffeur, pompiste, superviseur, DG, etc.)  
- Mise en cache hors ligne des transactions de carburant et synchronisation automatique lors du retour de la connexion  
- Endpoint API de base pour la réception des transactions

## Démarrage

1. Installer **Node.js 20+**
2. Copier `frontend/.env.example` vers `frontend/.env` et y renseigner vos identifiants Supabase
3. Installer les dépendances :
   ```sh
   cd frontend
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
4. Lancer le serveur de développement :
   ```sh
   npm run dev
   ```
5. Construire pour la production :

   ```sh
   npm run build
   ```

## Database

SQL schema files are located in the `database/` directory. Apply them in your Supabase project to create the required tables.

## Tests

Run `npm test` from the `frontend` directory to execute unit tests. Linting is
performed with `npm run lint`.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for
details.

## Offline Support

A service worker registered in `_app.tsx` caches static assets and API
responses. Use the helper functions in `src/lib/offline.ts` (`savePending` and
`flushPending`) to store user actions in local storage when offline and
synchronize them once connectivity is restored.

## Contributing

1. Fork the repository and create a feature branch.
2. Ensure `npm test` and `npm run lint` pass before opening a pull request.
3. Describe your changes clearly in the PR description.

## Base de Données

Les fichiers de schéma SQL sont situés dans le répertoire `database/`.  
Appliquez-les à votre projet Supabase pour créer les tables nécessaires.

## Tests

Exécutez les tests unitaires avec :

```sh
cd frontend
npm test
```

Effectuez une vérification de style avec :

```sh
npm run lint
```

## Licence

Ce projet est sous licence MIT.  
Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Support Hors Ligne

Un service worker de base est enregistré dans `_app.tsx` pour mettre en cache les ressources et les réponses des API.  
Les transactions en attente peuvent être stockées dans **IndexedDB** et synchronisées une fois la connexion rétablie.

## Contribution

1. Forkez le dépôt et créez une branche de fonctionnalité.
2. Assurez-vous que `npm test` et `npm run lint` passent avant d’ouvrir une pull request.
3. Décrivez clairement vos modifications dans la description de la PR.


