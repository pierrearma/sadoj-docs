# sadoj-persistentvehicles

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-persistentvehicles`

Ce script permet de rendre un véhicule persistant, c'est-à-dire que le véhicule ne disparaîtra jamais.

## Utilisation

### Enregistrer un véhicule

<!-- tabs:start -->
#### **Export (client)**

```lua
local identifier --[[ string ]] = exports["sadoj-persistentvehicles"]:RegisterVehicle(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez enregistrer.
* **Résultat:**
  * **identifier:** L'identifiant du véhicule.
<!-- tabs:end -->

### Désenregistrer un véhicule

<!-- tabs:start -->
#### **Export (client)**

```lua
exports["sadoj-persistentvehicles"]:RegisterVehicle(identifier --[[ string ]][, delete --[[ boolean ]]])
```

* **Paramètres:**
  * **identifier:** L'identifiant du véhicule que vous souhaitez désenregistrer.

#### **Event (serveur)**
```lua
TriggerEvent("sadoj-persistentvehicles:server:ForgetVehicle", identifier --[[ string ]][, delete --[[ boolean ]]])
```
* **Paramètres:**
  * **identifier:** L'identifiant de l'enregistrement.
  * **delete:** Si vrai, si vous souhaitez supprimé le véhicule.
<!-- tabs:end -->


### Vérification

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-persistentvehicles"]:IdentifierIsRegistered(identifier --[[ string ]])
```
* **Paramètres:**
  * **identifier:** L'identifiant du véhicule que vous souhaitez vérifier.
* **Résultat:**
  * **boolean:** Si le véhicule est enregistré.

#### **Export (serveur)**
```lua
local result --[[ boolean ]] = exports["sadoj-persistentvehicles"]:IdentifierIsRegistered(identifier --[[ string ]])
```

* **Paramètres:**
  * **identifier:** L'identifiant du véhicule que vous souhaitez vérifier.
* **Résultat:**
  * **boolean:** Si le véhicule est enregistré.
<!-- tabs:end -->

### Evénement d'écoute

<!-- tabs:start -->
#### **Event (client)**

```lua
RegisterNetEvent("sadoj-persistentvehicles/VehicleSpawn", function(netId, value)

  --Mettez votre code ici

end)
```
* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **value:** Toutes les données enregistrées par le script sous forme de tableau.

#### **Event (serveur)**

```lua
RegisterServerEvent("sadoj-persistentvehicles/server/VehicleSpawn", function(serverId, netId, value)

  --Mettez votre code ici

end)
```

* **Résultats:**
  * **serverId:** Le server ID du joueur qui vient de déclencher l'apparition du véhicule.
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **value:** Toutes les données enregistrées par le script sous forme de tableau.
<!-- tabs:end -->

{docsify-updated}
