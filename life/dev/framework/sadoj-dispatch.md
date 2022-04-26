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


#### **Event (Serveur)**

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


#### **Export (Serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:IsConnectedToCentral(serverId --[[ integer ]], job  --[[ String ]])
```
* **Paramètres:**
  * **serverId:**
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


#### **Export (Serveur)**

```lua
local result --[[ boolean ]] = exports["sadoj-dispatch"]:GetAllPlayersConnectedToCentral(job  --[[ String ]])
```
* **Paramètres:**
  * **job:**

<!-- tabs:end -->

{docsify-updated}
