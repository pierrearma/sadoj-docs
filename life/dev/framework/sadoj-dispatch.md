# sadoj-dispatch

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-dispatch`

## Utilisation

### Faire appel à une centrale

<!-- tabs:start -->
#### **Event (client)**

```lua
TriggerEvent("sadoj-dispatch:server:MakeCall", central --[[ String ]], pos --[[ vector3 ]], message --[[ String ]], callsource --[[ String ]], options)
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez appeler.
  * **pos:** La position de l'appel.
  * **message:** Le message à envoyer à la centrale.
  * **callsource:** Le nom de la source qui a fait l'appel.
  * **options:** Les options de l'appel.


#### **Event (serveur)**

```lua
TriggerServerEvent("sadoj-dispatch:server:MakeCall", central --[[ String ]], pos --[[ vector3 ]], message --[[ String ]], callsource --[[ String ]], options)
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez appeler.
  * **pos:** La position de l'appel.
  * **message:** Le message à envoyer à la centrale.
  * **callsource:** Le nom de la source qui a fait l'appel.
  * **options:** Les options de l'appel.
<!-- tabs:end -->


### Vérification

#### IsConnectedToCentral

<!-- tabs:start -->
#### **CallBack (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-callbacks"]:TriggerServerCallback("sadoj-dispatch:server:IsConnectedToCentral", serverId --[[ integer ]], central --[[ String ]])
```
* **Paramètres:**
  * **serverId:** serverId du joueur.
  * **central:** La centrale que vous souhaitez vérifier.


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:IsConnectedToCentral(serverId --[[ integer ]], central  --[[ String ]])
```
* **Paramètres:**
  * **serverId:** serverId du joueur.
  * **central:** La centrale que vous souhaitez vérifier.
<!-- tabs:end -->


#### DoesCentralExist

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:DoesCentralExist(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez vérifier.


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:DoesCentralExist(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale que vous souhaitez vérifier.
<!-- tabs:end -->






### Récupération des données

#### GetAllPlayersConnectedToCentral
<!-- tabs:start -->
#### **CallBack (client)**

```lua
local result --[[ table ]] = exports["sadoj-callbacks"]:TriggerServerCallback("sadoj-dispatch:server:GetAllPlayersConnectedToCentral", central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.


#### **Export (serveur)**

```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.
<!-- tabs:end -->

#### GetAllPlayersConnectedToCentralWithData

<!-- tabs:start -->
#### **CallBack (client)**

```lua
local result --[[ table ]] = exports["sadoj-callbacks"]:TriggerServerCallback("sadoj-dispatch:server:GetAllPlayersConnectedToCentralWithData", central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.


#### **Export (serveur)**

```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentralWithData(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer tous les joueurs connectés.
<!-- tabs:end -->

#### GetNumberOfConnectedPlayerInCentral

<!-- tabs:start -->
#### **CallBack (client)**

```lua
local result --[[ number ]] = exports["sadoj-callbacks"]:TriggerServerCallback("sadoj-dispatch:server:GetNumberOfConnectedPlayerInCentral", central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer le nombre de joueurs connectés.


#### **Export (serveur)**

```lua
local result --[[ number ]] = exports["sadoj-dispatch"]:GetNumberOfConnectedPlayerInCentral(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer le nombre de joueurs connectés.
<!-- tabs:end -->


#### GetPlayerConnectedCentralByServerId

<!-- tabs:start -->
#### **CallBack (client)**

```lua
local result --[[ table ]] = exports["sadoj-callbacks"]:TriggerServerCallback("sadoj-dispatch:server:GetPlayerConnectedCentralByServerId", serverId  --[[ integer ]])
```
* **Paramètres:**
  * **serverId:** Le serverId du joueur.


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetPlayerConnectedCentralByServerId(serverId --[[ integer ]])
```
* **Paramètres:**
  * **serverId:** Le serverId du joueur.
<!-- tabs:end -->

#### GetMyConnectedCentral

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetMyConnectedCentral()
```
<!-- tabs:end -->

#### GetMyConnectedCentralWithData

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-dispatch"]:GetMyConnectedCentralWithData()
```
<!-- tabs:end -->

#### GetMyJobState

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ String ]] = exports["sadoj-dispatch"]:GetMyJobState(central  --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais récupérer mon statut.
<!-- tabs:end -->



### Application des données



### Événement d'écoute

#### Connexion à une centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:client:PlayerConnectedToCentral", function(central --[[ String ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterNetEvent("sadoj-dispatch:server:PlayerConnectedToCentral", function(serverId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


#### Déconnexion d'une à centrale
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:client:PlayerDisconnectedToCentral", function(central --[[ String ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterNetEvent("sadoj-dispatch:server:PlayerDisconnectedToCentral", function(serverId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


#### Prise d'un appel
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-dispatch:client:CallTaken", function(callId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
#### **Event (serveur)**
```lua
  RegisterNetEvent("sadoj-dispatch:server:CallTaken", function(serverId --[[ integer ]], callId --[[ integer ]], central --[[ String ]])

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


### Autre

#### SendNotifForAllPlayersInService
<!-- tabs:start -->
#### **Event (client)**

```lua
TriggerServerEvent("sadoj-dispatch:server:SendNotifForAllPlayersInService", central  --[[ String ]], message --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais envoyer la notification.
  * **message:** Le message à envoyer.

#### **Export (serveur)**
```lua
exports["sadoj-dispatch"]:SendNotifForAllPlayersInService(central  --[[ String ]], message --[[ String ]])
```
* **Paramètres:**
  * **central:** La centrale où je souhaiterais envoyer la notification.
  * **message:** Le message à envoyer.
<!-- tabs:end -->


{docsify-updated}
