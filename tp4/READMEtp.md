# TP 3: Facebook ultra lite

A lire impérativement avant de commencer quoi que ce soit, ce sont les règles que vous devrez appliquer tout au long du semestre:

<p align="center">
 <a href="https://gitlab.com/Adrien_Kourganoff/instructions_web_ocres_ing4/-/blob/master/README.md">Règles pour le semestre</a>
</p>

## Instructions

![capture](./capture.png)

Le but de ce TP est de reproduire un site identique à l'image grâce à React. Avant toute chose, analysez cette image et reflechissez aux composants et aux containers que vous pourriez créer

> Ce site contient à minima 2 composants et un container

- Les trois boutons en haut à droite servent à switcher entre les differents profils qui seront définis et stockés à travers un objet javascript.

  Par exemple:

  ```javascript
  const profils = [
    {
      nom: bob
    },
    {
      nom: martine
    },
    {
      nom: camille
    }
  ];
  ```

- Le bouton change style permet de changer la couleur de background de la carte de profil

Chaque profil contient au moins les informations suivantes:

- prénom
- nom
- date de naissance
- image de profil

Chaque profil contient aussi la dernière publication de l'utilisateur

Lorsque l'on switche d'un utilisateur à l'autre toutes les informations sont mises à jour.

## Bonus:

Lorsque l'utilisateur clique sur le bouton "C'est super !", il vient augmenter le nombre de "C'est super!" qu'on affichera à coté du bouton.
Ce nombre sera stocké dans le profil de l'utilisateur ce qui permettra de la conserver lorsqu'on switchera d'utilisateur.
