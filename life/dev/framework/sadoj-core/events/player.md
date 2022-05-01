# sadoj-core - Events - Joueur

> Auteur de la page:  Thomas.

---


### Événement d'écoute (events)

#### Assaie d'entrer dans un véhicule

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
  RegisterServerEvent("sadoj-core/server/events/player/EnteringAborted", function(PlayerServerId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

#### Monter dans un véhicule

Cet événement vous permettra de savoir quand un joueur monte dans un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/events/player/EnteredVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/events/player/EnteredVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->

#### Sortir d'un véhicule

Cet événement vous permettra de savoir quand un joueur sort d'un véhicule.
<!-- tabs:start -->
#### **Event (client)**
```lua
  RegisterNetEvent("sadoj-core/events/player/ExitVehicle", function(Vehicle, SeatId, NetId)

    --Mettez votre code ici

  end)
```
#### **Event (server)**
```lua
  RegisterServerEvent("sadoj-core/server/events/player/ExitVehicle", function(PlayerServerId, SeatId, NetId)

    --Mettez votre code ici

  end)
```
<!-- tabs:end -->


{docsify-updated}