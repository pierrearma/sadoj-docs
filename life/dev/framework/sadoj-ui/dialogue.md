# sadoj-ui - Dialogues

Un dialogue est un texte qui s'affiche en bas au centre de l'écran.

## DisplayDialogue

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:DisplayDialogue(text --[[ string ]][, duration --[[ integer ]][, drawImmetiatly --[[ boolean ]]]])
```

* **Paramètres:**
  * **text:** Texte du dialogue (moins de 100 caractères).
  * **duration:** Durée du dialogue (en millisecondes). 1000 par défaut.
  * **drawImmetiatly:** Si vrai, le dialogue est affiché immédiatement, sinon il est affiché a la suite de ceux déjà affichés. `false` par défaut.

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:DisplayDialogue", text --[[ string ]][, duration --[[ integer ]][, drawImmetiatly --[[ boolean ]]]])
```

* **Paramètres:**
  * **text:** Texte du dialogue (moins de 100 caractères).
  * **duration:** Durée du dialogue (en millisecondes). 1000 par défaut.
  * **drawImmetiatly:** Si vrai, le dialogue est affiché immédiatement, sinon il est affiché a la suite de ceux déjà affichés. `false` par défaut.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:server:DisplayDialogue", serverId --[[ integer ]], text --[[ string ]][, duration --[[ integer ]][, drawImmetiatly --[[ boolean ]]]])
```

* **Paramètres:**
  * **text:** Texte du dialogue (moins de 100 caractères).
  * **duration:** Durée du dialogue (en millisecondes). 1000 par défaut.
  * **drawImmetiatly:** Si vrai, le dialogue est affiché immédiatement, sinon il est affiché a la suite de ceux déjà affichés. `false` par défaut.

<!-- tabs:end -->

## DisplayDialogueWithTextEntry

<!-- tabs:start -->

### **Export (client)**

```lua
exports["sadoj-ui"]:DisplayDialogueWithTextEntry(entryKey --[[ string ]], params --[[ table ]][, duration --[[ integer ]][, drawImmetiatly --[[ boolean ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du dialogue.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **duration:** Durée du dialogue (en millisecondes). 1000 par défaut.
  * **drawImmetiatly:** Si vrai, le dialogue est affiché immédiatement, sinon il est affiché a la suite de ceux déjà affichés. `false` par défaut.

### **Event (client)**

```lua
TriggerEvent("sadoj-ui:client:DisplayDialogueWithTextEntry", entryKey --[[ string ]], params --[[ table ]][, duration --[[ integer ]][, drawImmetiatly --[[ boolean ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du dialogue.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **duration:** Durée du dialogue (en millisecondes). 1000 par défaut.
  * **drawImmetiatly:** Si vrai, le dialogue est affiché immédiatement, sinon il est affiché a la suite de ceux déjà affichés. `false` par défaut.

### **Event (serveur)**

```lua
TriggerNetEvent("sadoj-ui:server:DisplayDialogueWithTextEntry", serverId --[[ integer ]], entryKey --[[ string ]], params --[[ table ]][, duration --[[ integer ]][, drawImmetiatly --[[ boolean ]]]])
```

* **Paramètres:**
  * **entryKey:** entryKey du dialogue.
  * **params:** Tableau de chaînes de caractères. Tableau vide si aucun paramètre dans l'entryKey.
  * **duration:** Durée du dialogue (en millisecondes). 1000 par défaut.
  * **drawImmetiatly:** Si vrai, le dialogue est affiché immédiatement, sinon il est affiché a la suite de ceux déjà affichés. `false` par défaut.

<!-- tabs:end -->

{docsify-updated}
