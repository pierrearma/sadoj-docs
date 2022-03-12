# sadoj-persistentprop

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[INNOVATION]/sadoj-persistentprop`


### Register-prop

<!-- tabs:start -->
#### **Event (client)**
```lua
TriggerEvent("sadoj-persistentprop/register-prop", entity --[[ entity ]], OptionalData --[[ table ]])
```

* **Paramètres:**
  * **entity:** Props que vous souhaitez enregistrer.
  * **OptionalData:** Tableau
      ```lua
      local OptionalData = {
        Freeze = --[[ boolean  ]]
      }
      ```

#### **Event (serveur)**
```lua
TriggerEvent("sadoj-persistentprop/server/register-prop", netId --[[ integer ]], OptionalData --[[ table ]])
```

* **Paramètres:**
  * **netId:** Le Network ID du prop que vous souhaitez enregistrer.
  * **OptionalData:** Tableau
      ```lua
      local OptionalData = {
        Freeze = --[[ boolean  ]]
      }
      ```
<!-- tabs:end -->



### Forget-prop

<!-- tabs:start -->
#### **Event (client)**

```lua
TriggerEvent("sadoj-persistentprop/forget-prop", entity --[[ entity ]])
```

* **Paramètres:**
  * **entity:** Props que vous souhaitez désenregistrer.


#### **Event (serveur)**

```lua
TriggerEvent("sadoj-persistentprop/server/forget-prop", netId --[[ integer ]])
```

* **Paramètres:**
  * **netId:** Le Network ID du prop que vous souhaitez désenregistrer.


<!-- tabs:end -->

{docsify-updated}