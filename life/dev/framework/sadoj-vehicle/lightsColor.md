# sadoj-vehicle - Couleur des lumières

> Auteur de la page: Thomas.

---

## Définir la couleur des phares xenon
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleXenonLightsCustomColor(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleXenonLightsCustomColor(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleXenonLightsCustomColor", netId --[[ number ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
<!-- tabs:end -->

## Définir la couleur des neons
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehicleNeonLightsColour(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehicleNeonLightsColour(vehicle --[[ vehicle ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
### **Event (client)**
```lua
TriggerServerEvent("sadoj-vehicle:server:SetVehicleNeonLightsColour", netId --[[ number ]], rgb --[[ table ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **rgb:** la couleur en RGB. Exemple: `{r = 255, g = 255, b = 255}` pour du blanc.
<!-- tabs:end -->

{docsify-updated}
