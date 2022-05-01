# sadoj-core - Function - Joueur

> Auteur de la page: Thomas.

---

#### GetAllPlayers
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayers()
```
* **Résultats:**
  * Tableau avec la liste de tous les joueurs (ServerId).

    ```lua
      [5, 10, 14, 15 18, 55, 57, 60, 73, 97, ...]
    ```

#### **Export (serveur)**
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
#### **Export (client)**
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
#### **Export (serveur)**
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

#### GetClosestPlayerFromCoords

<!-- tabs:start -->

#### **Export (serveur)**

```lua
local PlayerId --[[ integer ]], ClosestDist --[[ vector3 ]] = exports["sadoj-core"]:GetClosestPlayerFromCoords(coords --[[ vector3 ]])
```
* **Paramètres:**
  * **coords:** Coordonnées à partir de laquelle vous souhaitez récupérer le joueur de plus proche.

* **Résultats:**
  * **PlayerId:** Le ServerId du joueur de plus proche.
  * **ClosestDist:** La distance entre le joueur et les coordonnées donner.
<!-- tabs:end -->

#### GetAllPlayersClosestFromCoords

Permet de récupérer tous les joueurs à proximité d'une coordonnées.

<!-- tabs:start -->
#### **Export (serveur)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPlayersClosestFromCoords(coords --[[ vector3 ]], radius --[[ number ]])
```
* **Paramètres:**
  * **coords:** Coordonnées à partir de laquelle vous souhaitez récupérer les joueur.
  * **radius:** Rayon de recherche.

* **Résultats:**
  * Tableau avec la liste des ServerId.

    ```lua
    [ 20, 32, 36, 45, 52, 58, 59, 75, 80 ...]
    ```
<!-- tabs:end -->