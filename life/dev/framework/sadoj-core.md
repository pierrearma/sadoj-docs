# sadoj-core

> Auteur de la page: Pierre & Thomas.

---

## Informations

* Auteurs du script: Pierre & Thomas
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
      [5, 10, 14, 15 18, 55, 57, 60, 73, 97, ...]
    ```
<!-- tabs:end -->

#### GetAllPlayersWithData
<!-- tabs:start -->
#### **Export**
```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayersWithData()
```
* **Résultats:**
  * Tableau avec la liste de tous les joueurs (ServerId).

    ```lua
      {
        {playerId = --[[ integer ]], PlayerName = --[[ string ]], Coords = --[[ vector3 ]]},
        {playerId = --[[ integer ]], PlayerName = --[[ string ]], Coords = --[[ vector3 ]]},
        ...
      }
    ```
<!-- tabs:end -->

### Objet

#### SpawnObject
<!-- tabs:start -->
#### **Export**
```lua
local result --[[ Entity ]] = exports["sadoj-core"]:SpawnObject(ModelHash --[[ Hash ]], Coords --[[ vector3 ]], Options --[[ table ]])
```
* **Paramètres:**
  * **ModelHash:** Le modèle de l'objet que vous souhaitez créer.
  * **Coords:** Les coordonnées à laquelle vous souhaitez créer l'objet.
  * **Options:**
    ```lua
    {
      Heading --[[ integer ]], -- Heading de l'objet.
      Rotation --[[ vector3 ]], -- Rotation de l'objet.

      IsNetwork --[[ boolean ]], -- Si l'objet est enregistré dans le network, sinon l'objet n'existe que localement.
      NetMissionEntity --[[ boolean ]],
      DoorFlag --[[ boolean ]], -- Si l'objet que vous créez et une porte

      ObjectOnGround --[[ boolean ]], -- Placer automatiquement l'objet sur le sol
      FreezePosition --[[ boolean ]], -- Si objet peut être déplacé
      DisableCollision --[[ boolean ]], -- Si l'objet à une collision
    }
    ```
<!-- tabs:end -->

#### DeleteMyEntity
<!-- tabs:start -->
#### **Export**
```lua
exports["sadoj-core"]:DeleteMyEntity(Entity --[[ Entity ]])
```
<!-- tabs:end -->

### Barre de progression et Timer

#### CreateTimerProgressBar
<!-- tabs:start -->
#### **Export**
```lua
local BarId --[[ string ]] = exports["sadoj-core"]:CreateTimerProgressBar(Title --[[ string ]], TitleColor --[[ table ]], FgColor --[[ table ]], BgColor --[[ table ]], usePlayerStyle --[[ boolean ]])
```
* **Paramètres:**
  * **Title:** Titre.
  * **TitleColor:** La couleur du titre (RGBA).
    ```lua
      {255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]]}
    ```
  * **FgColor:** Couleur de la barre de progression (RGBA).
    ```lua
      {255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]]}
    ```
  * **BgColor:** La couleur background (RGBA).
    ```lua
      {255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]]}
    ```
  * **usePlayerStyle:** Ecriture en gras.

<!-- tabs:end -->

#### CreateTimerBar
<!-- tabs:start -->
#### **Export**
```lua
local BarId --[[ string ]] = exports["sadoj-core"]:CreateTimerBar(Title --[[ string ]], Text --[[ string ]], TitleColor --[[ table ]], TextColor --[[ table ]], usePlayerStyle --[[ boolean ]])
```
* **Paramètres:**
  * **Title:** Titre.
  * **Text:** Le texte qui le texte qui s'affichera dans votre TimeBar. *(**Maximum:** `15` caractères)*
  * **TitleColor:** La couleur du titre (RGBA).
    ```lua
      {255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]]}
    ```
  * **TextColor:** Le couleur du texte (EGBA).
    ```lua
      {255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]]}
    ```
  * **usePlayerStyle:** Ecriture en gras.
    ```lua
      {255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]], 255 --[[ integer ]]}
    ```
<!-- tabs:end -->


#### DeleteBar
<!-- tabs:start -->
#### **Export**
```lua
exports["sadoj-core"]:DeleteBar(BarId --[[ string ]])
```
* **Paramètres:**
  * **BarId:** ID de votre bar.
<!-- tabs:end -->


#### SetProgressToProgressBar
<!-- tabs:start -->
#### **Export**
```lua
exports["sadoj-core"]:SetProgressToProgressBar(BarId --[[ string ]], Progress --[[ integer ]])
```
* **Paramètres:**
  * **BarId:** ID de votre bar.
  * **Progress:** Le niveau de progression de la ProgressBar. *(**Minimum**: `0`, **Maximum:** `100`)*
<!-- tabs:end -->


#### SetTextToTimerBar
<!-- tabs:start -->
#### **Export**
```lua
exports["sadoj-core"]:SetTextToTimerBar(BarId --[[ string ]], Text --[[ integer ]])
```
* **Paramètres:**
  * **BarId:** ID de votre bar.
  * **Text:** Le texte qui s'affichera dans la TimeBar. *(**Maximum:** `15` caractères)*
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
      [5, 10, 14, 15 18, 55, 57, 60, 73, 97, ...]
    ```
