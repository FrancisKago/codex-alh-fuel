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
