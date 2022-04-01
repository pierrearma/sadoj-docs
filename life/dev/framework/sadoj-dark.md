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
local result --[[ boolean ]] = exports["sadoj-dark"]:IsVehicleIsLockPicking(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le véhicule a été crocheter, `false` sinon.

#### **Export (server)**
```lua
local result --[[ boolean ]] = exports["sadoj-dark"]:IsVehicleIsLockPicking(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le véhicule a été crocheter, `false` sinon.
<!-- tabs:end -->


{docsify-updated}