<!-- tabs:end -->

#### GetAllPlayersWithData
<!-- tabs:start -->
#### **Export**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayersWithData()
```
* **Résultats:**
  * Tableau avec la liste de tous les joueurs (ServerId).

   ```lua
      {
        {playerId = --[[ integer ]], PlayerName = --[[ string ]], Coords = --[[ vector3 ]]},
        {playerId = --[[ integer ]], PlayerName = --[[ string ]], Coords = --[[ vector3 ]]},
        ...
      }
    ```
<!-- tabs:end -->

### Objet

#### SpawnObject
<!-- tabs:start -->
#### **Export**
```lua
local result --[[ Entity ]] = exports["sadoj-core"]:SpawnObject(ModelHash --[[ Hash ]], Coords --[[ vector3 ]], Options --[[ table ]])
```
* **Paramètres:**
  * **ModelHash:** Le modèle de l'objet que vous souhaitez créer.
  * **Coords:** Les coordonnées à laquelle vous souhaitez créer l'objet.
  * **Options:**
    ```lua
    {
      Heading --[[ integer ]], -- Heading de l'objet.
      Rotation --[[ vector3 ]], -- Rotation de l'objet.

      NetMissionEntity --[[ boolean ]],
      DoorFlag --[[ boolean ]], -- Si l'objet que vous créez et une porte

      ObjectOnGround --[[ boolean ]], -- Placer automatiquement l'objet sur le sol
      FreezePosition --[[ boolean ]], -- Si objet peut être déplacé
      DisableCollision --[[ boolean ]], -- Si l'objet à une collision
    }
    ```
<!-- tabs:end -->

#### DeleteMyEntity
<!-- tabs:start -->
#### **Export**
```lua
exports["sadoj-core"]:DeleteMyEntity(Entity --[[ Entity ]])
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

## Événement d'écoute (events)

### Joueur

#### Assaie d'entrer dans un véhicule

Cet événement vous permettra de savoir quand un joueur essaie d'entrer dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/events/player/EnteringVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteringVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


#### Monter dans un véhicule interrompu
Cet événement vous permettra de savoir quand un joueur interrompt le fait de vouloir monter dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/events/player/EnteringAborted", function()

    --Mettez votre code ici

  end)
```
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteringAborted", function(PlayerServerId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

#### Monter dans un véhicule

Cet événement vous permettra de savoir quand un joueur monte dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/events/player/EnteredVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteredVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

#### Sortir d'un véhicule

Cet événement vous permettra de savoir quand un joueur sort d'un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/events/player/ExitVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/events/player/ExitVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


{docsify-updated}