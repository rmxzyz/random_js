-- Define Globals

getgenv().buildingFarm = true;
getgenv().bombPickup = true;
getgenv().autoGems = true;
getgenv().farmNoob = true; -- farms noob for gems
getgenv().unRagdoll = true; -- breaks cars lmfao
getgenv().meteors = true;

-- Services
local Players = game:GetService("Players");
local vim = game:GetService("VirtualInputManager");
local replicated = game:GetService("ReplicatedStorage")

-- LocalPlayer
local Plr = Players.LocalPlayer;
local Char = Plr.Character or Plr.CharacterAdded:Wait();
local Backpack = Plr.Backpack;

-- Bomb Table
local Bombs = {"GrenadePickup", "Sticky BombPickup", "Stun GrenadePickup", "Black Hole GrenadePickup", "Plasma GrenadePickup", "MeteoritePickup"}; --to auto pickup' em!

-- Gem Farming
task.spawn(function()
    while task.wait(0.1) do
        if getgenv().autoGems then
            for i,v in pairs(workspace:GetChildren()) do
                if v:IsA("Part") and v.Name == "Gem" then
                    v.CFrame = Char.HumanoidRootPart.CFrame
                end
            end
        end
    end
end)

-- General Farming
task.spawn(function()
    while task.wait(2) do
        if getgenv().buildingFarm then
            if not Backpack:FindFirstChild("Force Blast") and not Char:FindFirstChild("Force Blast") then
                return -- ends loop if you dont have force blast
            elseif Backpack:FindFirstChild("Force Blast") then
                Backpack:FindFirstChild("Force Blast").Parent = Char; --equip it
            else
                local buildingPart;
                for i,v in pairs(workspace.Buildings:GetDescendants()) do
                    if v:IsA("BasePart") then
                        buildingPart = v;
                        Char.HumanoidRootPart.CFrame = buildingPart.CFrame;
                    end
                end

                -- Fire Remotes
                local Location = Vector3.new(-197.49102783203125, 7.904170513153076, -395.29229736328125);
                Char:FindFirstChild("Force Blast").LocalActivated:FireServer(Location, buildingPart);
                Char:FindFirstChild("Force Blast").LocalDeactivated:FireServer(Location, buildingPart)
            end
        end
    end
end)

-- auto get up
task.spawn(function()
    while task.wait(0.1) do
        if getgenv().unRagdoll then
            replicated.Events.unRagdoll:FireServer(Char) --ez auto cheat lol
        end
    end
end)

task.spawn(function()
    while task.wait(0.1) do
        if getgenv().meteors then
            local StarterCharacter = workspace:FindFirstChild("StarterCharacter");
            local Punch = Backpack:FindFirstChild("Punch");

            if Punch then
                Punch.Parent = Char -- Equip Punch
            elseif StarterCharacter and Char:FindFirstChild("Punch") then

                for i,v in pairs(workspace.Meteorites:GetDescendants()) do
                    if v:IsA("Part") and v.Name == "RootPart" then
                        Char.HumanoidRootPart.CFrame = v.CFrame;
                        vim:SendMouseButtonEvent(4, 1, 0, true, game, 1);
                    end
                end
            end
        end
    end
end)

task.spawn(function()
    while task.wait(0.1) do
        if getgenv().bombPickup then
            for i,v in pairs(game.workspace:GetChildren()) do
                if v:IsA("Part") and table.find(Bombs, v.Name) then
                    v.CFrame = Char.HumanoidRootPart.CFrame;
                end
            end
        end
    end
end)

task.spawn(function()
    while task.wait(0.1) do
        if getgenv().farmNoob then
            local StarterCharacter = workspace:FindFirstChild("StarterCharacter");
            local Punch = Backpack:FindFirstChild("Punch"); -- punch people

            if Punch then
                Punch.Parent = Char -- Equip Punch
            elseif StarterCharacter and Char:FindFirstChild("Punch") then
                for i,v in pairs(StarterCharacter:GetChildren()) do
                    if v:IsA("Part") and v.Name == "HumanoidRootPart" then
                        Char.HumanoidRootPart.CFrame = v.CFrame * CFrame.new(0,0,2);
                        vim:SendMouseButtonEvent(4, 1, 0, true, game, 1);
                    end
                end
            end
        end
    end
end)
