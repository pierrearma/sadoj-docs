# sadoj-core - Function - String

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

#### **Export (serveur)**

```lua
local result --[[ table ]] = exports["sadoj-core"]:SplitStringByChunk(text --[[ string ]], chunkSize --[[ integer ]])
```
* **Paramètres:**
  * **text:** La chaîne de caractère à séparer.
  * **chunkSize:** La taille de chaque chunk.
<!-- tabs:end -->

```lua
-- exemple d'utilisation

local st = exports["sadoj-core"]:SplitStringByChunk("0123456789",3)
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
<!-- tabs:start -->
#### **Export (client)**
```lua
local result --[[ string ]] = exports["sadoj-core"]:GenerateUUID()
```

#### **Export (serveur)**
```lua
local result --[[ string ]] = exports["sadoj-core"]:GenerateUUID()
```
<!-- tabs:end -->