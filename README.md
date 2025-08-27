# Gestionnaire de Tags pour Liens

Ce projet a pour but de développer un **gestionnaire de tags spécialisé pour les liens (URLs)**.  
Il permettra d’organiser, classer et retrouver facilement ses liens grâce à des mots-clés.

## Objectifs

- Sauvegarder des liens avec leurs titres et descriptions.
- Associer un ou plusieurs tags à chaque lien.
- Rechercher des liens par tag ou combinaison de tags.
- Fournir une première interface simple (CLI).

## Fonctionnalités prévues

1. **Ajout de liens**
   - Sauvegarder une URL avec un ou plusieurs tags associés.
   - Optionnel : ajouter un titre et une description.
2. **Gestion des tags**
   - Créer, modifier et supprimer des tags.
   - Gérer la relation *lien ↔ tags*.
3. **Recherche**
   - Lister les liens associés à un tag donné.
   - Rechercher avec plusieurs tags (ET/OU).
4. **Persistance**
   - Stockage des données en local (JSON ou SQLite).
   - Prévoir la possibilité d’évoluer vers une base de données plus robuste.

## Plan du projet

- [ ] Définir la structure des données (lien, tags, relations).
- [ ] Implémenter un stockage simple (JSON).
- [ ] Créer une interface en ligne de commande (CLI).
- [ ] Ajouter des fonctions de recherche.
- [ ] Évoluer vers une API ou interface graphique.

## Contribution

Toute suggestion ou contribution est la bienvenue.  
Ce projet est avant tout un bac à sable pour apprendre et construire un outil utile.

## Licence

À définir (MIT, Apache 2.0, ou autre).
