# sadoj-persistentvehicles

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-persistentvehicles`


### Register-vehicle

<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerEvent("sadoj-persistentvehicles/register-vehicle", vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **entity:** Le véhicule que vous souhaitez enregistrer.


<!-- tabs:end -->



### Forget-vehicle

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

{docsify-updated}