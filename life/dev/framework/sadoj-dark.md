# sadoj-dark

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas & Pierre
* Emplacement: `[SCRIPT]/[DARK]/sadoj-dark`



### Crochetage de voiture

Cette export vous permet de vérifier si un véhicule a été crocheter de manière illégale.

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-dark"]:IsVehicleLockPicked(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le véhicule a été crocheter, `false` sinon.

#### **Export (server)**
```lua
local result --[[ boolean ]] = exports["sadoj-dark"]:IsVehicleLockPicked(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le véhicule a été crocheter, `false` sinon.
<!-- tabs:end -->

### Position du rochetage de voiture

Cette export vous permet de récupérer la position où le véhicule a été crocheter de manière illégale.

<!-- tabs:start -->
#### **Export (client)**
```lua
local coords --[[ vector3 ]] = exports["sadoj-dark"]:GetVehicleLockPickingPosition(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule sur lequel vous souhaitez récupérer les coordonnées du crochetage.
* **Résultats:**
  * Coordonnées sous forme de vecteur 3.

#### **Export (server)**
```lua
local coords --[[ vector3 ]] = exports["sadoj-dark"]:GetVehicleLockPickingPosition(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule sur lequel vous souhaitez récupérer les coordonnées du crochetage.
* **Résultats:**
  * Coordonnées sous forme de vecteur 3.
<!-- tabs:end -->


{docsify-updated}