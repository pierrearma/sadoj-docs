# sadoj-inventory

> Auteur de la page: Pierre

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-inventory`

Ce script contient de système d'inventaire dont:

- L'inventaire des joueurs
- L'inventaire des véhicules
- Les coffres
- Les magasins
- Le système de fabrication

La configuration ne sera pas documentée ici, il faudra vous référer directement aux fichiers de configuration.

Chaque inventaire possède un nom (ou identifiant) unique et bien particulier. Chaque coffre, inventaire de joueurs et inventaire de véhicules possèdent un nom unique.

De manière générale, il est préférable dans vos scripts de coder ce qui concerne l'inventaire côté serveur.

## Utilisation

### Récupérer le nom d'un inventaire

#### Les joueurs

<!-- tabs:start -->

### **Export (client)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetPlayerInventoryName(player --[[ Player ]])
```

<!-- tabs:end -->