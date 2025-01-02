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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_50_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxFZEtxbzB6ZGpoOEJRVE5mWEpVRkk4WXpwbEVTRFA1YW1oVkRzdTJNcmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQxTWdpbjIwUV95RDM4ai1NUkh0Z3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWY4NmNhNzAtNDRlZi00Yzc3LTg4MzMtNWVmYmFlY2I0NDgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDExNSxcbiAgICAgIDE0MSxcbiAgICAgIDEwOCxcbiAgICAgIDIyLFxuICAgICAgMjI4LFxuICAgICAgMTc0LFxuICAgICAgMjUwLFxuICAgICAgOCxcbiAgICAgIDk5LFxuICAgICAgODIsXG4gICAgICAyMTAsXG4gICAgICAxODgsXG4gICAgICAxOSxcbiAgICAgIDg1LFxuICAgICAgMTMyLFxuICAgICAgMjUzLFxuICAgICAgMTYwLFxuICAgICAgNzEsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDE0MSxcbiAgICAgIDM3LFxuICAgICAgNDksXG4gICAgICAxODcsXG4gICAgICAyMzUsXG4gICAgICAyMzcsXG4gICAgICAxOTQsXG4gICAgICA1LFxuICAgICAgMTIsXG4gICAgICAxMjEsXG4gICAgICAxNjcsXG4gICAgICAxNjksXG4gICAgICAxOTIsXG4gICAgICAxMDQsXG4gICAgICAyMDQsXG4gICAgICAyMDgsXG4gICAgICAyNTEsXG4gICAgICA4OSxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lLNmpyMEVFTHlqMjdzR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibmZ5TENSUGxrNFNRTSsvejUvSk5KcjFJRzAyQ0cxb2czR3RJQVd1OE9ncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTYmtuUXRrRC9wU01hclQrYStRYVVvMTFYSkg5RjluT2JoanNCcE1YQ0s2Wm8wQ2c4dHEvdngyZFZURHA4c1FjYy9QMG5NRitRRHpnalpzWDd1Q0lBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxcEduaFdRUmVscFBiWXdjWDM0OWUvTit2bzFmckFMQkR2OEdPdjQ3S0VyQktxVjRVMFRBcTRZbWhnVytCQnFqN0MySGQ1bnVOWkRoZk5ML1lBOFZEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODo5NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzc4MjU1OTU6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODQwMTk3XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "X",
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
