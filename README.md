# TACHKILA 

Une application web interactive de composition d'équipe de football en 4-4-2, développée en JavaScript (DOM) et stylisée avec Tailwind CSS.

## 🛠️ Technologies Utilisées
* **HTML5** : Structure de la page et de la modale.
* **Tailwind CSS** : Design et mise en page responsive.
* **JavaScript (DOM)** : Logique interactive, gestion des événements, validation en temps réel.


## 🚀 Fonctionnalités Implémentées

### 1. Gestion des Joueurs (Modal & Formulaire)
* **Ouverture et fermeture** de la modale d'ajout/modification via des écouteurs d'événements.
* **Validation en temps réel (Regex)** pour le nom (minimum 3 lettres alphabétiques) et le numéro de maillot (entre 1 et 99, avec unicité).
* **Gestion des erreurs** : affichage dynamique des messages d'erreur et blocage du formulaire en cas de données invalides.

### 2. Composition Tactique & Placement sur le Terrain
* **Sélection dynamique des postes** (Gardien, Défenseur, Milieu, Attaquant) reliés aux zones du terrain.
* **Règles de placement strictes** :
  * Un joueur ne peut être placé que dans une zone correspondant à son poste.
  * Impossibilité de placer deux joueurs sur la même case (gestion des cellules occupées).
* **Gestion du banc** : possibilité de renvoyer un joueur sur le banc à tout moment.
* **Feedback visuel** : les cartes des joueurs titulaires s'estompent (effet pâle) lorsqu'ils sont sur le terrain.
* **Compteurs en temps réel** : suivi du nombre total de joueurs.
### 3. Modification & Suppression

##  Planification du Projet
 [TACHKILA - Planification Jira](https://gym09.atlassian.net/jira/software/projects/SCRUM/boards/1?sprintStarted=true&filter=&groupBy=none&atlOrigin=eyJpIjoiZWU1M2ZiM2IwNmM5NDM4MzhhZmQ4YTdmMDA0MWQzNDAiLCJwIjoiaiJ9)