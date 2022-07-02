# sadoj-vehiclecustom

> Auteur de la page: Thomas.

---

## Informations (en cours de développement)

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclecustom`

## Utilisation

### Récupération des données

#### GetVehicleCustom

Cet export vous permet de récupérer tout le custom présent sur un véhicule.

<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-vehiclecustom"]:GetVehicleCustom(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule ou vous souhaitez récupérer le custom.
* **Résultats:**
  * Tableau contenant la liste de tous les custom présent sur le véhicule.

<!-- tabs:end -->


### Application des données

#### SetVehicleCustom

Cet export vous permet de récupérer tout le custom présent sur un véhicule.

> [!WARNING]
> Si vous utilisez l'Export côté client vérifiez bien avant que vous avez le contrôle de l'entité avec la function ``NetworkHasControlOfEntity``, si vous n'avez pas le contrôle il faut utiliser l'événement côté serveur.

<!-- tabs:start -->
#### **Export (client)**

```lua
exports["sadoj-vehiclecustom"]:SetVehicleCustom(vehicle --[[ vehicle ]], custom --[[ table ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule ou vous souhaitez appliquer le custom.
  * **custom:** Le custom que vous souhaitez appliquer.

#### **Event (serveur)**

```lua
TriggerEvent("sadoj-vehiclecustom:server:setVehicleCustom", netId --[[ integer ]], custom --[[ table ]])
```

* **Paramètres:**
  * **vehicle:** Le netId du véhicule.
  * **custom:** Le custom que vous souhaitez appliquer.
<!-- tabs:end -->

{docsify-updated}
