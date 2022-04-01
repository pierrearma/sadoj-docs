# sadoj-persistentvehicles

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-persistentvehicles`


### Enregistrer un véhicule

<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerEvent("sadoj-persistentvehicles/register-vehicle", vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **entity:** Le véhicule que vous souhaitez enregistrer.
<!-- tabs:end -->



### Desenregistrer un véhicule

<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerEvent("sadoj-persistentvehicles/forget-vehicle", vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **entity:** Le véhicule que vous souhaitez désenregistrer.

#### **Event (serveur)**
```lua
TriggerEvent("sadoj-persistentvehicles/server/forget-vehicle", netId --[[ integer ]])
```

* **Paramètres:**
  * **netId:** Le Network ID du véhicule que vous souhaitez désenregistrer.
<!-- tabs:end -->


### Evénement d'écoute

<!-- tabs:start -->
#### **Event (client)**
```lua
RegisterNetEvent("sadoj-persistentvehicles/VehicleSpawn", function(NetId, Value)

  --Mettez votre code ici

end)
```

* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **Value:** Toutes les données enregistrées par le script sous forme de tableau.

#### **Event (serveur)**
```lua
RegisterServerEvent("sadoj-persistentvehicles/server/VehicleSpawn", function(NetId, Value)

  --Mettez votre code ici

end)
```

* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **Value:** Toutes les données enregistrées par le script sous forme de tableau.
<!-- tabs:end -->


{docsify-updated}