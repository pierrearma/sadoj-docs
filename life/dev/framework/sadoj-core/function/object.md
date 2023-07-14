# sadoj-core - Fonctions - Object

> Auteur de la page: Pierre & Thomas.

---

#### CreateObject

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ Entity ]] = exports["sadoj-core"]:CreateObject(model --[[ Hash ]], coords --[[ vector3 ]][, options --[[ table ]]])
```

* **Paramètres:**
  * **model:** Le modèle de l'objet que vous souhaitez créer.
  * **coords:** Les coordonnées à laquelle vous souhaitez créer l'objet.
  * **options:**
    ```lua
    {
      isNetwork --[[ boolean ]], -- Si l'objet est enregistré dans le network, sinon l'objet n'existe que localement.
      isAMissionEntity --[[ boolean ]],
      isADoor --[[ boolean ]], -- Si l'objet que vous créez et une porte

      heading --[[ integer ]], -- Heading de l'objet.
      rotation --[[ vector3 ]], -- Rotation de l'objet.

      placeOnGround --[[ boolean ]], -- Placer automatiquement l'objet sur le sol
      freezePosition --[[ boolean ]], -- Si objet peut être déplacé
      disableCollision --[[ boolean ]], -- Si les collisions sont désactivées
    }
    ```
* **Retour:**
  * **result:** L'objet créé.

#### **Export (serveur)**

```lua
local result --[[ Entity ]] = exports["sadoj-core"]:CreateObject(model --[[ Hash ]], coords --[[ vector3 ]][, options --[[ table ]]])
```

* **Paramètres:**
  * **model:** Le modèle de l'objet que vous souhaitez créer.
  * **coords:** Les coordonnées à laquelle vous souhaitez créer l'objet.
  * **options:**
    ```lua
    {
      heading --[[ integer ]], -- Heading de l'objet.
      rotation --[[ vector3 ]], -- Rotation de l'objet.

      isAMissionEntity --[[ boolean ]],
      isADoor --[[ boolean ]], -- Si l'objet que vous créez et une porte

      freezePosition --[[ boolean ]], -- Si objet peut être déplacé
    }
    ```
* **Retour:**
  * **result:** L'objet créé.

<!-- tabs:end -->

#### DeleteEntity

Cette fonction permet de supprimer une entité même sans en être le propriétaire.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports["sadoj-core"]:DeleteEntity(Entity --[[ Entity ]])
```

<!-- tabs:end -->

#### SetEntityDistanceCullingRadius

Permet de modifier le culling radius depuis un event.

<!-- tabs:start -->

#### **Event (client)**

```lua
TriggerServerEvent("sadoj-core:SetEntityDistanceCullingRadius", netId --[[ integer ]], radius --[[ number ]])
```

* **Paramètres:**
  * **netId:** Le netId de l'entité.
  * **radius:** Le nouveau culling radius (0.0 pour réinitialiser).

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-core:SetEntityDistanceCullingRadius", netId --[[ integer ]], radius --[[ number ]])
```

* **Paramètres:**
  * **netId:** Le netId de l'entité.
  * **radius:** Le nouveau culling radius (0.0 pour réinitialiser).
<!-- tabs:end -->



#### SetDisableBreaking

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetDisableBreaking(object --[[ object ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **object:** L'objet à modifier.
  * **toggle:** Si l'objet peut être cassé ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:object:SetDisableBreaking", netId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'objet à modifier.
  * **toggle:** Si l'objet peut être cassé ou non.
<!-- tabs:end -->

#### SetDisableFragDamage

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetDisableFragDamage(object --[[ object ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **object:** L'objet à modifier.
  * **toggle:** Si l'objet peut être cassé en plusieurs morceaux ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:object:SetDisableFragDamage", netId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'objet à modifier.
  * **toggle:** Si l'objet peut être cassé en plusieurs morceaux ou non.
<!-- tabs:end -->



{docsify-updated}