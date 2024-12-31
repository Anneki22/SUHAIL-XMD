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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_37_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NixcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsaVlFM2xvSCt2ZUxZQ0Fxc1NyN3RyUWovdVBsLzN2ZStWN1V2OFRGMFF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyMXpYVmM4SFM4LVFFWnY5QkFxeEtRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjZjE5ZDcxLWNmZjAtNGFjNS04M2E1LTdjOGYxODE2OTVlZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxNTEsXG4gICAgICAxMTksXG4gICAgICAzNSxcbiAgICAgIDg4LFxuICAgICAgMTUzLFxuICAgICAgMTc5LFxuICAgICAgMTAyLFxuICAgICAgMjI4LFxuICAgICAgMTgzLFxuICAgICAgOTgsXG4gICAgICAxODgsXG4gICAgICAxODcsXG4gICAgICAyMzMsXG4gICAgICAxOTIsXG4gICAgICA4NyxcbiAgICAgIDE2MCxcbiAgICAgIDIwMCxcbiAgICAgIDQ4LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjI4LFxuICAgICAgMzQsXG4gICAgICAxNzIsXG4gICAgICAxNjksXG4gICAgICAzMSxcbiAgICAgIDIyNCxcbiAgICAgIDE4NCxcbiAgICAgIDgzLFxuICAgICAgNTAsXG4gICAgICA1NSxcbiAgICAgIDE5MSxcbiAgICAgIDkyLFxuICAgICAgNyxcbiAgICAgIDU4LFxuICAgICAgODcsXG4gICAgICA5MyxcbiAgICAgIDE3NCxcbiAgICAgIDgsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTEg2SEZINFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3NzgyNTU5NTo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuatu1/vvK7vvKXvvK3vvKXvvLPvvKnvvLhcIixcbiAgICBcImxpZFwiOiBcIjYwOTc2MDg2OTMzNzM4Ojg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lLNmpyMEVFT2IyenJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibmZ5TENSUGxrNFNRTSsvejUvSk5KcjFJRzAyQ0cxb2czR3RJQVd1OE9ncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3WGZ5OW9VUlZtUzJpMnRwb053OXBLV1FvaW9qeGN0ZnVyYnhIazQwYTdLWHJvbVQ0NlZzdDdNZ3BwUE1sUUE4ZjhSTEo5VFcxNjhOVkx5NW03QUdDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXOUZST3dZdTNCajdtNUpjeVVHajdBZ2s3NmVBWUp5TlhxRStkRkZ4T2RVNGVCZFZDN3FWNGRnNkYrcEFwSmZ2dWlsV0FoZzloOFE1aThTSGNYYXVDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc3ODI1NTk1Ojg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTYzNzg2NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "x",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "死_ＮＥＭＥＳＩＸ",
  packname: process.env.PACK_NAME || "Suhail-XMD",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
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
