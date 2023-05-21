# sadoj-ropes

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-ropes`

Ce script permet de créer des cordes synchronisées entre les joueurs.


## Utilisation

### Creation d'une corde

<!-- tabs:start -->
#### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-ropes"]:AddRope(coords --[[ vector3 ]], rot --[[ vector3 ]], maxLength --[[ number ]], ropeType --[[ number ]], initLength --[[ number ]], minLength --[[ number ]], lengthChangeRate --[[ number ]], onlyPPU --[[ boolean ]], collisionOn --[[ boolean ]], lockFromFront --[[ boolean ]], timeMultiplier --[[ number ]], breakable --[[ boolean ]])
```
* **Paramètres:**
  * **coords:** Coordonnées de la corde.
  * **rot:** Rotation de la corde.
  * **maxLength:** Longueur maximale de la corde.
  * **ropeType:** Type de corde.
  * **initLength:** Longueur initiale de la corde.
  * **minLength:** Longueur minimale de la corde.
  * **lengthChangeRate:** Vitesse de changement de longueur de la corde.
  * **onlyPPU:**
  * **collisionOn:** Si la corde est en collision.
  * **lockFromFront:** Si la longueur maximale est égale à zéro et que cette valeur est définie sur faux, la corde deviendra rigide (elle forcera une distance spécifique, quelle que soit la longueur, entre les objets).
  * **timeMultiplier:** La vitesse à laquelle la physique devrait fonctionner. 1.0 est normal, 2.0 est deux fois plus rapide, -1.0 est le temps qui recule. Cela peut affecter la gravité, etc.
  * **breakable:** Si la corde peut être cassée.
* **Retour:**
  * **identifier:** Identifiant de corde.
<!-- tabs:end -->


### Suppression d'une corde

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-ropes"]:DeleteRope(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
#### **Export (serveur)**
```lua
exports["sadoj-ropes"]:DeleteRope(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
<!-- tabs:end -->


### Attacher une corde entre deux entités

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-ropes"]:AttachEntitiesToRope(identifier --[[ string ]], entity1 --[[ entity ]], entity2 --[[ entity ]], entity1Offset --[[ vector3 ]], entity2Offset --[[ vector3 ]], length --[[ number ]], p10 --[[ boolean ]], p11 --[[ boolean ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
  * **entity1:** Entités
  * **entity2:** Entités
  * **entity1Offset:** Offset de la première entité.
  * **entity2Offset:** Offset de la seconde entité.
  * **length:** Longueur de la corde.
  * **p10:**
  * **p11:**
<!-- tabs:end -->

### Attacher une corde a une entité

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-ropes"]:AttachRopeToEntity(identifier --[[ string ]], entity --[[ entity ]], offset --[[ vector3 ]], componentPart --[[ number ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
  * **entity:** Entité.
  * **offset:** Offset de l'entité.
  * **componentPart:** 0
<!-- tabs:end -->

### Detacher une corde d'une entité

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-ropes"]:DetachRopeFromEntity(identifier --[[ string ]], entity --[[ entity ]])
```
* **Paramètres:**
  * **identifier:** Identifiant de corde.
  * **entity:** Entité.
<!-- tabs:end -->

{docsify-updated}
