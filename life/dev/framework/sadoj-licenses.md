# sadoj-licenses

> Auteur de la page: Thomas.

---

## Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[BASE]/sadoj-licenses`

## Utilisation

### Récupération

#### GetPlayerLicenses
<!-- tabs:start -->
#### **Event (client)**
```lua
local result --[[ table ]] = exports["sadoj-licenses"]:GetPlayerLicenses(player --[[ number or string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
* **Retour:**
  * **result:** Les licences du joueur.

#### **Event (serveur)**
```lua
local result --[[ table ]] = exports["sadoj-licenses"]:GetPlayerLicenses(player --[[ number or string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
* **Retour:**
  * **result:** Les licences du joueur.
<!-- tabs:end -->

### Vérification

#### PlayerHasLicenseFromName
<!-- tabs:start -->
#### **Event (client)**
```lua
local hasLicense --[[ boolean ]], uuid --[[ string ]] = exports["sadoj-licenses"]:PlayerHasLicenseFromName(player --[[ number or string ]], licenseName --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
* **Retour:**
  * **hasLicense:** Si le joueur a la licence.
  * **uuid:** L'identifiant de la licence.

#### **Event (serveur)**
```lua
local hasLicense --[[ boolean ]], uuid --[[ string ]] = exports["sadoj-licenses"]:PlayerHasLicenseFromName(player --[[ number or string ]], licenseName --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
* **Retour:**
  * **hasLicense:** Si le joueur a la licence.
  * **uuid:** L'identifiant de la licence.
<!-- tabs:end -->

#### PlayerHasLicenseFromUuid
<!-- tabs:start -->
#### **Event (client)**
```lua
local hasLicense --[[ boolean ]], uuid --[[ string ]] = exports["sadoj-licenses"]:PlayerHasLicenseFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
* **Retour:**
  * **hasLicense:** Si le joueur a la licence.
  * **uuid:** L'identifiant de la licence.

#### **Event (serveur)**
```lua
local hasLicense --[[ boolean ]], uuid --[[ string ]] = exports["sadoj-licenses"]:PlayerHasLicenseFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
* **Retour:**
  * **hasLicense:** Si le joueur a la licence.
  * **uuid:** L'identifiant de la licence.
<!-- tabs:end -->

### Ajout

#### AddPlayerLicense
<!-- tabs:start -->
#### **Event (client)**
```lua
local uuid --[[ string ]] = exports["sadoj-licenses"]:AddPlayerLicense(player --[[ number or string ]], licenseName --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
* **Retour:**
  * **uuid:** L'identifiant de la licence.

#### **Event (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-licenses"]:AddPlayerLicense(player --[[ number or string ]], licenseName --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
* **Retour:**
  * **uuid:** L'identifiant de la licence.
<!-- tabs:end -->

#### AddFakePlayerLicense
<!-- tabs:start -->
#### **Event (client)**
```lua
local uuid --[[ string ]] = exports["sadoj-licenses"]:AddFakePlayerLicense(player --[[ number or string ]], licenseName --[[ string ]], lastName --[[ string ]], firstName --[[ string ]], birthDate --[[ string ]], sex --[[ string ]], date --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **lastName:** Le nom de famille.
  * **firstName:** Le prénom.
  * **birthDate:** La date de naissance.
  * **sex:** Le sexe.
  * **date:** La date d'obtention de la licence.
* **Retour:**
  * **uuid:** L'identifiant de la licence.

#### **Event (serveur)**
```lua
local uuid --[[ string ]] = exports["sadoj-licenses"]:AddFakePlayerLicense(player --[[ number or string ]], licenseName --[[ string ]], lastName --[[ string ]], firstName --[[ string ]], birthDate --[[ string ]], sex --[[ string ]], date --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **lastName:** Le nom de famille.
  * **firstName:** Le prénom.
  * **birthDate:** La date de naissance.
  * **sex:** Le sexe.
  * **date:** La date d'obtention de la licence.
* **Retour:**
  * **uuid:** L'identifiant de la licence.
<!-- tabs:end -->


### Suppression

#### RemovePlayerLicenseFromName
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:RemovePlayerLicenseFromName(player --[[ number or string ]], licenseName --[[ string ]], quantity --[[ number ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **quantity:** La quantité de licence à supprimer.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:RemovePlayerLicenseFromName(player --[[ number or string ]], licenseName --[[ string ]], quantity --[[ number ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseName:** Le nom de la licence.
  * **quantity:** La quantité de licence à supprimer.
<!-- tabs:end -->

#### RemovePlayerLicenseFromUuid
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:RemovePlayerLicenseFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:RemovePlayerLicenseFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
<!-- tabs:end -->


### Modification

#### SetPlayerLicenseStateFromUuid
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseStateFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]], state --[[ number ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **state:** Le nouveau statut de la licence.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseStateFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]], state --[[ number ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **state:** Le nouveau statut de la licence.
<!-- tabs:end -->

#### SetPlayerLicenseExpirationDateFromUuid
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseExpirationDateFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]], date --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **date:** La nouvelle date d'expiration de la licence.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseExpirationDateFromUuid(player --[[ number or string ]], licenseUuid --[[ string ]], date --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **date:** La nouvelle date d'expiration de la licence.
<!-- tabs:end -->

#### SetPlayerLicenseEndOfDateOfSuspension
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseEndOfDateOfSuspension(player --[[ number or string ]], licenseUuid --[[ string ]], date --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **date:** La date de fin de suspension de la licence.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseEndOfDateOfSuspension(player --[[ number or string ]], licenseUuid --[[ string ]], date --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **date:** La date de fin de suspension de la licence.
<!-- tabs:end -->

### Metadata

#### SetPlayerLicenseMetadata
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseMetadata(player --[[ number or string ]], licenseUuid --[[ string ]], metadataKey --[[ string ]], metadataDisplayed --[[ string ]], metadataCanRemove --[[ boolean ]], metadataValue --[[ any ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **metadataKey:** La clé de la métadonnée.
  * **metadataDisplayed:** Le nom de la métadonnée.
  * **metadataCanRemove:** Si la métadonnée peut être supprimée.
  * **metadataValue:** La valeur de la métadonnée.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:SetPlayerLicenseMetadata(player --[[ number or string ]], licenseUuid --[[ string ]], metadataKey --[[ string ]], metadataDisplayed --[[ string ]], metadataCanRemove --[[ boolean ]], metadataValue --[[ any ]])
```
* **Paramètres:**
  * **player:**Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **metadataKey:** La clé de la métadonnée.
  * **metadataDisplayed:** Le nom de la métadonnée.
  * **metadataCanRemove:** Si la métadonnée peut être supprimée.
  * **metadataValue:** La valeur de la métadonnée.
<!-- tabs:end -->

#### RemovePlayerLicenseMetadata
<!-- tabs:start -->
#### **Event (client)**
```lua
exports["sadoj-licenses"]:RemovePlayerLicenseMetadata(player --[[ number or string ]], licenseUuid --[[ string ]], metadataKey --[[ string ]])
```
* **Paramètres:**
  * **player:** Le joueur (pas le Server Id) ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **metadataKey:** La clé de la métadonnée.

#### **Event (serveur)**
```lua
exports["sadoj-licenses"]:RemovePlayerLicenseMetadata(player --[[ number or string ]], licenseUuid --[[ string ]], metadataKey --[[ string ]])
```
* **Paramètres:**
  * **player:** Le Server Id du joueur ou l'identifiant du joueur.
  * **licenseUuid:** L'identifiant de la licence.
  * **metadataKey:** La clé de la métadonnée.
<!-- tabs:end -->

{docsify-updated}
