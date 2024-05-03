# Règlement interne des groupes de validation

---

> [!NOTE]
> Les règles suivantes ont été établies par les deux groupes de validation (concernant le mapping, les véhicules et les textures) afin d'harmoniser les processus de validation et de servir de points de contrôle pour chaque demande de validation.

<!-- tabs:start -->

#### **Validation Mapping**

### Généralités

- Il ne doit pas y avoir de conflits avec d'autres mappings. Pour tous les fichiers en commun avec d'autres mappings, ils doivent impérativement être placés dans la ressource "fichiers_communs" et il faut bien s'assurer que les fichiers ".txt" soient remplis.
- Le stream du fichier nodes.ynd doit impérativement se faire dans la ressource "sadoj-nodes-stream".
- Les remplacements sont interdits, sauf en cas de nécessité absolue.
- La suppression d'entités sur des YMAP qui possèdent des "parents" ou des "enfants" est interdite (si vraiment nécessaire, les mettre sous la map).
- Les ajouts d'entités doivent impérativement se faire sur un YMAP à part.
- Le stream de fichier scénario (replace et addon) doivent impérativement se faire dans la ressource "sadoj-scenario-stream".
- La validation doit être effectuée en toute impartialité et n'est pas soumise aux contraintes RP.

### Les textures

- Analyser la taille des textures présentes dans les fichiers YTD.
- Contrôler l'optimisation de la taille des textures (les textures vides ou unicolores, par exemple).
- S'assurer que les dimensions des textures ne dépassent pas 1024x2048 pixels, sauf dans les cas exceptionnels où le rendu en jeu nécessite des dimensions supérieures.
- Vérifier que les dimensions des textures sont des puissances de 2 (4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192...).
- Aucune texture ne doit manquer (par exemple, une texture qui change toute seule quand on bouge la caméra).

### Les collisions

- Vérifier que toutes les collisions sont bien présentes et qu'il n'y a pas de collisions superflues.
- Les collisions doivent être correctement positionnées et dimensionnées.
- Contrôler que les balles passent bien à travers les portes ouvertes.
- Les miroirs ne doivent pas provoquer de crash quand on leur tire dessus.

### Les LODs

- Contrôler que les LODs sont bien présents (le bâtiment ne doit pas disparaître). L'intérieur peut éventuellement disparaître (à voir au cas par cas) quand on s'éloigne, mais l'extérieur du bâtiment doit rester visible (il ne doit pas y avoir de trous dans la map).
- Vérifier qu'il n'y a pas de décalage entre les LODs et le bâtiment principal.

### Occlusions

- S'assurer qu'aucun objet ou bâtiment ne disparaît quand on se promène à l'intérieur et à l'extérieur.

### L'intégration / Détails des finitions

- Le bâtiment doit être bien intégré dans le jeu. Par exemple :
  - Ne pas mettre une tour au milieu de Sandy Shores.
- Ajouter des détails comme des poubelles, la saleté au bas des murs, des antennes, des climatiseurs.
- Avoir des plinthes au bas des murs.

### Les warnings

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste avec Puces Colorées</title>
    <style>
        .rouge { color: red; font-weight: bold; }
        .orange { color: orange; font-weight: bold; }
        .bleu { color: blue; font-weight: bold; }
    </style>
</head>
<body>
    <ul>
        <li>Contrôler qu'il n'y a pas de warnings <span class="rouge">ROUGE</span> dans la console.</li>
        <li>Les warnings <span class="orange">ORANGE</span> et <span class="bleu">BLEU</span> doivent être corrigés si possible.</li>
    </ul>
</body>
</html>


#### **Validation véhicule et texture**

### Généralités

- Ne pas accorder une confiance aveugle aux demandeurs, car ils pourraient commettre des erreurs, oublier des détails, ou même mentir. En cas de détection de mensonge, un avertissement sera émis, voire une révocation des accès pourra être demandée.
- Ne pas se laisser influencer par les votes positifs (ou négatifs) des autres membres du groupe, car ils pourraient avoir omis certaines étapes ou passer à côté d'un problème sur le véhicule.
- On n'est pas toujours disponible, temporairement démotivé ; si on n'est pas en capacité de tester de manière complète, il faut s'abstenir de voter.
- La validation doit être effectuée en toute impartialité et n'est pas soumise aux contraintes RP.

