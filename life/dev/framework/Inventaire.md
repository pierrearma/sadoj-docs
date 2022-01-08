# Inventaire

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Roni, Notos & Pierre
* Emplacement: `[SCRIPT]/[BASE]/Inventaire`

Le système de poids est configurable dans le fichier `Inventaire_config.lua`.

Un *inventaire* est un objet de type `table`. Les éléments d'un *inventaire* sont des *items* qui sont des objets de type `table`.

Chaque *item* est un tableau associatif :

* **nomItem** : Nom de l'item (type `string`)  *(colonne **label** dans la table **items** de la bdd)*
* **nbItem** : Quantité de l'item (type `integer`)
* **prix** : Prix de l'item (attention, en fonction du magasin, il peut avoir un coefficient sur ce prix) (type `integer`) *(colonne **prix** dans la table **items** de la bdd)*
* **categorie** : Catégorie de l'item (type `string`) *(colonne **categories** dans la table **items** de la bdd)*
* **valeur** : Utilisation libre (type `string`) *(colonne **valeur** dans la table **items** de la bdd)*
* **enlevable** : Si l'item peut être supprimé (type `integer`, `0` ou `1`) *(colonne **can_remove** dans la table **items** de la bdd)*
* **donnable** : Si l'item peut être donné (type `integer`, `0` ou `1`) *(colonne **can_give** dans la table **items** de la bdd)*
* **utilisable** : Si l'item peut être utilisé (type `integer`, `0` ou `1`) *(colonne **can_use** dans la table **items** de la bdd)*
* **model** : Utilisé pour les armes (utilisation libre pour le reste) (type `string`) *(colonne **nomModel** dans la table **items** de la bdd)*
* **emote** : Nom de l'animation dans Dpemotes quand on utilise l'item (type `string`) *(colonne **emote** dans la table **items** de la bdd)*
* **mass** : Masse de l'item en gramme (type `integer`) *(colonne **mass** dans la table **items** de la bdd)*
* **delete_on_use** : Si l'item est supprimé de l'inventaire quand il est utilisé (type `integer`, `0` ou `1`) *(colonne **delete_on_use** dans la table **items** de la bdd)*
* **metal_detector** : Si l'item est détecté par un détecteur de métaux (type `integer`, `0` ou `1`) *(colonne **metal_detector** dans la table **items** de la bdd)*
* **magasin, magasin2 & magasin3** : Magasin(s) dans lequel/lesquels l'item est disponible en vente (type `string`)  *(colonnes **magasin, magasin2 & magasin3** dans la table **items** de la bdd)*

## Fonctions (exports & events)

### Récupérer l'inventaire d'un joueur

> [!ATTENTION]
> Son utilisation est déconseillé car elle implique un traitement du résultat après son appel. Utilisez de préférence les fonctions ci-dessous pour une utilisation simple.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports.Inventaire:Inventaire_recuperationDonnees(SteamID --[[ string ]])
```

* **Paramètres:**
    * **SteamID:** SteamID du joueur
* **Résultats:**
  * Résultat sous forme de tableau, l'inventaire entier

#### **Event (client)**

```lua
TriggerEvent("Inventaire_recuperationDonnees", SteamID --[[ string ]], callback(result --[[ table ]]) --[[ function ]])
```

* **Paramètres:**
    * **SteamID:** SteamID du joueur
* **Résultats:**
  * Résultat sous forme de tableau, l'inventaire entier

<!-- tabs:end -->

### Présence d'un item avec une quantité donnée

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports.Inventaire:Inventaire_Presence(SteamID --[[ string ]], nomItem --[[ string ]], nbItem --[[ integer ]])
```

* **Paramètres:**
  * **SteamID:** SteamID du joueur
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
  * **nbItem:** Quantité
* **Résultats:**
  * Vrais si présent, faux si absent

<!-- tabs:end -->

### Quantité d'un item

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ integer ]] = exports.Inventaire:Inventaire_Quantite(SteamID --[[ string ]], nomItem --[[ string ]])
```

* **Paramètres:**
  * **SteamID:** SteamID du joueur
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
* **Résultats:**
  * Quantité de l'item donné (0 si absent)

<!-- tabs:end -->

### Ajouter un item

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("Inventaire_server:ajouterItems", SteamID --[[ string ]], nomItem --[[ string ]], nbItem --[[ integer ]])
```

* **Paramètres:**
  * **SteamID:** SteamID du joueur
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
  * **nbItem:** Quantité

#### **Event (serveur)**

