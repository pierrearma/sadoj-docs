# sadoj-core - Fonctions - Divers

> Auteur de la page: Pierre & Thomas.

---

#### SplitStringByChunk

Permet de séparer une chaîne de caractère en plusieurs dans un tableau.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:SplitStringByChunk(text --[[ string ]], chunkSize --[[ integer ]])
```

* **Paramètres:**
  * **text:** La chaîne de caractère à séparer.
  * **chunkSize:** La taille de chaque chunk.
* **Retour:**
  * **result:** Le tableau de chaînes de caractères.

#### **Export (serveur)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:SplitStringByChunk(text --[[ string ]], chunkSize --[[ integer ]])
```
* **Paramètres:**
  * **text:** La chaîne de caractère à séparer.
  * **chunkSize:** La taille de chaque chunk.
* **Retour:**
  * **result:** Le tableau de chaînes de caractères.

<!-- tabs:end -->

```lua
-- exemple d'utilisation
local st = exports["sadoj-core"]:SplitStringByChunk("0123456789", 3)
for i,v in ipairs(st) do
   print(i, v)
end
-- sortie
-- 1    012
-- 2    345
-- 3    678
-- 4    9
```

#### GenerateUUID

Permet de générer un UUID (Universally unique identifier).

> [!WARNING]
> Normalement, chaque UUID est unique. Il existe cependant une probabilité minime d'avoir le même UUID. Il est donc recommandé de ne pas utiliser cette fonction dans un système critique.

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ string ]] = exports["sadoj-core"]:GenerateUUID()
```

* **Retour:**
  * **result:** UUID généré.

#### **Export (serveur)**

```lua
local result --[[ string ]] = exports["sadoj-core"]:GenerateUUID()
```

* **Retour:**
  * **result:** UUID généré.

<!-- tabs:end -->

#### GenerateRandomString

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ string ]] = exports["sadoj-core"]:GenerateRandomString(length --[[ integer ]])
```

* **Paramètres:**
  * **length:** La longueur de la chaîne de caractère à générer.
* **Retour:**
  * **result:** La chaîne de caractère générée.

#### **Export (serveur)**

```lua
local result --[[ string ]] = exports["sadoj-core"]:GenerateRandomString(length --[[ integer ]])
```

* **Paramètres:**
  * **length:** La longueur de la chaîne de caractère à générer.
* **Retour:**
  * **result:** La chaîne de caractère générée.

<!-- tabs:end -->

#### Round

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:Round(number --[[ number ]][, decimals --[[ integer ]]])
```

* **Paramètres:**
  * **number:** La valeur à arrondir.
  * **decimals:** Le nombre de décimales à garder (0 par défaut).
* **Retour:**
  * **result:** La valeur arrondie.

#### **Export (serveur)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:Round(number --[[ number ]][, decimals --[[ integer ]]])
```

* **Paramètres:**
  * **number:** La valeur à arrondir.
  * **decimals:** Le nombre de décimales à garder (0 par défaut).
* **Retour:**
  * **result:** La valeur arrondie.

<!-- tabs:end -->

#### ToBoolean
<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:ToBoolean(value --[[ number / string / nil / boolean]])
```

* **Paramètres:**
  * **value:** La valeur que vous souhaitez transformer en boolean.
* **Retour:**
  * **result:** La valeur sous forme d'un boolean.

#### **Export (serveur)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:ToBoolean(value --[[ number / string / nil / boolean]])
```

* **Paramètres:**
  * **value:** La valeur que vous souhaitez transformer en boolean.
* **Retour:**
  * **result:** La valeur sous forme d'un boolean.
<!-- tabs:end -->

#### Tablelength
<!-- tabs:start -->
#### **Export (client)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:Tablelength(table --[[ table ]])
```

* **Paramètres:**
  * **table:** La table que vous souhaitez compter.
* **Retour:**
  * **result:** Le nombre d'éléments dans la table.

#### **Export (serveur)**

```lua
local result --[[ number ]] = exports["sadoj-core"]:Tablelength(table --[[ table ]])
```

* **Paramètres:**
  * **table:** La table que vous souhaitez compter.
* **Retour:**
  * **result:** Le nombre d'éléments dans la table.
<!-- tabs:end -->


#### GetGroundAtCoords

> [!ATTENTION]
> Pour que cet export fonctionne correctement il faut impérativement qu'il y ait un joueur à proximité. Sinon la fonction retournera nil.

<!-- tabs:start -->
#### **Export (client)**

```lua
local coords --[[ vector3 ]] = exports["sadoj-core"]:GetGroundAtCoords(coords --[[ vector3 ]], maxDist --[[ number ]], intersectWorld --[[ boolean ]], intersectVehicles --[[ boolean ]], intersectPedsSimpleCollision --[[ boolean ]], intersectPeds --[[ boolean ]], intersectObjects --[[ boolean ]], intersectWater --[[ boolean ]], intersectFoliage --[[ boolean ]], intersectEverything --[[ boolean ]])
```

* **Paramètres:**
  * **coords:** Les coordonnées où vous souhaitez obtenir le sol.
  * **maxDist:** La distance maximale à parcourir pour trouver le sol (`50.0` par défaut).
  * **intersectWorld:** Si vous souhaitez que la function prennent en compte le sol du le monde (`false` par défaut).
  * **intersectVehicles:** Si vous souhaitez que la function prennent en compte les véhicules (`false` par défaut).
  * **intersectPedsSimpleCollision:** Si vous souhaitez que la function prennent en compte les peds simple collision (`false` par défaut).
  * **intersectPeds:** Si vous souhaitez que la function prennent en compte les peds (`false` par défaut).
  * **intersectObjects:** Si vous souhaitez que la function prennent en compte les objets (`false` par défaut).
  * **intersectWater:** Si vous souhaitez que la function prennent en compte l'eau (`false` par défaut).
  * **intersectFoliage:** Si vous souhaitez que la function prennent en compte le feuillage (`false` par défaut).
  * **intersectEverything:** Si vous souhaitez que la function prennent en compte tout (`false` par défaut).
* **Retour:**
  * **result:** Les coordonnées du sol (`nil` si aucun sol).

<!-- tabs:end -->


{docsify-updated}