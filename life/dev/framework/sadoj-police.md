# sadoj-police

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[METIERS]/[Police]/sadoj-police`



### Menottes

Cette export vous permet de vérifier si un Ped est menotté.

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-police"]:IsEntityHandCuff(ped  --[[ Ped ]])
```

* **Paramètres:**
  * **ped:** Le Ped que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le Ped est menotté, `false` sinon.
<!-- tabs:end -->



### Escorte

Cette export vous permet de vérifier si il est escorté par un joueur.

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-police"]:IsEntityGrab(ped  --[[ Ped ]])
```

* **Paramètres:**
  * **ped:** Le Ped que vous souhaitez vérifier.
  * * **Résultats:**
  * `true` si le Ped est escorté par un joueur, `false` sinon.

<!-- tabs:end -->


Cette export vous permet de vérifier s'il y a un suspect dans le véhicule.

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-police"]:IsVehicleAsSuspect(ped  --[[ Ped ]])
```

* **Paramètres:**
  * **ped:** Le Ped que vous souhaitez vérifier.
* **Résultats:**
  * `true` s'il y a un suspect dans le véhicule, `false` sinon.
<!-- tabs:end -->


Cette export vous permet de récupérer le suspect dans le véhicule.

<!-- tabs:start -->
#### **Export (client)**
```lua
local SupectNetId --[[ integer ]], SupectIsPlayer --[[ boolean ]] = exports["sadoj-police"]:GetSuspectInVehicle(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **ped:** Le Ped que vous souhaitez vérifier.
* **Résultats:**
  * **SupectNetId:** Le Network ID du suspect dans le véhicule (ServerId si Player).
  * **SupectIsPlayer:** `true` s'il y a un suspect et un joueur, `false` sinon.
<!-- tabs:end -->




### Arrestation

Cette export vous permet de vérifier si un Ped est arrêté.

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-police"]:IsEntityArrested(ped  --[[ Ped ]])
```

* **Paramètres:**
  * **ped:** Le Ped que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le Ped est arrêté, `false` sinon.
<!-- tabs:end -->


### Contrôle routier

Cette export vous permet de vérifier si un PNJ est en course poursuite.

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-police"]:IsEntityIsInChase(ped  --[[ Ped ]])
```

* **Paramètres:**
  * **ped:** Le Ped que vous souhaitez vérifier.
* **Résultats:**
  * `true` si le Ped est en course poursuite, `false` sinon.
<!-- tabs:end -->


{docsify-updated}