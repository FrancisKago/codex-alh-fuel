Gestion de Carburant ALH


Ce projet met en œuvre une application de gestion de carburant pour Groupe ALH, comme décrit dans le document de spécification (PRD). Il utilise Next.js pour le frontend et Supabase pour l’authentification et le stockage des données. L’application prend en charge l’utilisation hors ligne grâce à un service worker et une mise en cache locale.

Fonctionnalités
Authentification par email/mot de passe avec Supabase

Contrôle d’accès basé sur les rôles (chauffeur, pompiste, superviseur, DG, etc.)

Mise en cache hors ligne des transactions de carburant et synchronisation automatique lors du retour de la connexion

Endpoint API de base pour la réception des transactions

Démarrage
Installer Node.js 20+

Copier frontend/.env.example vers frontend/.env et y renseigner vos identifiants Supabase

Installer les dépendances (connexion internet requise) :

sh
Copy
Edit
cd frontend
npm install
Lancer le serveur de développement :

sh
Copy
Edit
npm run dev
Construire pour la production :

sh
Copy
Edit
npm run build
Base de Données
Les fichiers de schéma SQL sont situés dans le répertoire database/. Appliquez-les à votre projet Supabase pour créer les tables nécessaires.

Tests
Exécutez npm test dans le répertoire frontend pour lancer les tests unitaires. Le linting peut être effectué avec npm run lint.

Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Support Hors Ligne
Un service worker de base est enregistré dans _app.tsx pour mettre en cache les ressources et les réponses des API. Les transactions en attente peuvent être stockées dans IndexedDB et synchronisées une fois la connexion rétablie.

Contribution
Forkez le dépôt et créez une branche de fonctionnalité.

Assurez-vous que npm test et npm run lint passent avant d’ouvrir une pull request.

Décrivez clairement vos modifications dans la description de la PR.
