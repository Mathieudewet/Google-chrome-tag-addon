# Gestionnaire de Tags pour Liens

Ce projet a pour but de développer un **gestionnaire de tags spécialisé pour les liens (URLs)**.
Il permettra d’organiser, classer et retrouver facilement ses liens grâce à des mots-clés.

## Objectifs

- Sauvegarder des liens avec leurs titres et descriptions.
- Associer un ou plusieurs tags à chaque lien.
- Rechercher des liens par tag ou combinaison de tags.
- Fournir une interface simple pour manipuler les données.

## Squelette d'extension Chrome (Manifest V3)

Le dépôt contient désormais un premier **squelette d'extension Google Chrome** basé sur la dernière spécification Manifest V3.
Cette extension utilise `chrome.storage.sync` pour stocker les liens et leurs tags et propose une popup
pour ajouter et lister des liens.

### Fichiers principaux

- `manifest.json` : déclaration de l'extension.
- `popup.html`, `popup.js`, `popup.css` : interface utilisateur minimale.
- `background.js` : service worker initial.
- Aucune icône n'est fournie afin d'éviter les fichiers binaires.

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
