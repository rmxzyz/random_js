local Bombs = {"GrenadePickup", "Sticky BombPickup", "Stun GrenadePickup", "Black Hole GrenadePickup", "Plasma GrenadePickup", "MeteoritePickup"};
function collectGems() --Gem
local elems = workspace:GetChildren()
for I, v in ipairs(elems) do
	if v.Name == 'Gem' then
		wait(0.3)
		game.Players.LocalPlayer.Character.HumanoidRootPart.Position = v.Position
	end
end
end
--collectGems()
local character = game.Players.LocalPlayer.Character
local Storage = game.ReplicatedStorage
function createCar(parent, position)
	local car = Storage.Car:Clone()
	car.Parent = parent
	car.PrimaryPart.Position = position
	car.Health.Value = 100 --GrenadePickup
	car.Destroyed.Value = false
	car.Owner.Value = player
end
function meteorite(pos)
	local clone = Storage.Meteorites.Meteorite:Clone()
	local crater = Storage.Meteorites.Crater:Clone()
	clone.Parent = workspace.Meteorites
	clone.MeteoriteScript.Position.Value = pos
	clone.MeteoriteScript.Player.Value = player
	clone.MeteoriteScript.Health.Value = 100
	clone.BottomBack.Transparency = 0
	clone.TopLeft.Transparency = 0
	clone.BottomLeft.Transparency = 0
	
	local UndergroundBurst = Instance.new("Sound", clone.RootPart)
	local HumanoidHit = Instance.new("Sound", clone.RootPart)
	local StoneSmash =Instance.new("Sound", clone.RootPart)
	local WallSmash = Instance.new("Sound", clone.RootPart)
	local Explosion = Instance.new("Sound", clone.RootPart)
	UndergroundBurst.Name = 'UndergroundBurst'
	UndergroundBurst.RollOffMode = 'Inverse' --enum
	UndergroundBurst.MaxDistance = 10000
	UndergroundBurst.SoundId = 'rbxassetid://3744400428'
	HumanoidHit.MaxDistance = 10000
	HumanoidHit.RollOffMode = 'Inverse' --enum
	HumanoidHit.Name = 'HumanoidHit'
	HumanoidHit.SoundId = 'rbxassetid://4306980885'
	StoneSmash.Name = 'StoneSmash'
	StoneSmash.MaxDistance=  10000
	StoneSmash.RollOffMode = 'Inverse' --enum
	StoneSmash.SoundId = 'rbxassetid://4306980885'
	WallSmash.Name = 'WallSmash'
	WallSmash.MaxDistance=  10000
	WallSmash.RollOffMode = 'Inverse' --enum
	WallSmash.SoundId = 'rbxassetid://4307207693'
	Explosion.Name = 'Explosion'
	Explosion.MaxDistance=  10000
	Explosion.RollOffMode = 'Inverse' --enum
	Explosion.SoundId = 'rbxassetid://3154829820'
	--UndergroundBurst.SoundGroup 'sfx'
	clone.BottomRight.Transparency = 0
	clone.TopBack.Transparency = 0
	clone.Core.Transparency = 0
	clone.TopRight.Transparency = 0
	clone.TopFront.Transparency = 0
	crater.Parent = clone
	clone:MoveTo(pos)
end
local Buildings = workspace.Buildings -- contains barrels
--meteorite(character.HumanoidRootPart.Position)
--createCar(workspace.Cars, character.HumanoidRootPart.Position)
Storage.Events.SandboxTutorial:FireServer(player)
	local player = game.Players.LocalPlayer

function completeQuests() --set values first.
--player.Quests:GetChildren()
for i, v in ipairs(player.Badges:GetChildren()) do
		if v then
			if v.ClassName == 'IntValue' or v.ClassName == 'NumberValue' then
			v.Value = 400
			else
				
				v.Value = true
		end
end 
end
end
function adminMenu()
	player.AdminLevel.Value = 100
end
completeQuests()
function gamepasses()
	local passes = player.Gamepasses
	for i,v in ipairs(passes:GetChildren()) do
		v.Value = true
	end
end
gamepasses()
function teleport(pos)
    if(typeof(pos) == 'Vector3') then
		pos = CFrame.new(pos)
	end
	character.HumanoidRootPart.CFrame = pos
end
--teleport(CFrame.new(708.5, 4.5, 767))
local Meteorites = workspace.Meteorites
local props = workspace.Props
local NPS = workspace.NPCs
function collectMet(m) 
 if m then

 end
end
local Char = game.Players.LocalPlayer.Character
function unRagdoll(character)
ReplicatedStorage.Events.unRagdoll:FireServer(character)
end
function ragdoll(character)
ReplicatedStorage.Events.Ragdoll:FireServer(character)
end
while true do
	wait()
	--unRagdoll(workspace.carson22racecar)
end
