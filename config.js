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
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255697608274";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg,https://telegra.ph/file/cad7038fe82e47f79c609.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "255697608274";
global.read_status_from = process.env.READ_STATUS_FROM || "255697608274";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEplUDlkL3RMMTJFQ0FxMGM3TUZIdDVuUVZLL3RMS3JxdTNsZDF4cW4yMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW5OaVFrR0JmQlV3a3VNcVFxS0JISzBYaDVjOEFtMGRBVFM1OXJZNjFodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSjQzQzFxdjEyOSt0ZXhLR0dIVzM0Mkd2K0Z1YlVVUVFKUjhIRE9RK1c4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJa0Nvd3I1dFFaTTJ1aDA2NTJsT1Q0RkVLMGw1M0lQQWpkYVNLcmtwbUhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMM2tCYkNGTkhtZHFVaUFTOWNlZEEveFRaWjBlenhUTFIzZHJFdU9xbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IQ1hkUzBsS0lhVXlueHBmVHBvVk9wNEExMGFERGNTRXFNMmVITWc3UW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tDUm42dTNHV0NZT0NSZ0gxSnpwUCtFR1grcVRaS29yVzlCQkhKQjFVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXo5S1g1WmwvbU5UOEw1cjIwWUlieUswbXltaWhoKzZDUXlNeWFGbTV6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVsVXRkTmJweTJyd1ZTVzhBQU5Pb01zazVuWFBpbVVDV3FiWmM1UFJGSzVQU3U5VVdtcnJZS042aDNlN0Y4UHdGZWlGR1czRElmYi8wdmNLQUdQY0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJKYmtFanBJaEU5dmZleWhzTFhQbXI1TC9XeHNVR25ESW1iMU5uQjlhdHJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfNG45N0gzclFMaWVWdGxwSlV5bUJBIiwicGhvbmVJZCI6IjU3YmRhNTk2LTZmNjAtNDkyZi1iZGMzLTJiNzQ3MDViN2FmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdnhUUWppV3JDSEFWZlBvcDlQaUxxUEVjaGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXBVNXlETXhmemN4d2IvYjg5Z3IyQTRqT0w4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZIQUI2UlNWIiwibWUiOnsiaWQiOiIyNTU2OTc2MDgyNzQ6NzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGFubnkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BQNjZ2b0ZFTC9PenJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFkcTZleVBTaGxiem1RM1NoQVJ2R1VqOXpPMEhvNngrVXJGOG5KamZxMUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZ5MUJtbzJqcExlTDF6MWxndkhiRGFaMWxvM251RGU5MzVkTFJEUi9MWktNY3ViYklwWGwyN2sxUHFKeVRjSVBWZU1ReW14d3FtaGxVSEhUamNwZUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCcFh2WmRvMURwOERwUTNTd0QvOG1PeDBRNjg3OEVFQjljVTdXS2NMYTlicUJIZTFJV1NONWhVWnJUZ1R0YkRoNjF5d1B1OURsaElGREpPRm14bkVCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY5NzYwODI3NDo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSGF1bnNqMG9aVzg1a04wb1FFYnhsSS9jenRCNk9zZmxLeGZKeVkzNnRTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzQxMjY0fQ============"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FUTURE_MD-V2™`",
  author: process.env.PACK_AUTHER || "FUTURE_MD-V2",
  packname: process.env.PACK_NAME || "F U T U R E",
  botname: process.env.BOT_NAME || "FUTURE_MD-V2",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
