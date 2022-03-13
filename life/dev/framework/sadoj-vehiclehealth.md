# sadoj-vehiclehealth

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclehealth`


Chaque dégâts (visuel et mécanique) d'un véhicule est stocké sous forme de tableau :

* **EngineHealth** : Les dégâts du moteur (type `number`)  *(**Minimum**: `-4000`, **Maximum:** `1000`)*
  * **-4000**: Le moteur est détruit
  * **0 et moins**: Le moteur prend feu et la santé décline rapidement
  * **300**: Le moteur fume et perd en fonctionnalité
  * **1000**: Le moteur est parfait
* **BodyHealth** : La vie du corps du moteur (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
* **PetrolTankHealth** : La vie du réservoir de carburant (type `number`)  *(**Minimum**: `0`, **Maximum:** `1000`)*
    * **650**: Le réservoir commence à fuir
* **DirtLevel** : Le niveau de saleté du véhiculer (type `number`)  *(**Minimum**: `0.0`, **Maximum:** `15.0`)*
* **NumberVehicleDeformation** : Le nombre de points de déformation sur le véhicule (type `number`)
* **Deformation** : Tableau avec les positions et l'intensité de tout les point de déformation (type `table`)
* **DoorDamaged** : Tableau contenant tous les dégâts des portes (type `table`)
* **Window** : Tableau contenant tous les dégâts des fenêtres (type `table`)
* **Wheels** : Tableau contenant toutes les informations sur les roux (type `table`)


### Vérification

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ boolean ]] = exports["sadoj-cehiclehealth"]:CheckDataToSetDamage(DamageData --[[ table ]])
```

* **Paramètres:**
  * **DamageData:** Tableau complet contenant tous les dégâts du véhicule (récupérer avec la fonction `GetDamage`).
* **Résultats:**
  * `true` si les données envoyées sont bonnes, `false` sinon.
<!-- tabs:end -->


### Récupération des données

<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ table ]] = exports["sadoj-cehiclehealth"]:GetDamage(vehicle --[[ vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez récupérer tous les dégâts.
* **Résultats:**
  * Tableau avec la liste des entités.

    ```lua
    {
        EngineHealth, --[[ number ]]
        BodyHealth, --[[ number ]]
        PetrolTankHealth, --[[ number ]]
        DirtLevel, --[[ number ]]
        NumberVehicleDeformation, --[[ number ]]
        Deformation, --[[ table ]]
        DoorDamaged, --[[ table ]]
        Window, --[[ table ]]
        Wheels, --[[ table ]]
    }
    ```

<!-- tabs:end -->


### Application des données

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:SetDamage(vehicle --[[ vehicle ]], DamageData --[[ table ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule sur lequel vous souhaitez appliquer les dégâts.
  * **DamageData:**  Tableau complet contenant tous les dégâts du véhicule (récupérer avec la fonction `GetDamage`).
  * **callback:** Paramètre à facultatif.


* **Exemple d'utilisation:**
    * Avec callback:
        ```lua
        exports["sadoj-cehiclehealth"]:SetDamage(vehicle, DamageData, function()

            --Mettez votre code ici. (Le code que vous mettrez ici s'exécutera une fois que les dégâts seront appliquées)

        end)
        ```

    * Sans callback:
        ```lua
        exports["sadoj-cehiclehealth"]:SetDamage(vehicle, DamageData) -- Les dégâts s'appliqueront si vous exécuter cette fonction
        ```
<!-- tabs:end -->


### Réparation

#### FixAllDamage

Permet de les réparer tous les dégâts du véhicule (visuel et mécanique).

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixAllDamage(vehicle --[[ vehicle ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez réparer.
  * **callback:** Paramètre à facultatif.


* **Exemple d'utilisation:**
    * Avec callback:
        ```lua
        exports["sadoj-cehiclehealth"]:FixAllDamage(vehicle, function()

            --Mettez votre code ici. (Le code que vous mettrez ici s'exécutera une fois que le véhicule sera réparé)

        end)
        ```

    * Sans callback:
        ```lua
        exports["sadoj-cehiclehealth"]:FixAllDamage(vehicle) -- Le véhicule se répare quand vous exécuter cette fonction
        ```
<!-- tabs:end -->

#### FixAllVisualDamage

Permet de réparer tous les dégâts visuel du véhicule.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixAllVisualDamage(vehicle --[[ vehicle ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer les dégâts visuels.
  * **callback:** Paramètre à facultatif.

<!-- tabs:end -->

#### FixVehicleDeformation

Permet de réparer tous les points de déformation.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixVehicleDeformation(vehicle --[[ vehicle ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer tous les points de déformation.
  * **callback:** Paramètre à facultatif.

<!-- tabs:end -->

#### FixVehicleDeformationByDeformationId

Permet de réparer un point de déformation en fonction Id du point.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixVehicleDeformationByDeformationId(vehicle --[[ vehicle ]], DeformId --[[ integer ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer tous les points de déformation.
  * **DeformId:**
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->

#### FixEngineHealth

Permet de réparer le moteur.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixEngineHealth(vehicle --[[ vehicle ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer les dégâts du moteur.
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->

#### FixEngineBodyHealth

Permet de réparer le corps du moteur.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixEngineBodyHealth(vehicle --[[ vehicle ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer les dégâts du corps du moteur.
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->

#### FixPetrolTankHealth

Permet de réparer le réservoir de carburant.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixPetrolTankHealth(vehicle --[[ vehicle ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer le réservoir de carburant.
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->


#### FixDoorDamagedByDoorId

Permet de réparer une porte en fonction de ID de la porte.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixDoorDamagedByDoorId(vehicle --[[ vehicle ]], DoorId --[[ integer ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer le réservoir de carburant.
  * **DoorId:** L'index de la porte que vous souhaitez réparer.
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->

#### FixWheelsByWheelsId

Permet de réparer les pneus en fonction de ID du pneus.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixWheelsByWheelsId(vehicle --[[ vehicle ]], WheelsID --[[ integer ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer le réservoir de carburant.
  * **WheelsID:** L'index de la roue que vous souhaitez réparer.
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->

#### FixWindowsByWindowsId

Permet de réparer une vitre en fonction de ID de la vitre.

<!-- tabs:start -->
#### **Export (client)**
```lua
exports["sadoj-cehiclehealth"]:FixWindowsByWindowsId(vehicle --[[ vehicle ]], WindowsId --[[ integer ]][, callback --[[ function ]]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule où vous souhaitez réparer le réservoir de carburant.
  * **WindowsId:** L'index de la vitre que vous souhaitez réparer.
  * **callback:** Paramètre à facultatif.
<!-- tabs:end -->

{docsify-updated}