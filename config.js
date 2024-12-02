const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348077825595";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_50_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg3LFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk45Z2Z1amF1ZXRadTk3WTJRS2tQOE1tYUFsSjZDTGtHSTdURmp5SEI2Zm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRJQTBEbG1HUmRPZ1dmMmpNM3A1elFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzAyMzc0YzMtNWE0Ny00MDFlLTg2MDQtZGI4NzE2YThiMWYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgNzUsXG4gICAgICAxNzcsXG4gICAgICAxMTMsXG4gICAgICAyMDksXG4gICAgICA1NixcbiAgICAgIDUzLFxuICAgICAgMTA0LFxuICAgICAgMTU1LFxuICAgICAgMTkzLFxuICAgICAgNDMsXG4gICAgICAzMSxcbiAgICAgIDg2LFxuICAgICAgMjM3LFxuICAgICAgMjUzLFxuICAgICAgNzgsXG4gICAgICAxNDYsXG4gICAgICAxNDIsXG4gICAgICAxMzYsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMjA1LFxuICAgICAgNDMsXG4gICAgICAyMjgsXG4gICAgICA4NSxcbiAgICAgIDIyNSxcbiAgICAgIDkxLFxuICAgICAgMTUwLFxuICAgICAgNCxcbiAgICAgIDU2LFxuICAgICAgMjQ5LFxuICAgICAgNzQsXG4gICAgICA0NSxcbiAgICAgIDk0LFxuICAgICAgMjQ5LFxuICAgICAgMjQ5LFxuICAgICAgMTAzLFxuICAgICAgMTg4LFxuICAgICAgOTEsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUVRSlZIUk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRGVrWGdRNXIyMnVnWVlCeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5kWERrcnBaR1MxbEl2TUlYcHRLNHVoSnlEVFk0S1lnVmI3Z2RzNDFBREE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmNlMkRBYXN3NzZvZ1dFTE1ZUnBMc3JxVGRGYVFKb0dXdjZoRSszT3BIc3NXdndnUU5NbmJsZmFwM1lFSEtsM2ovYjZVc1pkM2dWWjV1Rk03VVNsRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRkxSNmVmaTFSREVpSVlFNDZNUCt5NFh5S1l5OWFvTm5aYmkzbmNVRlllaEVzMkFFTnFVVUhBZWpvZWpNdi9hV2xHcHdWTE9XZzVpNlFEZnAvT2J2Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNDAyMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOa0JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5rQi5qc29uIjogIntcImtleURhdGFcIjpcInNKcnVvWmlzSmMyTlV2QTFyalFtMlZrWFY3aTZlOUVwazVacVg2SjlWY0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxOTQ4ODMyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMTczMzE0MDE4Nzk3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "死_ＮＥＭＥＳＩＸ",
  packname: process.env.PACK_NAME || "E N M A",
  botname : process.env.BOT_NAME  || "E N M A",
  ownername:process.env.OWNER_NAME|| "死_ＮＥＭＥＳＩＸ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
