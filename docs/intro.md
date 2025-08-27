# Gestionnaire de tags pour Google Chrome — message introductif

Nous allons concevoir une extension Chrome qui facilite l’organisation de liens grâce à des **tags** (mots-clés). L’objectif est de permettre à l’utilisateur de sauvegarder et classer des pages web pour les retrouver rapidement plus tard.

## Principales fonctionnalités prévues
1. **Ajout de lien**
   - Un bouton dans la barre d’outils ouvre une fenêtre (popup) pour renseigner l’URL, le titre éventuel et les tags associés.
   - Les données sont stockées via `chrome.storage.sync` afin d’être disponibles sur toutes les sessions Chrome de l’utilisateur.

2. **Gestion des tags**
   - Possibilité de créer, modifier ou supprimer des tags à partir de l’interface.
   - Chaque tag est lié à un ensemble de liens.

3. **Recherche et filtrage**
   - Dans la popup, un champ de recherche permet de filtrer les liens par tag.
   - L’utilisateur peut combiner plusieurs tags pour affiner la sélection.

## Structure de l’extension
- `manifest.json` : décrit l’extension (permissions, scripts, etc.).
- `popup.html` / `popup.js` : interface pour l’ajout et la consultation des liens.
- Éventuels scripts de **background** ou **content** si certaines fonctions nécessitent des interactions supplémentaires (par exemple, récupérer automatiquement l’URL de l’onglet courant).

## Étapes clés à venir
1. Définition de la structure des données (comment stocker URL, titre, tags).
2. Mise en place du `manifest.json` avec Manifest V3.
3. Création de l’interface utilisateur de base (HTML/CSS/JS).
4. Gestion du stockage (lecture et écriture via `chrome.storage`).
5. Ajout de la recherche et des filtres par tags.
6. Tests et amélioration de l’UX (ergonomie, performance, etc.).
