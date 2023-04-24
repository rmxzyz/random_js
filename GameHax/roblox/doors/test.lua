local FakeDoors = workspace.FakeDoor
local Shelfs = workspace.Shelf
local Rooms = workspace.CurrentRooms
local devRooms = workspace.DevRooms
local Drops = workspace.Drops
local player = game.Players.LocalPlayer
local Character = player.Character
local Gold = player.Gold
local Luck = player.Luck
local Storage = game.ReplicatedStorage
local itemStorage = game:FindFirstChild('Storage')
--workspace.Eyes
--workspace.RushMoving
--workspace.Dread
local RoomNumber = 1;
--Rooms:GetChildren()['20'].Door.ForceOpen:Fire(true)
local ItemShop = player.PlayerGui.MainUI.ItemShop
local Items = ItemShop.Items
for i, value in ipairs(Items:GetChildren()) do
	if value then if value.ClassName == 'TextButton' then 
		value.Visible = true
	end
	end
end
function getKey(room) 
	if room then
		if tonumber(room.Name) then
			local Assets = room:FindFirstChild('Assets')
			if Assets then
				local Keys = {}
				for i, v in ipairs(Assets:GetChildren()) do
					if v.Name == 'KeyObtain' then
						table.insert(Keys, v)
					end
				end
				if #Keys == 1 then
					return Keys[1]
					else
					return Keys
				
				end
			end
		end
		else
			room = Rooms:GetChildren(room) or Rooms:FindFirstChild(room) or Rooms:FindFirstChild(tonumber(room))
				if room then
		if tonumber(room.Name) then
			local Assets = room:FindFirstChild('Assets')
			if Assets then
				local Keys = {}
				for i, v in ipairs(Assets:GetChildren()) do
					if v.Name == 'KeyObtain' then
						table.insert(Keys, v)
					end
				end
				if #Keys == 1 then
					return Keys[1]
					else
					return Keys
				
				end
			end
		end
		else
			return null
	end
	end
end
local frame = getKey(workspace.CurrentRooms:GetChildren()[1])
function bringToHumanoidRootPart(item)
item.CFrame = Character.HumanoidRootPart.CFrame 
end
local CloneKey = nil
--bringToHumanoidRootPart(frame.Hitbox)
function cloneKey() 
local Key = player.Backpack:FindFirstChild('Key', true) --at level 0, get the key and clone it.
if Key then
	CloneKey = Key:Clone()
	CloneKey.Parent = Storage
	return CloneKey
end
return null
end
function getWardrobes(room, firstOnly)
local wardrobes = {}
if room then  
	if room:FindFirstChild('Closet') then
		table.insert(wardrobes,1, room.Closet)
	end
	if room:FindFirstChild('Assets') then
		local assets = room.Assets
		for i, v in ipairs(assets:GetChildren()) do
			if v.Name == 'Wardrobe' then
				table.insert(wardrobes, v)
			end
		end
	end	
end
if not firstOnly or firstOnly == false then
return wardrobes
elseif firstOnly == true or firstOnly then
return wardrobes[1]
end
end
local Remotes = Storage.Bricks
local GameConfig = Storage.GameData
local GameStats = Storage.GameStats
local statsPlayer = GameStats:FindFirstChild('Player_'.. player.Name)
local Modules = Storage.ClientModules
local EntityModules = Modules.EntityModules
--local Entites = Storage.Entites
--local Products = include(Storage.Products)
--Remotes.GetGold:FireServer('carson22racecar',13)
--local getK = getKey(13)
--print(getK)
function getPaintings(room) 
	if tonumber(room) then 
		room = workspace.CurrentRooms:FindFirstChild(room)
	end
	if not room then
		room = workspace.CurrentRooms:FindFirstChild(tostring(room))
	end
	if room then 
		if room:FindFirstChild('Assets') then
			local asset = room:FindFirstChild('Assets')
			local paintings = asset:FindFirstChild('Paintings')
			if paintings then
				return paintings
			end
		end
	end
	
end
function cloneLighter()
local lighter = player.Backpack:FindFirstChild('Lighter')
if lighter then
	local clone = lighter:Clone()
	clone.Parent = Storage
	return clone
end
end
--local paintings = getPaintings(21)
function getPaintingPartInPainting(painting)
	if painting then
		return painting:FindFirstChild('Prop')
	end
end
--workspace.CurrentRooms:FindFirstChild('22').Door.Func_ForceOpen:Fire(...)
--workspace.CurrentRooms:FindFirstChild('22').Door.Func_Open:Fire(true)
--workspace.CurrentRooms:FindFirstChild('31').TriggerSeek:Fire(Character) --how do i use them bruh