```lua
TriggerEvent("Inventaire_server:ajouterItems", SteamID --[[ string ]], nomItem --[[ string ]], nbItem --[[ integer ]])
```

* **Paramètres:**
  * **SteamID:** SteamID du joueur
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
  * **nbItem:** Quantité

<!-- tabs:end -->

### Supprimer un item

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("Inventaire_server:enleverItems", SteamID --[[ string ]], nomItem --[[ string ]], nbItem --[[ integer ]])
```

* **Paramètres:**
  * **SteamID:** SteamID du joueur
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
  * **nbItem:** Quantité

#### **Event (serveur)**

```lua
TriggerEvent("Inventaire_server:enleverItems", SteamID --[[ string ]], nomItem --[[ string ]], nbItem --[[ integer ]])
```

* **Paramètres:**
  * **SteamID:** SteamID du joueur
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
  * **nbItem:** Quantité

<!-- tabs:end -->

### Utiliser un item (hors du menu de l'inventaire)

<!-- tabs:start -->

#### **Export (client)**

```lua
exports.Inventaire:Inventaire_UtiliserItem(nomItem --[[ string ]])
```

* **Paramètres:**
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*

#### **Event (client)**

```lua
TriggerEvent("Inventaire_UtiliserItem", nomItem --[[ string ]])
```

* **Paramètres:**
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*

#### **Event (serveur)**

```lua
TriggerClientEvent("Inventaire_UtiliserItem", ServerID --[[ integer ]], nomItem --[[ string ]])
```

* **Paramètres:**
  * **nomItem:** Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*

<!-- tabs:end -->

### Donner un item au joueur le plus proche (hors du menu de l'inventaire)

Donne au joueur le plus proche (2 mètres maximum).

<!-- tabs:start -->

#### **Export (client)**

```lua
exports.Inventaire:Inventaire_DonnerItem(args --[[ table ]])
```

* **Paramètres:**
  * **args:** Tableau associatif

    ```lua
    local args = {
        nomItem = --[[ string ]]
        model = --[[ string ]]
        nbItem = --[[ integer ]]
    }
    ```

    * **nomItem**: Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
    * **model**: Model de l'item. *(colonne **model** dans la table **items** de la bdd)* *(si aucun model, il faut mettre `"none"`)*
    * **nbItem**: Quantité à donner

#### **Event (client)**

```lua
TriggerEvent("Inventaire_DonnerItem", args --[[ table ]])
```

* **Paramètres:**
  * **args:** Tableau associatif

    ```lua
    local args = {
        nomItem = --[[ string ]]
        model = --[[ string ]]
        nbItem = --[[ integer ]]
    }
    ```

    * **nomItem**: Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
    * **model**: Model de l'item. *(colonne **model** dans la table **items** de la bdd)* *(si aucun model, il faut mettre `"none"`)*
    * **nbItem**: Quantité à donner

#### **Event (serveur)**

```lua
TriggerClientEvent("Inventaire_DonnerItem", ServerID --[[ integer ]], args --[[ table ]])
```

* **Paramètres:**
  * **args:** Tableau associatif

    ```lua
    local args = {
        nomItem = --[[ string ]]
        model = --[[ string ]]
        nbItem = --[[ integer ]]
    }
    ```

    * **nomItem**: Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
    * **model**: Model de l'item. *(colonne **model** dans la table **items** de la bdd)* *(si aucun model, il faut mettre `"none"`)*
    * **nbItem**: Quantité à donner

<!-- tabs:end -->

### Jeter à terre un item (hors du menu de l'inventaire)

<!-- tabs:start -->

### **Export (client)**

```lua
exports.Inventaire:Inventaire_JeterItem(args --[[ table ]])
```

* **Paramètres:**
  * **args:** Tableau associatif

    ```lua
    local args = {
        nomItem = --[[ string ]]
        model = --[[ string ]]
        nbItem = --[[ integer ]]
    }
    ```

    * **nomItem**: Nom de l'item. *(colonne **label** dans la table **items** de la bdd)*
    * **model**: Model de l'item. *(colonne **model** dans la table **items** de la bdd)* *(si aucun model, il faut mettre `"none"`)*
    * **nbItem**: Quantité à jeter

<!-- tabs:end -->

### Donner de l'argent au joueur le plus proche (hors du menu de l'inventaire)

Donne au joueur le plus proche (2 mètres maximum).

<!-- tabs:start -->

### **Export (client)**

```lua
exports.Inventaire:Inventaire_DonnerArgent(amount --[[ integer ]])
```

* **Paramètres:**
  * **amount:** Montant (nombre entier positif)

<!-- tabs:end -->

{docsify-updated}