### Tests à effectuer pour la validation (hors serveur)

**Ces vérifications peuvent être faites par une personne mais elle devra exposer ses résultats dans la demande.**

#### Ouverture des fichiers

- Vérifier le nombre de polygones présents dans le modèle *yft_hi*.
- Analyser la taille des textures présentes dans les fichiers *ytd* et *ytd+hi*.
- Contrôler l'optimisation de la taille des textures (les textures vides ou unicolores, par exemple).
- S'assurer que les dimensions des textures ne dépassent pas *2048x2048 pixels*, sauf dans les cas exceptionnels où le rendu en jeu nécessite des dimensions supérieures.
- S'assurer que les textures de "covering" sont en *1024x1024 pixels* dans le fichier *ytd* normal, sauf dans les cas exceptionnels où le rendu en jeu nécessite des dimensions supérieures.
- Vérifier que les dimensions des textures sont des puissances de 2 *(4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192...).*
- Vérifier que le fichier *ytd+hi* n'est pas une copie identique du fichier *ytd* normal.

#### Encodage des textures

- Les textures encodées en *A8R8G8B8* sont à proscrire sauf pour les textures *script_rt*.

### Tests à effectuer sur le serveur

**Ces vérifications sont à effectuer par tous et nécessitent de connaître le mello trainer.**

- Examiner le véhicule sous tous les angles, en prêtant attention aux éléments de carrosserie.
- Ouvrir et fermer toutes les ouvertures du véhicule.
- Tester l'emplacement et le fonctionnement du custom en utilisant le menu mellotrainer ou ("lambda menu").
- Utiliser des armes pour tester la résistance des vitres, celles-ci doivent se briser sauf si le véhicule est blindé.
- Tester la résistance des pneus aux balles *(pneu blindé interdit)*.
- S'éloigner du véhicule ; les roues ne doivent pas disparaître.
- Endommager le véhicule pour évaluer sa réaction aux déformations.
- Faire exploser le véhicule pour observer le rendu *(tout ou presque devrait être brûlé)*.

### Règles spécifiques sur les textures

Pour les modèles dont les livrées sont dans les fichiers *ytd* et *ytd+hi* les déclinaisons de "covering" seront désormais limitées à une seule déclinaison supplémentaire par modèle et par entreprise (donc 2 max.) pour les véhicules communs.

Cette déclinaison doit **être justifiée par un intérêt en RP** pour différencier plusieurs mêmes modèles de véhicule en jeu avec un "covering" différent (Ex : Employé > Superviseur) ou "covering" dit habituel VS "covering" temporaire pour un événement, par exemple.
Cette règle ne s’applique pas aux modèles de véhicule non communs (type secours), ni aux modèles dont les textures sont dans les fichiers *yft*.

### La demande

- Le titre de la demande doit comporter le nom du véhicule et du modèle.
  - Éviter les longues phrases qui masquent l'essentiel (demande de validation de ce véhicule que vous trouverez sur le dev4...).
- Le contenu de la demande pour la validation d'un modèle doit suivre le modèle suivant :

<div style="background-color: #f0f0f0; padding: 10px;">
  Demande de validation de :<br>
  Nom du dossier :<br>
  Nom de spawn :<br>
  Emplacement :<br>
  Taille du dossier :<br>
  Nombre de polygones HI_YFT :<br>
  Test Carcols / Handling / Carvariation :<br>
  Test Vitres + Explosion véhicule (duplication) :<br>
  Warning éventuel :<br>
  Infos complémentaires : (remplacement, utilité, présence de custom, son custom...)<br>
  Lien du véhicule si disponible :<br>
</div>



<!-- tabs:end -->

{docsify-updated}
