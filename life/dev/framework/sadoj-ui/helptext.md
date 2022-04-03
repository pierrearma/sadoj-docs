# sadoj-ui - Textes d'aide

> Auteur de la page: Pierre.

---

Texte d'aide qui s'affiche en haut à gauche de l'écran.

## DisplayHelpText

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:DisplayHelpText(text --[[ string ]][, beep --[[ boolean ]]])
```

* **Paramètres:**
  * **text:** Texte d'aide (moins de 100 caractères).
  * **beep:** Si vrai, un beep sonore est joué. `false` par défaut.

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:DisplayHelpText", text --[[ string ]][, beep --[[ boolean ]]])
```

* **Paramètres:**
  * **text:** Texte d'aide (moins de 100 caractères).
  * **beep:** Si vrai, un beep sonore est joué. `false` par défaut.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:DisplayHelpText", serverId --[[ integer ]], text --[[ string ]][, beep --[[ boolean ]]])
```

* **Paramètres:**
  * **text:** Texte d'aide (moins de 100 caractères).
  * **beep:** Si vrai, un beep sonore est joué. `false` par défaut.

<!-- tabs:end -->

## DisplayHelpTextWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:DisplayHelpTextWithTextEntry(entryKey --[[ string ]], params --[[ table ]][, beep --[[ boolean ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du dialogue.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **beep:** Si vrai, un beep sonore est joué. `false` par défaut.

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:DisplayHelpTextWithTextEntry", entryKey --[[ string ]], params --[[ table ]][, beep --[[ boolean ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du dialogue.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **beep:** Si vrai, un beep sonore est joué. `false` par défaut.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:client:DisplayHelpTextWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]][, beep --[[ boolean ]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du dialogue.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **beep:** Si vrai, un beep sonore est joué. `false` par défaut.

<!-- tabs:end -->

{docsify-updated}
