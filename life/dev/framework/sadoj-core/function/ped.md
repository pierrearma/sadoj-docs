# sadoj-core - Fonctions - Ped

> Auteur de la page: Pierre.

---

#### GetAllPedsInScope

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetAllPedsInScope([ignoreList --[[ table ]]])
```

* **Paramètres:**
    * **ignoreList:** Liste des peds à ignorer (aucun par défaut).
* **Retour:**
    * **result:** Liste des peds.

<!-- tabs:end -->

#### GetClosestPedFromCoords

<!-- tabs:start -->

#### **Export (client)**

```lua
local closestPed --[[ Ped ]], closestDistance --[[ number ]] = exports["sadoj-core"]:GetClosestPedFromCoords(coords --[[ vector3 ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
    * **coords:** Coordonnées où chercher.
    * **ignoreList:** Liste des peds à ignorer (aucun par défaut).
* **Retour:**
    * **closestPed:** Le ped le plus proche, `-1` si aucun.
    * **closestDistance:** La distance entre le ped et les coordonnées, `-1` si aucun.

<!-- tabs:end -->

#### GetPedsInRadius

<!-- tabs:start -->

#### **Export (client)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:GetPedsInRadius(coords --[[ vector3 ]], radius --[[ number ]][, ignoreList --[[ table ]]])
```

* **Paramètres:**
    * **coords:** Coordonnées où chercher.
    * **radius:** Rayon de recherche.
    * **ignoreList:** Liste des peds à ignorer (aucun par défaut).
* **Retour:**
    * **result:** Liste des peds.

<!-- tabs:end -->

{docsify-updated}