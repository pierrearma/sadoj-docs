# sadoj-vehicle - Identification / Plaque

> Auteur de la page: Thomas.

---

## Identification

### Récupérer l'identifiant d'un véhicule
<!-- tabs:start -->
### **Export (client)**
```lua
local identifier --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleIdentifier(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **identifier:** l'identifiant du véhicule.
### **Export (serveur)**
```lua
local identifier --[[ string ]] = exports["sadoj-vehicle"]:GetVehicleIdentifier(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **identifier:** l'identifiant du véhicule.
<!-- tabs:end -->

## Plaque

### Récupérer la plaque d'un véhicule
<!-- tabs:start -->
### **Export (client)**
```lua
local plate --[[ string ]] = exports["sadoj-vehicle"]:GetVehiclePlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **plate:** la plaque du véhicule.
### **Export (serveur)**
```lua
local plate --[[ string ]] = exports["sadoj-vehicle"]:GetVehiclePlate(vehicle --[[ vehicle ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
* **Retour:**
  * **plate:** la plaque du véhicule.
<!-- tabs:end -->

### Définir la plaque d'un véhicule
<!-- tabs:start -->
### **Export (client)**
```lua
exports["sadoj-vehicle"]:SetVehiclePlate(vehicle --[[ vehicle ]], plate --[[ string ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **plate:** la plaque du véhicule.
### **Export (serveur)**
```lua
exports["sadoj-vehicle"]:SetVehiclePlate(vehicle --[[ vehicle ]], plate --[[ string ]])
```
* **Paramètres:**
  * **vehicle:** le véhicule.
  * **plate:** la plaque du véhicule.
<!-- tabs:end -->

{docsify-updated}
