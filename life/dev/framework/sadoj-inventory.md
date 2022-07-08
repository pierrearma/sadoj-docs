# sadoj-inventory

> Auteur de la page: Pierre

---

## Informations

* Auteurs du script: Pierre
* Emplacement: `[SCRIPT]/[BASE]/sadoj-inventory`

Ce script contient de système d'inventaire dont:

- L'inventaire des joueurs
- L'inventaire des véhicules
- Les coffres
- Les magasins
- Le système de fabrication

La configuration ne sera pas documentée ici, il faudra vous référer directement aux fichiers de configuration.

Chaque inventaire possède un nom (ou identifiant) unique et bien particulier. Chaque coffre, inventaire de joueurs et inventaire de véhicules possèdent un nom unique.

De manière générale, il est préférable dans vos scripts de coder ce qui concerne l'inventaire côté serveur.

Un inventaire est un simple tableau d'items. Chaque item est un tableau contenant les informations suivantes:

- ToDo

## Utilisation

### Récupérer le nom d'un inventaire

#### Les joueurs

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetPlayerInventoryName(player --[[ Player ]])
```

* **Paramètres:**
  * **player:** Joueur dont on veut récupérer le nom de l'inventaire.
* **Résultat:**
  * **name:** Nom de l'inventaire.

<!-- tabs:end -->

### Les véhicules

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetVehicleInventoryName(vehicle --[[ Vehicle ]])
```

* **Paramètres:**
  * **vehicle:** Véhicule dont on veut récupérer le nom de l'inventaire.
* **Résultat:**
    * **name:** Nom de l'inventaire.

<!-- tabs:end -->

### Les coffres

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local name --[[ string ]] = exports["sadoj-inventory"]:GetSafeInventoryName(safe --[[ string ]])
```

* **Paramètres:**
  * **safe:** Nom du coffre dont on veut récupérer le nom de l'inventaire.
* **Résultat:**
    * **name:** Nom de l'inventaire.

<!-- tabs:end -->

## Récupérer un inventaire

> [!ATTENTION]
> Cet export est réservé uniquement au script necessitant un traitement particulier de l'inventaire. Il est préférable d'utiliser les autres exports.

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local inventory --[[ table ]] = exports["sadoj-inventory"]:GetInventoryFromName(name --[[ string ]])
```

* **Paramètres:**
  * **name:** Nom de l'inventaire.
* **Résultat:**
    * **inventory:** Inventaire.

<!-- tabs:end -->

### Récupérer la quantité d'un item dans un inventaire

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local quantity --[[ number ]] = exports["sadoj-inventory"]:GetInventoryItemCountFromName(inventoryName --[[ string ]], itemName --[[ string ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
* **Résultat:**
    * **quantity:** Quantité de l'item.

<!-- tabs:end -->

## Savoir si un item est présent dans un inventaire avec une quantité spécifique

<!-- tabs:start -->

### **Export (client & serveur)**

```lua
local isPresent --[[ boolean ]] = exports["sadoj-inventory"]:IsInventoryHasItemCountFromName(inventoryName --[[ string ]], itemName --[[ string ]], count --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **count:** Quantité de l'item.
* **Résultat:**
    * **isPresent:** Booléen indiquant si l'inventaire contient l'item avec la quantité spécifiée.

<!-- tabs:end -->

## Supprimer un item dans un inventaire

### Depuis l'UUID de l'item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:RemoveItemFromInventoryFromUuid", inventoryName --[[ string ]], uuid --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **uuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:client:RemoveItemFromInventoryFromUuid", inventoryName --[[ string ]], uuid --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **uuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.

<!-- tabs:end -->

### Depuis le nom de l'item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:RemoveItemFromInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:client:RemoveItemFromInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

<!-- tabs:end -->

## Ajouter un item dans un inventaire

### Depuis un item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:AddItemToInventory", inventoryName --[[ string ]], item --[[ table ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **item:** Item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:client:AddItemToInventory", inventoryName --[[ string ]], item --[[ table ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **item:** Item.

<!-- tabs:end -->

### Depuis le nom de l'item

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:AddItemToInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:client:AddItemToInventoryFromName", inventoryName --[[ string ]], itemName --[[ string ]], quantity --[[ number ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemName:** Nom de l'item.
  * **quantity:** Quantité de l'item.

<!-- tabs:end -->

## Définir les métadonnées d'un item dans un inventaire

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:SetItemMetadataToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], metadataKey --[[ string ]], metadataValue --[[ any ]], metadataDisplayed --[[ boolean ]], quantity --[[ number|nil ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemUuid:** UUID de l'item.
  * **metadataKey:** Clé de la métadonnée.
  * **metadataValue:** Valeur de la métadonnée.
  * **metadataDisplayed:** Booléen indiquant si la métadonnée est affichée.
  * **quantity:** Quantité de l'item. Si nil, cela définit la métadonnée sur tout l'item. Si non nil, cela définit la métadonnée sur la quantité spécifiée en créant donc un nouvel item.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:client:SetItemMetadataToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], metadataKey --[[ string ]], metadataValue --[[ any ]], metadataDisplayed --[[ boolean ]], quantity --[[ number|nil ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire.
  * **itemUuid:** UUID de l'item.
  * **metadataKey:** Clé de la métadonnée.
  * **metadataValue:** Valeur de la métadonnée.
  * **metadataDisplayed:** Booléen indiquant si la métadonnée est affichée.
  * **quantity:** Quantité de l'item. Si nil, cela définit la métadonnée sur tout l'item. Si non nil, cela définit la métadonnée sur la quantité spécifiée en créant donc un nouvel item.

<!-- tabs:end -->

## Transférer un item d'un inventaire à un autre

<!-- tabs:start -->

### **Event (client)**

```lua
TriggerServerEvent("sadoj-inventory:server:TransferItemFromInventoryToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], quantity --[[ number ]], targetInventoryName --[[ string ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire source.
  * **itemUuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.
  * **targetInventoryName:** Nom de l'inventaire cible.

### **Event (serveur)**

```lua
TriggerEvent("sadoj-inventory:client:TransferItemFromInventoryToInventoryFromUuid", inventoryName --[[ string ]], itemUuid --[[ string ]], quantity --[[ number ]], targetInventoryName --[[ string ]])
```

* **Paramètres:**
  * **inventoryName:** Nom de l'inventaire source.
  * **itemUuid:** UUID de l'item.
  * **quantity:** Quantité de l'item.
  * **targetInventoryName:** Nom de l'inventaire cible.

<!-- tabs:end -->

## Écouter lors d'une action sur un item

<!-- tabs:start -->

### **Client**

```lua
RegisterNetEvent("sadoj-inventory:itemAction", function(action --[[ string ]], item --[[ table ]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **action:** Action (par exemple `give`, `throw`, `use`, etc...).
  * **item:** Item.

### **Serveur**

```lua
RegisterServerEvent("sadoj-inventory:itemAction", function(action --[[ string ]], item --[[ table ]])
  -- Votre code ici.
end)
```

* **Paramètres:**
  * **action:** Action (par exemple `give`, `throw`, `use`, etc...).
  * **item:** Item.

<!-- tabs:end -->