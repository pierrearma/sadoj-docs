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

### Joueur

#### GetAllPlayers
<!-- tabs:start -->
#### **Export**
```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayers()
```
* **Résultats:**
  * Tableau avec la liste de tous les joueurs (ServerId).

    ```lua
    [ 20, 32, 36, 45, 52, 58, 59, 75, 80 ...]
    ```
<!-- tabs:end -->

#### Événement d'écoute

Cet événement vous permettra de savoir quand un joueur essaie d'entrer dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/player/EnteringVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


Cet événement vous permettra de savoir quand un joueur interrompt le fait de vouloir monter dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/player/EnteringAborted", function()

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

Cet événement vous permettra de savoir quand un joueur monte dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/player/EnteredVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

Cet événement vous permettra de savoir quand un joueur sort d'un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/player/ExitVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
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

### Joueur

#### GetClosestPlayerFromCoords

Permet de récupérer le joueur le plus proche d'une coordonnées.

<!-- tabs:start -->

#### **Export**

```lua
local PlayerId --[[ integer ]], ClosestDist --[[ vector3 ]] = exports["sadoj-core"]:GetClosestPlayerFromCoords(tbl --[[ table ]])
```
* **Résultats:**
  * **PlayerId:** Le ServerId du joueur de plus proche.
  * **ClosestDist:** La distance entre le joueur et les coordonnées donner.
<!-- tabs:end -->

#### GetAllPlayersClosestFromCoords

Permet de récupérer tous les joueurs à proximité d'une coordonnées.

<!-- tabs:start -->
#### **Export**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayersClosestFromCoords(tbl --[[ table ]])
```
* **Résultats:**
  * Tableau avec la liste des ServerId.

    ```lua
    [ 20, 32, 36, 45, 52, 58, 59, 75, 80 ...]
    ```
<!-- tabs:end -->

#### GetAllPlayers
<!-- tabs:start -->
#### **Export**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayers()
```
* **Résultats:**
  * Tableau avec la liste de tous les joueurs (ServerId).

    ```lua
    [ 20, 32, 36, 45, 52, 58, 59, 75, 80 ...]
    ```
<!-- tabs:end -->


#### Événement d'écoute

Cet événement vous permettra de savoir quand un joueur essaie d'entrer dans un véhicule.
<!-- tabs:start -->
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/player/EnteringVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

Cet événement vous permettra de savoir quand un joueur interrompt le fait de vouloir monter dans un véhicule.
<!-- tabs:start -->
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/player/EnteringAborted", function(PlayerServerId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


Cet événement vous permettra de savoir quand un joueur monte dans un véhicule.
<!-- tabs:start -->
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/player/EnteredVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

Cet événement vous permettra de savoir quand un joueur sort d'un véhicule.
<!-- tabs:start -->
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/player/ExitVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
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

{docsify-updated}