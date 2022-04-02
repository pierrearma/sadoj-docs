# pmms

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas & kibukj
* Emplacement: `[SCRIPT]/[LOISIR]/pmms`



### Démarrer le lecteur multimédia

Commence à lire un lecteur multimédia sur une entité en réseau, en utilisant son ID réseau.
<!-- tabs:start -->
#### **CallBack (client)**
```lua
  local handle = exports["sadoj-callbacks"]:TriggerServerCallback("pmms/server/startByNetworkId", netId --[[ integer ]], options --[[ table ]])
```

* **Paramètres:**
  * **netId:** Le NetId de l'entité sur laquelle vous souhaitez démarrer un lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.

#### **Export (serveur)**
```lua
  local handle = exports['pmms']:startByNetworkId(netId --[[ integer ]], options --[[ table ]])
```

* **Paramètres:**
  * **netId:** Le NetId de l'entité sur laquelle vous souhaitez démarrer un lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.
<!-- tabs:end -->

Commence à lire un lecteur multimédia en utilisant des coordonnées.
<!-- tabs:start -->
#### **CallBack (client)**
```lua
  local handle = exports["sadoj-callbacks"]:TriggerServerCallback("pmms/server/startByCoords", Coords --[[ vector3 ]], options --[[ table ]])
```

* **Paramètres:**
  * **Coords:** Les coordonnées à laquelle vous souhaitez démarrer le lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.

#### **Export (serveur)**
```lua
  local handle = exports['pmms']:startByCoords(x --[[ number ]], y --[[ number ]], z --[[ number ]], options --[[ table ]])
```

* **Paramètres:**
  * **x, y, z:** Les coordonnées à laquelle vous souhaitez démarrer le lecteur multimédia.
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.
<!-- tabs:end -->


Commence à jouer quelque chose sur un écran.
<!-- tabs:start -->
#### **CallBack (client)**
```lua
  local handle = exports["sadoj-callbacks"]:TriggerServerCallback("pmms/server/startScaleform", scaleform --[[ scaleform ]], options --[[ table ]])
```

* **Paramètres:**
  * **scaleform:**
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.

#### **Export (serveur)**
```lua
  local handle = exports['pmms']:startScaleform(scaleform --[[ scaleform ]], options --[[ table ]])
```

* **Paramètres:**
  * **scaleform:**
  * **options:** Voir ci-dessus pour obtenir le tableau complet contenant toutes les options.
<!-- tabs:end -->

### Stopper le lecteur multimédia

En cours...

### Gérer le lecteur multimédia

En cours...

{docsify-updated}