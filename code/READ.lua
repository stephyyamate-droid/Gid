--- file content --- 
lua - m;Javc"=codingapi=;"{{[]];"vXvxbz"<>""
                            local Vs = file:Folder();
    git:Repository("File:InrLoad");
    fire:Fxl("string;Js.Folder.<string>;file");
    local language = fileKeep();
    local endStyle = In<"fileFolder;.Js.Js.k">;
  end
end
-- Sync AI API Server

local http = require("http")
local json = require("json")

local config = {
    name = "Sync AI",
    version = "1.0.0",
    port = 3000
}

local function response(req, res)
    local path = req.path

    if path == "/api/status" then
        res:setHeader("Content-Type", "application/json")

        res:finish(json.encode({
            name = config.name,
            version = config.version,
            online = true
        }))

    elseif path == "/api/chat" then
        res:setHeader("Content-Type", "application/json")

        res:finish(json.encode({
            message = "Hello! I'm Sync AI.",
            status = "success"
        }))

    else
        res.statusCode = 404
        res:finish(json.encode({
            error = "Endpoint not found"
        }))
    end
end

http.createServer(response):listen(config.port)

print(config.name .. " API running on port " .. config.port)
