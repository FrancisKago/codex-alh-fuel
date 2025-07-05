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
4. Lancer le serveur de développement :
   ```sh
   npm run dev
   ```
5. Construire pour la production :
   ```sh
   npm run build
   ```
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

