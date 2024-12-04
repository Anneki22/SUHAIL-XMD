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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_46_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJZU2RvRm5ka1lZd0I5MzBiNktORjFJalJQbS93aEp1N3IzckNxRXZCTUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NzgyNTU5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjgyN0ExOUI1M0JCMUIxMDdGNzY3OTU5NjVGNzQyRkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMzE5OTcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhUdzZ0b2YxUVd1N3hJay1kY2U2VndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTI1NGRkMTMtNDA0MS00YmQ1LWIxNjYtMzhmZmU0ZDc2ZGE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDUsXG4gICAgICAxMjcsXG4gICAgICA0MCxcbiAgICAgIDIwOCxcbiAgICAgIDI0LFxuICAgICAgMTI1LFxuICAgICAgMTMsXG4gICAgICAxODgsXG4gICAgICAxNTEsXG4gICAgICAxMzIsXG4gICAgICAxNDMsXG4gICAgICAxMjksXG4gICAgICAxMTEsXG4gICAgICA2NixcbiAgICAgIDM5LFxuICAgICAgMTYyLFxuICAgICAgMTUsXG4gICAgICA2MixcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDEyOCxcbiAgICAgIDY4LFxuICAgICAgMTkwLFxuICAgICAgMjM4LFxuICAgICAgMjI3LFxuICAgICAgMjM3LFxuICAgICAgMjQzLFxuICAgICAgMTMzLFxuICAgICAgMTI0LFxuICAgICAgMTc5LFxuICAgICAgNDEsXG4gICAgICAxOTgsXG4gICAgICAxNjQsXG4gICAgICAyNyxcbiAgICAgIDExNyxcbiAgICAgIDIxNCxcbiAgICAgIDQyLFxuICAgICAgMTU2LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1lKNUhDMUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT3M0aWtRbXJyQnVnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJGTTNmS1FJU1dHYU1CMjlMb0MvR0drR2s1cnk3V0tLaU9DVzc5TUJ4R0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieENWZ3R5V0tBcDRHWGdaSTYxN2UrNEIvdzBXcEJiaTJqcm9Kb0d3Q2RPbHF1NUNCQlc4a2QreDQ1a2M1TzVFYXNkVHlFOEtFUFl6LzFySzk5bldXQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHlZaE8rL1grbFkxL2wzcUFUcjdpMzZoSXNuR2E3YVNpSTJmUDJQaGdIbXRQSzV6VEVuVGgyTEd5NUpHMWtWM3NKTnhSRE9tOUVJeGVOd0RqeWpaanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzMxOTk2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1SLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
