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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_40_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpaQ1RZTXBhOUVWa3BYdzFXdGlMbVJFbXNMeFIvNEl0b1pXUGErcVU4S009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInI3TzJmZVI4UUpTc0JfUC1pZmdOQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2FlOTQ5MTktNjE0MC00YmFhLThjZWYtMGM2YjZkZGFhYWQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDIyLFxuICAgICAgMTAsXG4gICAgICAxNTMsXG4gICAgICAxNzQsXG4gICAgICA0OCxcbiAgICAgIDkyLFxuICAgICAgMTM5LFxuICAgICAgMjUwLFxuICAgICAgMTg1LFxuICAgICAgOTksXG4gICAgICAxMTYsXG4gICAgICAxMjUsXG4gICAgICAyNTMsXG4gICAgICAxMjAsXG4gICAgICA1NCxcbiAgICAgIDgsXG4gICAgICAxNDcsXG4gICAgICAyMTMsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMTI3LFxuICAgICAgNzYsXG4gICAgICAxMzMsXG4gICAgICAyMDIsXG4gICAgICAxMDksXG4gICAgICAzMixcbiAgICAgIDExLFxuICAgICAgMTkzLFxuICAgICAgMTUsXG4gICAgICAyMjksXG4gICAgICAxMTIsXG4gICAgICAxNjksXG4gICAgICAyMDksXG4gICAgICAxNTUsXG4gICAgICAyMDcsXG4gICAgICAyMDIsXG4gICAgICAzNSxcbiAgICAgIDE3MixcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENVY5TVRYWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3NzgyNTU5NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5q27X++8ru+8pe+8re+8pe+8s++8qe+8uFwiLFxuICAgIFwibGlkXCI6IFwiNjA5NzYwODY5MzM3Mzg6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR3AzY1lCRUsrWDJiZ0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZFczhoWnhvNDdJYXhEOEJYamw0Z0JXS2RCZFRzYjdlNHpBUTc4d0I4aW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidG0zVjNoU3kwU2orb281SlRmakZ2TWdJNHVJaFo4L2pHaWZ5RWw5dlpYak5yVkVoN1I0NTU5dFY1ZXhxc2pxbTVZanFTd0doa21QeEtSSXFYRlN1REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWSt2c2F3UUhIMXNSRlF1S1haZVIyb1RVdWZHSlFYY0JvUlovbUtFY0dYVFFkeDVveWVGY3JIRFhDRlVWS3c3T25wVFB4OCtOTlVRdjluSk5uU21TRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTUxNDQxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZyYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnJhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUDhSQ3c1ekJOcE9ucUZoWVhTbzQ4ZWtOV29kRjgzREE1RXl4akpmRGYrND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTY3NjUxMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
