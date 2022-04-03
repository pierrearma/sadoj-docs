# sadoj-ui - Notifications

> Auteur de la page: Pierre.

---

Notifications au dessus de la carte.

Exemple d'une notification standard:

![](https://i.imgur.com/TJvqkYq.png)

Exemple d'une notitication avancée:

![](https://i.imgur.com/LviutDl.png)

## ShowNotification

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowNotification(text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
* **Retour:**
  * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowNotification", text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:ShowNotification", serverId --[[ integer ]], text --[[ string ]][, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

<!-- tabs:end -->

## ShowNotificationWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowNotificationWithTextEntry(entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowNotificationWithTextEntry", entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:ShowNotificationWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]] [, isImportant --[[ boolean ]][, saveHistory --[[ boolean ]][, backgroundColor --[[ integer ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **isImportant:** Si vrai, la notification clignote. `false` par défaut.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)

<!-- tabs:end -->

## ShowAdvancedNotification

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowAdvancedNotification(text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowAdvancedNotification", text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:ShowAdvancedNotification", serverId --[[ integer ]], text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

<!-- tabs:end -->

## ShowAdvancedNotificationWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowAdvancedNotificationWithTextEntry(entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowAdvancedNotificationWithTextEntry", entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:ShowAdvancedNotificationWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], textureDict --[[ string ]], textureName --[[ string ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **textureDict:** Nom du dictionnaire (YTD) de la texture. Pour certains YTD, il faut d'abord le charger en mémoire.
  * **textureName:** Nom de la texture.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

<!-- tabs:end -->

## ShowPedHeadshotNotification

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowPedHeadshotNotification(text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowPedHeadshotNotification", text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:ShowPedHeadshotNotification", serverId --[[ integer ]], text --[[ string ]], saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **text:** Texte de la notification (moins de 100 caractères).
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

<!-- tabs:end -->

## ShowPedHeadshotNotificationWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
local notifHandle --[[ integer ]] = exports["sadoj-ui"]:ShowPedHeadshotNotificationWithTextEntry(entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.
* **Retour:**
    * **notifHandle:** Identifiant de la notification (utile avec certaines Natives).

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:ShowPedHeadshotNotificationWithTextEntry", entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:ShowPedHeadshotNotificationWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]] saveHistory --[[ boolean ]], backgroundColor --[[ integer ]], ped --[[ Ped ]], isTransparent --[[ boolean ]], title --[[ string ]], subtitle --[[ string ]])
```

* **Paramètres:**
  * **entryKey:** entryKey du texte.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **saveHistory:** Si vrai, la notification est enregistrée dans l'historique. `false` par défaut.
  * **backgroundColor:** Couleur de fond de la notification. `nil` par défaut. [Voir les couleurs ici.](https://docs.fivem.net/docs/game-references/hud-colors/)
  * **ped:** Ped à afficher.
  * **isTransparent:** Si vrai, la texture est transparente. `false` par défaut.
  * **title:** Titre de la notification.
  * **subtitle:** Sous-titre de la notification.

<!-- tabs:end -->

{docsify-updated}
