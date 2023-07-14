# sadoj-core - Événements - Joueur

> Auteur de la page:  Thomas.

---

### Événements d'écoutes

#### Essayer d'entrer dans un véhicule

Cet événement vous permettra de savoir quand un joueur essaie d'entrer dans un véhicule.

<!-- tabs:start -->

#### **Event (client)**

```lua
  RegisterNetEvent("sadoj-core/events/player/EnteringVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```

#### **Event (server)**

```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteringVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```

<!-- tabs:end -->

#### Monter dans un véhicule interrompu

Cet événement vous permettra de savoir quand un joueur interrompt le fait de vouloir monter dans un véhicule.

<!-- tabs:start -->

#### **Event (client)**

```lua
  RegisterNetEvent("sadoj-core/events/player/EnteringAborted", function()

    --Mettez votre code ici

  end)
```

#### **Event (server)**

```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteringAborted", function(serverId)

    --Mettez votre code ici

  end)
```

<!-- tabs:end -->

#### Monter dans un véhicule

Cet événement vous permettra de savoir quand un joueur monte dans un véhicule.

<!-- tabs:start -->

#### **Event (client)**

```lua
  RegisterNetEvent("sadoj-core/events/player/EnteredVehicle", function(vehicle, seatId, netId)

    --Mettez votre code ici

  end)
```

#### **Event (server)**

```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteredVehicle", function(serverId, seatId, netId)

    --Mettez votre code ici

  end)
```

<!-- tabs:end -->

#### Sortir d'un véhicule

Cet événement vous permettra de savoir quand un joueur sort d'un véhicule.

<!-- tabs:start -->

#### **Event (client)**

```lua
  RegisterNetEvent("sadoj-core/events/player/ExitVehicle", function(vehicle, seatId, netId)

    --Mettez votre code ici

  end)
```

#### **Event (server)**

```lua
  RegisterServerEvent("sadoj-core/server/events/player/ExitVehicle", function(serverId, seatId, netId)

    --Mettez votre code ici

  end)
```

<!-- tabs:end -->

#### Entrer dans le champ de vision d'un joueur

Cet événement vous permettra de savoir quand un joueur entre dans le champ de vision d'un autre joueur.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core:playerEnteredScope", function(serverId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

#### Sortir du champ de vision d'un joueur

Cet événement vous permettra de savoir quand un joueur sort du champ de vision d'un autre joueur.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core:playerLeftScope", function(serverId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

{docsify-updated}