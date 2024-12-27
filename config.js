//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ddj07992@gmail.com";
global.location = "Arusha, Tanzania";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Daniel432-gift/Future_md1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/j1fxdz.jpeg";
global.devs = "https://t.me/creepytech";
global.sudo = process.env.SUDO || "255697608274";
global.owner = process.env.OWNER_NUMBER || "255697608274";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/j1fxdz.jpeg,https://files.catbox.moe/2t58h1.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "255697608274";
global.read_status_from = process.env.READ_STATUS_FROM || "255697608274";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1B0QlBVbHo3UXE5SG9XeExRZkhBWG9LTkxwVEZQNHhjZVJNUjBkcU5YTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTVnWjRYUjc0NVFvclRSYXgyUTVGTVJpRFJKdXAwUzVwRTJUY2xPSjlEND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRnYwb1ZKUDdBQ1JaZmQ5TnVFYTduaVBONGYyZU5HcDNqbnFReno0YUZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNmUrVXN2MXRYSUMyQ0wwcENJNmlOaGVUTEJHdDJzS0VRQkZzNHlEOXo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIblcwUTFkd3hNTjNZY09kZHRYWnBNSU5UdXo3c2Z6Y1U5TkhIYTUzMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdxYkMvbTFJcXppTDBCV2ppWUd6dDltR2tUREs3eVB5ZlRvT09Zc1BXekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NiVEREazVOampZM05hbCtZVnJabC9SQ3ZwZnZFZ0IvOGFLb1cwdXVYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic29BREUzNTZnem1lQ3dTelkzNTBLNlRtWW1pYW9rZDU1NHhTdjJ5MXB3Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI3TzBTdlNhcVBSMVBtSitCTUQrczZXYmFtRXlSdkljTDRXUk1NM1FlQ0hLWDV1RGFpMGNHUVhwQlROQWVGaFpDK3puWTlCVmxsenBab25EcDBTaUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJsT1Y2emkxN3BWMXE0VkxGNnJpdzk1Z0t2RFY2Q1RNOXorVVJWb2MvUXZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuVHhmdEhlb1JBTzByXzhQWGQydGJBIiwicGhvbmVJZCI6ImRlNmRlZWZjLTg4MTAtNDBlOC04Y2NlLWQzYjc0ZDgyNDNjNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR2krQWsycTdvcjlrV2RUd2tmWWpHM1k2U0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnBVbW9Vc2FZcmt2cndOK0Q2SElRdUF5Z0NnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg4QlRZNDE1IiwibWUiOnsiaWQiOiIyNTU2OTc2MDgyNzQ6MzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qt/Cdm6XwnZuu8J2brvCdkYwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2QmxLY0VFSnI1dTdzR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InMrMlVOcEVrejRHOXlPaHpXOVZvYkc5MnFSVmtwT1BBSWZTa2NZM2hhemM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhPK0FFU1hNZXVURXNxMnVDSjAxZ3NSOThBdFIzaFZOM3R4ZTZudk5ZeHRyV1I3TlJmdVk2ekphSWRlUU44OE1qUkdFazJLbWZIN3NKUE9GaldRNEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwZ2pJVVVDbkZacStFdVRqa09TTzF3SG9mODdlTjFEaDJMNXZmVHROOW1yNFUwSXB4UjRqaFg1d1BmM1dna05iZEhjNlUrRUMrWHh0MTdYSlJZTUZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY5NzYwODI3NDozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUHRsRGFSSk0rQnZjam9jMXZWYUd4dmRxa1ZaS1Rqd0NIMHBIR040V3MzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MzI2ODg4fQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FUTURE_MD-V2™`",
  author: process.env.PACK_AUTHER || "Danny",
  packname: process.env.PACK_NAME || "F U T U R E",
  botname: process.env.BOT_NAME || "FUTURE_MD",
  ownername: process.env.OWNER_NAME || "Danny",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "F U T U R E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
