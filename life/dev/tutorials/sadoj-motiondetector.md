# Alarme anti-intrusion

> Auteur de la page: Thomas.

---

### Informations

* Auteurs du script: Thomas
* Emplacement: `[SCRIPT]/[INNOVATION]/sadoj-motiondetector`

## Étape 1 : Ouvrez le script sadoj-motiondetector

Voici l'emplacement du script pour les alarmes anti-intrusion `[SCRIPT]/[INNOVATION]/sadoj-motiondetector/`.


## Étape 2 : Choisissez le type d'alarme que vous souhaitez ajouter


* **Alarme d'intérieur:** (Recommandée)

Les alarmes d'intérieur sont fait pour les MLO où il n'y a pas de zones publiques, l'alarme se déclenchera automatiquement lorsque vous rentrerez à l'intérieur du MLO.

Cette option est recommandé car plus optimisé.

L'emplacement du fichier de configuration se trouve dans: `[SCRIPT]/[INNOVATION]/sadoj-motiondetector/Config/MotionDetector_config_InteriorAlarmsList.lua`.

* **Alarme customiser:**

Les alarmes customiser sont faits pour les endroits où il y a du public afin de séparer plusieurs zones (public et privé) dans le même bâtiment, l'alarme se déclenchera automatiquement lorsque vous rentrerez dans la zone défini.

L'emplacement du fichier de configuration se trouve dans: `[SCRIPT]/[INNOVATION]/sadoj-motiondetector/Config/MotionDetector_config_CustomAlarmsList.lua`.


## Étape 2 : Ajouter et configurer votre alarme

Ouvrez le fichier de configuration en fonction du type d'alarme que vous avez choisi ci-dessus.


* Liste des entreprises de sécurité: `Bobcat`, `DevilDogsSecurity`, `Securitas`, `BlackBirdSecurity`

* Liste des niveaux de sécurité:
  * Niveau 1:
  * Niveau 2:
  * Niveau 3:
  * Niveau 4:

* **Alarme d'intérieur:**

```lua
    ["exemple" --[[ string ]]] = { --Saisissez le nom de votre alarme à la place de 'exemple'. Attention le nom de l'alarme doit être unique.
        InteriorCoords = Coords --[[ vector3  ]], --Ici vous devez mettre les coordonnées du MLO, pour cela il suffit de se mettre à l'intérieur et de taper la commande CCV dans le F8.
        ControlPanel = { --Ici se trouve la liste de tous les panels de contrôle de votre alarme
            {Pos = Coords --[[ vector3  ]], Dist = ActivationDistance --[[ integer ]]}, --Panneau de contrôle N°1
            {Pos = Coords --[[ vector3  ]], Dist = ActivationDistance --[[ integer ]]}, --Panneau de contrôle N°2
            ...
        },
        AlarmSoundPos = { --Ici se trouve la liste de toutes les positions ou le son de l'alarme va sortir
            {Pos = Coords --[[ vector3  ]], Dist = SoundDistance --[[ integer ]]}, --Son N°1
            {Pos = Coords --[[ vector3  ]], Dist = SoundDistance --[[ integer ]]}, --Son N°2
            ...
        },
        Data = {
            IsDisabled = false --[[ boolean ]], --Ici vous définissez si l'alarme est désactivé par défaut ou non. (true = désactiver par défaut)
            EmergencyCall = true --[[ boolean ]], --Definitie si l'alarme appelle les services de secours. (Entreprise de sécurité, police ...)
            SilentAlarm = true, --Definitie si l'alarme est une alarme silencieuse. (true = alarme silencieuse)
	 	    SecurityCompanie = "Bobcat" --[[ string ]], --Définis quelle entreprise de sécurité est en charge de l'alarme (Voir ci-dessus pour la liste des entreprises de sécurité)
	 	    Standby = 15 --[[ integer ]], --Définis le temps de temporisation entre le moment où l'alarme à détecter une intrusion et le moment où l'alarme commence à sonner. (En seconde)
        },
        Acces = {
            Password = "Password" --[[ string ]], --Mot de passe pour accéder au panel de contrôle (nil pour désactiver, attention pour que les données biométriques fonctionne il faut avoir un mot de passe)
            SteamIdWhitelist = {"steam:000001", "steam:000002"} --[[ table ]], --Liste des personnes autorisées (Par SteamId) à utilisé le panel de contrôle sans taper le mot de passe
            JobWhitelist = {} --[[ table ]], --Liste des personnes autorisées (Par Job) à utilisé le panel de contrôle sans taper le mot de passe
            JobWhitelistWithGrade = {} --[[ table ]], --Liste des personnes autorisées (Par Job avec un grade) à utilisé le panel de contrôle sans taper le mot de passe
        },
        Hack = {
            EnabledHack = true, --Si l'alarme peut être hacker ou non
            Level = 1,
            LivesHack = 1, --Combien de vie à la personne pour hacker
            HackTime = 20 -- le temps que ça va prendre pour hacker
        },
        Call = {
            ForcedJobCall = {}, --NE PAS TOUCHER
            PosJobCall = Coords --[[ vector3  ]], --La position ou l'apelle sera marquer
            Phone = {CallNumberList = {"768-2616"}}, --Liste des numéros de téléphone à appeler
            Webhooks = {
                WebhooksList = {
                    "https://discord.com/api/webhooks/850855669188001794/ukyI5KKDNLY8U5f9z6WqYbd_JtU_1hZW2KEB_63zsh_ZsKbEnsxvcwx2n7",
                },
            },
        },
    }
```


* **Alarme customiser:**

```lua

```


{docsify-updated}