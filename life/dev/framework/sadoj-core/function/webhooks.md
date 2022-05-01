# sadoj-core - Function - Webhooks

> Auteur de la page: Thomas.

---

```lua
  content = --[[ string ]],
  username = --[[ string ]],
  avatar_url = --[[ string ]],
  embeds = {
    {
      title = --[[ string ]],
      description = --[[ string ]],
      url = --[[ string ]],
      color = --[[ number ]],
      fields = {
        {
          name = --[[ string ]],
          value = --[[ string ]]
        },
        ...
      },
      author = {
        name = --[[ string ]],
        url = --[[ string ]],
        icon_url = --[[ string ]],
      },
      footer = {
        text = --[[ string ]],
        icon_url = --[[ string ]],
      },
      timestamp = --[[ string ]],
      image = {
        url = --[[ string ]]
      },
      thumbnail = {
        url = --[[ string ]]
      },
    }
    ...
  }
```


#### SendWebhooks

<!-- tabs:start -->
#### **Export (server)**
```lua
exports["sadoj-core"]:SendWebhooks(Link --[[ string ]], Data --[[ table ]])
```

#### **Event (client)**
```lua
TriggerServerEvent("sadoj-core/server/functions/webhooks/SendWebhooks", Link --[[ string ]], Data --[[ table ]])
```
<!-- tabs:end -->