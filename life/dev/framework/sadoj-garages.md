# sadoj-garages

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[VEHICULE]/sadoj-garages`


* Liste de tous les statuts d'un véhicule à disponible :
  * **state 0**: Le véhicule se trouve dans un garage.
  * **state 1**: Le véhicule ne se trouve pas dans un garage il est donc sorti.
  * **state 2**: Le véhicule est en cours de réparation (PNJ).
  * **state 3**: Le véhicule se trouve en fourrière.


## Utilisation

### Apparition du véhicule

Cet événement permet d'écouter l'apparition d'un véhicule à partir d'un garage (client et serveur).

<!-- tabs:start -->

#### **Event (client)**

```lua
RegisterNetEvent("sadoj-garages:VehicleSpawn", function(NetId, DataBDD, GaragesData)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **DataBDD:** Toutes les données enregistrées dans la base de données (Table user_vehicle).
  * **GaragesData:** Toutes les données qui se trouve dans le fichier config du garageID en question.


#### **Event (serveur)**

```lua
RegisterServerEvent("sadoj-garages:VehicleSpawn", function(NetId, DataBDD, GaragesData)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **netId:** Le Network ID du véhicule qui vient d'apparaître.
  * **DataBDD:** Toutes les données enregistrées dans la base de données (Table user_vehicle).
  * **GaragesData:** Toutes les données qui se trouve dans le fichier config du garageID en question.

<!-- tabs:end -->

### Disparition du véhicule

Cet événement permet d'écouter la d'isparition d'un véhicule à partir d'un garage (client et serveur).

<!-- tabs:start -->

#### **Event (client)**

```lua
RegisterNetEvent("sadoj-garages:VehicleDespawn", function(GarageId, Plate, Model, Data, Health)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **GarageId:** Le GarageID dans lequel le véhicule va se ranger.
  * **Plate:** La plaque du véhicule.
  * **Model:** Le modèle (Hash) du véhicule.
  * **Data:** Toutes les données qui se trouve dans la table data sur la BDD.
  * **Health:** Tous les dégâts physique et mécanique du véhicule.


#### **Event (serveur)**

```lua
RegisterServerEvent("sadoj-garages:VehicleDespawn", function(GarageId, Plate, Model, Data, Health)
  --Mettez votre code ici
end)
```

* **Résultats:**
  * **GarageId:** Le GarageID dans lequel le véhicule va se ranger.
  * **Plate:** La plaque du véhicule.
  * **Model:** Le modèle (Hash) du véhicule.
  * **Data:** Toutes les données qui se trouve dans la table data sur la BDD.
  * **Health:** Tous les dégâts physique et mécanique du véhicule.

<!-- tabs:end -->

### Rangement d'un véhicule

Cet export vous permet vérifier si le véhicule peut être rangé dans ce garage.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ boolean ]] = exports["sadoj-garages"]:CheckCanStoreVehicleByGarageId(vehicle --[[ vehicle ]], garageId --[[ integer ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez rentrer dans le garage.
  * **garageId:** ID du garage dans lequel vous souhaitez rentrer le véhicule.
* **Résultats:**
  * `true` si le véhicule peut être rangé dans ce garage, `false` sinon.

<!-- tabs:end -->

Cet export vous permet de ranger un véhicule dans un script à autre que `sadoj-garages`.

<!-- tabs:start -->

#### **Export (client)**

```lua
exports["sadoj-garages"]:StoreVehicle(vehicle --[[ vehicle ]], garageId --[[ integer ]])
```

* **Paramètres:**
  * **vehicle:** Le véhicule que vous souhaitez rentrer dans le garage.
  * **garageId:** ID du garage dans lequel vous souhaitez rentrer le véhicule.

<!-- tabs:end -->


### GetGaragesNameByGarageId

<!-- tabs:start -->
```lua
local Name --[[ string ]] = exports["sadoj-garages"]:GetGaragesNameByGarageId(garageId --[[ integer ]])
```
* **Paramètres:**
  * **garageId:** ID du garage duquel vous souhaitez récupérer le nom.

<!-- tabs:end -->

{docsify-updated}
