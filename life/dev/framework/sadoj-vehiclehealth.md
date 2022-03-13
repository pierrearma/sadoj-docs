# sadoj-vehiclehealth

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-vehiclehealth`


Chaque dégâts (visuel ou mécanique) d'un véhicule est stocké sous forme de tableau :

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

{docsify-updated}