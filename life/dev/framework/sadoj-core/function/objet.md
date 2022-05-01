# sadoj-core - Function - Objet

> Auteur de la page: Thomas.

---

#### SpawnObject

<!-- tabs:start -->
#### **Export (client)**
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

#### **Export (serveur)**
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
#### **Export (client)**
```lua
exports["sadoj-core"]:DeleteMyEntity(Entity --[[ Entity ]])
```
#### **Export (serveur)**
```lua
exports["sadoj-core"]:DeleteMyEntity(Entity --[[ Entity ]])
```
<!-- tabs:end -->