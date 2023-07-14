# sadoj-core - Fonctions - Entité

> Auteur de la page: Thomas.

---

> [!warning]
> Pour toute utilisation `côté client` des fonctions ci-dessous, il est nécessaire de vérifier que le joueur a bien le contrôle de l'entité. Pour cela, vous pouvez utiliser la native `NetworkHasControlOfEntity`.

#### SetEntityInvincible

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetEntityInvincible(entity --[[ entity ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **entity:** L'entité à rendre invincible.
  * **toggle:** Si l'entité doit être invincible ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:entity:SetEntityInvincible", netId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'entité à rendre invincible.
  * **toggle:** Si l'entité doit être invincible ou non.
<!-- tabs:end -->

#### FreezeEntityPosition

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:FreezeEntityPosition(entity --[[ entity ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **entity:** L'entité à geler.
  * **toggle:** Si l'entité doit être gelée ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:entity:FreezeEntityPosition", netId --[[ integer ]], toggle --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'entité à geler.
  * **toggle:** Si l'entité doit être gelée ou non.
<!-- tabs:end -->

#### SetEntityCollision

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetEntityCollision(entity --[[ entity ]], toggle --[[ boolean ]], keepPhysics --[[ boolean ]])
```
* **Paramètres:**
  * **entity:** L'entité à modifier.
  * **toggle:** Si l'entité doit être en collision ou non.
  * **keepPhysics:** Si l'entité doit garder sa physique ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:entity:SetEntityCollision", netId --[[ integer ]], toggle --[[ boolean ]], keepPhysics --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'entité à modifier.
  * **toggle:** Si l'entité doit être en collision ou non.
  * **keepPhysics:** Si l'entité doit garder sa physique ou non.
<!-- tabs:end -->

#### SetEntityCompletelyDisableCollision

<!-- tabs:start -->
#### **Export (client & serveur)**
```lua
exports["sadoj-core"]:SetEntityCompletelyDisableCollision(entity --[[ entity ]], toggle --[[ boolean ]], keepPhysics --[[ boolean ]])
```
* **Paramètres:**
  * **entity:** L'entité à modifier.
  * **toggle:** Si l'entité doit être en collision ou non.
  * **keepPhysics:** Si l'entité doit garder sa physique ou non.
#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core:server:entity:SetEntityCompletelyDisableCollision", netId --[[ integer ]], toggle --[[ boolean ]], keepPhysics --[[ boolean ]])
```
* **Paramètres:**
  * **netId:** Le netId de l'entité à modifier.
  * **toggle:** Si l'entité doit être en collision ou non.
  * **keepPhysics:** Si l'entité doit garder sa physique ou non.
<!-- tabs:end -->


{docsify-updated}
