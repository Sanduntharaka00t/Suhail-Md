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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_55_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjlBaDlnTGVueXBQVGhPY3FYTmxOMFZGcHIwRkdTSDVNaTlrK1JFU0pZWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjBtVFlkU2xUZktnbWdhZTd6UUVRUVwiLFxuICBcInBob25lSWRcIjogXCJjMTRhMzZlMy0wNTg1LTQ0MjQtOTFlNS03MzBlODhlNjhlODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMzksXG4gICAgICAzOSxcbiAgICAgIDQ5LFxuICAgICAgMjM2LFxuICAgICAgMTY1LFxuICAgICAgODAsXG4gICAgICAyNDQsXG4gICAgICAxOTEsXG4gICAgICAxNjIsXG4gICAgICAyOSxcbiAgICAgIDIyOCxcbiAgICAgIDIyMixcbiAgICAgIDE0NyxcbiAgICAgIDU5LFxuICAgICAgMTIyLFxuICAgICAgMTQ4LFxuICAgICAgMjI2LFxuICAgICAgNzIsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjQzLFxuICAgICAgMTk5LFxuICAgICAgMTcwLFxuICAgICAgNDksXG4gICAgICAyMixcbiAgICAgIDE1NCxcbiAgICAgIDI0MixcbiAgICAgIDIxNSxcbiAgICAgIDEzMyxcbiAgICAgIDEyNyxcbiAgICAgIDY3LFxuICAgICAgMjE0LFxuICAgICAgMTg4LFxuICAgICAgMTIyLFxuICAgICAgNDAsXG4gICAgICAxMTgsXG4gICAgICAyMTgsXG4gICAgICA4NSxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc4RVdLTUczXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1NDAxNTgxNTo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImNoYXLCoXRoIGthd8KhbmRh4oCm4Z2wLuGQn1wiLFxuICAgIFwibGlkXCI6IFwiMTY1MDAwMTI3NzU4MzQ2OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpNC82d0lFTXpaczdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicWg1NmhBVzNUa3hhTTVDYjVUMHhDcGphVURkRUV1TXVKc1AydWNnRGxCUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSb2lOVnRzekNXczFpUFVNUHNEL2VuZkNaZ2g4L0xUR0VRMWpoL2ZVTi9YMWRYdW82cWNxdkZ0T2s3bEZGWWZKbUh2MW5Ca0hnMDRZMEtJZ2hxZVpoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoc3dCOC9YNGNpMFp4UjEvQ2YvS2ZWd1hEZFcwelFFVkNOMEFDRCtoUjRwWFNiUVc2b3l3czdNdHQyL2o0eDI2WkYyTFBaTWxuQUo1dlZYTnVsbUVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NDAxNTgxNTo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTExNjk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTJxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMnEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyVlVvd0tMVDlMTDl3SlRxUVFpbWFSaURQSTM4cy9sNFFjOFIvcEJqLzVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNDE4NDYzMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM0OTAyNjQzNlwifSIKfQ=="  // PUT your SESSION_ID 


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
