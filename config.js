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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_38_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHbXVNQVUzeEFNVnZTcTQ1amIvVEh4ZzZsMWNNb20xRkU5b1krQTc3dVpBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNzc4MjU1OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA1NTVCQzE4NjkyMEM4Q0NDNDhBRjlERjAwQUQ4RDdDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTU0MzEyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzTU9iWlRTVFRWS1gtUnN6UVhqUEF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY2ZWYxZjNhLWZjYWEtNGQ5OS05MzcyLWM1YzU0ZmM2YjhiNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDE3MixcbiAgICAgIDU2LFxuICAgICAgMzksXG4gICAgICAyMyxcbiAgICAgIDU4LFxuICAgICAgMjAyLFxuICAgICAgMTA3LFxuICAgICAgMjM2LFxuICAgICAgMzksXG4gICAgICAxMCxcbiAgICAgIDEyMixcbiAgICAgIDI1NSxcbiAgICAgIDEzMCxcbiAgICAgIDIwNSxcbiAgICAgIDE4MCxcbiAgICAgIDg3LFxuICAgICAgMTE4LFxuICAgICAgMTk0LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMjM0LFxuICAgICAgNDksXG4gICAgICA5MixcbiAgICAgIDE0NyxcbiAgICAgIDMyLFxuICAgICAgODQsXG4gICAgICA2OSxcbiAgICAgIDE0OSxcbiAgICAgIDM1LFxuICAgICAgMjE2LFxuICAgICAgMjQ2LFxuICAgICAgNTcsXG4gICAgICAxNixcbiAgICAgIDcsXG4gICAgICA4MyxcbiAgICAgIDI0MixcbiAgICAgIDI1MixcbiAgICAgIDc5LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVZBREU4UlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR3AzY1lCRU12MzJyZ0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZFczhoWnhvNDdJYXhEOEJYamw0Z0JXS2RCZFRzYjdlNHpBUTc4d0I4aW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0pSOW5sc3dQWGxTaUJrSTllenMvUGFHbWRlMEVLSDk5Q0l6MGtvd0pEa0RuS0xiYldYcThHaWY2eEJraVAyaHpSQ2cxalpIeDBXZ0JvRDNUbjhJQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVlByVEQ5WnoyUkprditGeHFLWDEwTVZPMWU2emlVMFRsdGIyZHhod2FGbWs0eGJNQllaVWxwN1VTSXVETWJyWG1TaFpWOHN1K1c4bmF3d0FXVXF2Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1NDMxMTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGcmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZyaC5qc29uIjogIntcImtleURhdGFcIjpcIjZDZ21wMURVY05ydnBWZHRkWlo5S3QwZGZRRGhXMXg2dUp4T3MwZHZEMDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE2NzY1MTM3LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk1NDMwNzA4ODFcIn0iCn0="  // PUT your SESSION_ID 


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
