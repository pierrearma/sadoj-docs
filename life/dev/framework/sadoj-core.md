# sadoj-core

> Auteur de la page: Pierre.

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-core`

Ce script regroupe la majorité des fonctions du framework et permet de fournir un ensemble de fonctions utiles à la création de script.

## Fonctions côté client (exports & events)

### Véhicule

#### GetAllVehiclesInScope

Permet de récupérer l'ensemble des véhicules existant localement (avec OneSync Infinity, cela retourne uniquement les véhicules dans le *scope* du joueur).

<!-- tabs:start -->

#### **Export**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllVehiclesInScope()
```

* **Résultats:**
  * Tableau avec la liste des entités.

    ```lua
    [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
    ```

<!-- tabs:end -->

#### GetClosestVehicleFromCoords

<!-- tabs:start -->

#### **Export**

```lua
local result --[[ Entity ]] = exports["sadoj-core"]:GetClosestVehicleFromCoords(coords --[[ vector3 ]])
```

* **Résultats:**
  * Le véhicule le plus proche de des coordonnées. Faire un [DoesEntityExist](https://docs.fivem.net/natives/?_0x7239B21A38F536BA) pour vérifier l'existence du véhicule.

<!-- tabs:end -->

#### GetClosestVehicleFromEntity

<!-- tabs:start -->

#### **Export**

```lua
local result --[[ Entity ]] = exports["sadoj-core"]:GetClosestVehicleFromEntity(entity --[[ Entity ]])
```

* **Résultats:**
  * Le véhicule le plus proche de l'entité. Faire un [DoesEntityExist](https://docs.fivem.net/natives/?_0x7239B21A38F536BA) pour vérifier l'existence du véhicule.

<!-- tabs:end -->

#### IsAllVehicleDoorsClosed

<!-- tabs:start -->

#### **Export**

```lua
local result --[[ boolean ]] = exports["sadoj-core"]:IsAllVehicleDoorsClosed(vehicle --[[ Vehicle ]])
```

* **Résultats:**
  * `true` si le véhicule à toutes ses portes de fermé, `false` sinon.

<!-- tabs:end -->

### Débogage

#### tPrint

Permet l'affichage d'un tableau en console.

<!-- tabs:start -->

#### **Export**

```lua
exports["sadoj-core"]:tPrint(tbl --[[ table ]])
```

<!-- tabs:end -->

## Fonctions côté serveur (exports & events)

### Débogage

#### tPrint

Permet l'affichage d'un tableau en console.

<!-- tabs:start -->

#### **Export**

```lua
exports["sadoj-core"]:tPrint(tbl --[[ table ]])
```

<!-- tabs:end -->