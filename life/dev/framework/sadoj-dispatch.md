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
TriggerEvent("sadoj-dispatch:server:MakeCall", job, pos, message, callsource, options)
```
* **Paramètres:**
  * **job:** Le job de la centrale.
  * **pos:** La position où la centrale doit être.
  * **message:** Le message à envoyer à la centrale.
  * **callsource:** Le nom de la source qui a fait l'appel.
  * **options:** Les options de l'appel.


#### **Event (serveur)**

```lua
TriggerServerEvent("sadoj-dispatch:server:MakeCall", job, pos, message, callsource, options)
```
* **Paramètres:**
  * **job:** La centrale que vous souhaitez appeler.
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
local result --[[ boolean ]] = exports["sadoj-callbacks"]:TriggerServerCallback("sadoj-dispatch:server:IsConnectedToCentral", serverId --[[ integer ]], central  --[[ String ]])
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
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetMyConnectedCentral()
```
<!-- tabs:end -->

#### GetMyConnectedCentralWithData

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetMyConnectedCentralWithData()
```
<!-- tabs:end -->

#### GetMyJobState

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetMyJobState(central  --[[ String ]])
```
* **Paramètres:**
  * **central:**
<!-- tabs:end -->



### Application des données



### Événement d'écoute


{docsify-updated}
