# Objectif de l'exercice :

Réaliser une arborescence des localisations
Exemple ici : https://recordit.co/8QWKxow3p2

# Travail attendu :

- Importer les données dans une base de données (vous êtes libre de choisir le SGBD de votre choix)
- Créer un mini backend (API) pour permettre de récupérer les localités
  - GET /localites : index, liste toutes les localites
  - GET /localites/{id} : renvoi une localité et ses enfants
- Créer une page web (HTML/JS) et générer une vue hierarchique interactive des localités (comme dans la démo)

# Consignes :

- Délivrer l'exercice via un depot git (github, gitlab, ...)
- Possibilité d'utiliser un framwork pour le backend et le frontend
- Ne pas utiliser un plugin tout fait pour créer le système d'arborescence

# Installation :

Back :

- nmp i
- npm install express mysql2 cors morgan dotenv
- npm install nodemon --save -dev

Front :

- npm init
- nmp install react-router-dom --save
- npm i axios

# API :

Routes :

- http://localhost:3003/localites
  affiche les localites par niveau hierarchique
- http://localhost:3003/localites/id
  affiche les localites qui appartiennent au parent id
- http://localhost:3003/localites/all
  affiche toutes les localites par ordre croissant d'id
