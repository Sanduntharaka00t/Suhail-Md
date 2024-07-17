const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";"https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a8f400de01d6c1ec4e742.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ-ᴄᴋ ᴏꜰꜰɪᴄɪᴀʟ" 


global.devs = "94754015815" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94754015815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/0a776b2a20271ec6d93b4.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_13_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgODUsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclBIRlhsVWJvNU41TEZWZnhua2FncllMMVFnY3VmdEVEc2NiUlJaRlN2OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1VDZEdMc2FUWW1vM3BIUGthUENHQVwiLFxuICBcInBob25lSWRcIjogXCI5MDRkYjhjZi05OTVkLTQyM2ItOWI3NC01NDYyYjVmYzJiOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAyMSxcbiAgICAgIDE2OSxcbiAgICAgIDgzLFxuICAgICAgMzksXG4gICAgICAyMTMsXG4gICAgICAxOSxcbiAgICAgIDE3NixcbiAgICAgIDE0MyxcbiAgICAgIDIzLFxuICAgICAgMjgsXG4gICAgICAxMDIsXG4gICAgICAxNCxcbiAgICAgIDI4LFxuICAgICAgMjExLFxuICAgICAgMjM2LFxuICAgICAgMTUxLFxuICAgICAgMjQ5LFxuICAgICAgMjMzLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIxNCxcbiAgICAgIDExOSxcbiAgICAgIDIzNSxcbiAgICAgIDI0MCxcbiAgICAgIDkzLFxuICAgICAgMTY0LFxuICAgICAgMjI0LFxuICAgICAgMTU5LFxuICAgICAgNzksXG4gICAgICAyNTIsXG4gICAgICAyMDUsXG4gICAgICAxMTQsXG4gICAgICAyNDgsXG4gICAgICAxMzksXG4gICAgICAxNDQsXG4gICAgICA2MCxcbiAgICAgIDI0MCxcbiAgICAgIDcxLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI3N0FESEMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1NDAxNTgxNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImNoYXLCoXRoIGthd8KhbmRh4oCm4Z2wLuGQn1wiLFxuICAgIFwibGlkXCI6IFwiMTY1MDAwMTI3NzU4MzQ2OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LaWhZSU5FSk9XM3JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWg1NmhBVzNUa3hhTTVDYjVUMHhDcGphVURkRUV1TXVKc1AydWNnRGxCUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtN0NCWWFuTGFqdmF1bURaMVJGS3VHTFBVR050VmNNdEZVT0dzem1uN0toZHhnVmd5YXVoOVhjbWlsS0l6Zmtva1dOcVpwSEZ6UTFkbXlkbWs3ZFlpdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3ZEhZUTlnWjQwWXZDR0ZTaG94bHpORmxQYjI0MjNtMlBCOWMyL2FyMXpYT1dNWFNyY29pVkZxbWw3L0RwWm1rMVg3ZUVjUzByWU1lL1FSbEVhU0dDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NDAxNTgxNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjA3NTc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ-ᴄᴋ ᴏꜰꜰɪᴄɪᴀʟ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ᴍʀ-ᴄᴋ ᴏꜰꜰɪᴄɪᴀʟ 』*"),
 
  author : process.env.PACK_AUTHER|| "mr-ck",
  packname: process.env.PACK_NAME || "🫰🏻",
  botname : process.env.BOT_NAME  || "ᴍʀ-ᴄᴋ•ᴏꜰꜰɪᴄɪᴀʟ",
  ownername:process.env.OWNER_NAME|| "ᴄʜᴀʀɪᴛʜ ᴋᴀᴡɪɴᴅᴀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
