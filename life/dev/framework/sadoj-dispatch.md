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



### IsConnectedToCentral

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:IsConnectedToCentral(serverId --[[ integer ]], job  --[[ String ]])
```
* **Paramètres:**
  * **serverId:**
  * **job:**


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:IsConnectedToCentral(serverId --[[ integer ]], job  --[[ String ]])
```
* **Paramètres:**
  * **serverId:**
  * **job:**
<!-- tabs:end -->


### DoesCentralExist

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:DoesCentralExist(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:DoesCentralExist(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**
<!-- tabs:end -->


### GetAllPlayersConnectedToCentral

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**
<!-- tabs:end -->

### GetAllPlayersConnectedToCentralWithData

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentralWithData(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentralWithData(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**
<!-- tabs:end -->

### GetNumberOfConnectedPlayerInCentral

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetNumberOfConnectedPlayerInCentral(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetNumberOfConnectedPlayerInCentral(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**
<!-- tabs:end -->


### GetPlayerConnectedCentralByServerId

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetPlayerConnectedCentralByServerId(serverId --[[ integer ]])
```
* **Paramètres:**
  * **serverId:**


#### **Export (serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetPlayerConnectedCentralByServerId(serverId --[[ integer ]])
```
* **Paramètres:**
  * **serverId:**
<!-- tabs:end -->

### GetMyConnectedCentral

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetMyConnectedCentral()
```
<!-- tabs:end -->

### GetMyConnectedCentralWithData

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetMyConnectedCentralWithData()
```
<!-- tabs:end -->

### GetMyJobState

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetMyJobState(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**
<!-- tabs:end -->

{docsify-updated}
