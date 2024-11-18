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
global.owner = process.env.OWNER_NUMBER || "237682497313";
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
global.save_status_from = process.env.SAVE_STATUS_FROM || "237682497313";
global.read_status_from = process.env.READ_STATUS_FROM || "237682497313";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1B3R2RkMGw2alRObFZJYzl1Q0tYY2gwRkVFTk4ySUxodjh3b1JoNDJrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamFWVUxFNXFSb3JsbzZIZWdlOWRnUFJpeitnaGlWdDVTcGFxOTR5MFVBVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR2NodUZCQXJWaWZvN2hSVWNQQmNLNXhvWkNtODJLS3kxWm0yYlJkWjFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1UnRtYk5raERwazNQQS9HMzQ3c1Ewb1VrWC9XSHplVkZJMDhKVGV0R2s0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNKytNWjF0bm5sL3AwUGVHVzdaeGVIcTczNm94YkRvNWdsdXJ1ZHpVRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJML2pUVCtPWkplNkU1dmlib2VzdDljaUVNbVFyMlI2MkxaTXhZekMwRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJDSERoejJBeFRtU2N1Qll3Y0RKc0s4VFFiSGxSRzdURExVWGk5MG9XUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFpVSGkzTGl1d0FQYXg2U2hjWVh1OTF4ZDZabmVmczRBZ3VNQjIzUzYxVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVaTjN3RkpNbkFJU25rajhSejlxY3EwaFYxejZOem14cHR1aGRzMytsUU1WWHdtdkw3TE9kcFB0TGhHb004NTVwMUh1cEdKTDQvVit2ZDA1Q2txTkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IkFia3pRQnorNmptNHZnOUJMVXgvYUhJNGhzRHNuRmw3U3RTVDFFN1llWk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklrY2VtRDhnUWJpMm0wQXAxQmlGeGciLCJwaG9uZUlkIjoiOGExM2U1MWMtYWMwYy00YTEyLWEzMzgtOTk2OWQ3MDg4ZWQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBzN2srTjV0QUxnekpxK0tnK2MrSE5FeXdHWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXN01XU2JqazBmUEFJUEFoWE1iSHhNWHJaNVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRk03Q0QyTlQiLCJtZSI6eyJpZCI6IjIzNzY4MjQ5NzMxMzo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKKzBrdWNDRU4rSzdya0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1WUJoeGYwbTFqQmVSUWlSakhWQ0JML09MM21EVEQzN01ZMmFydnlwSXlBPSIsImFjY291bnRTaWduYXR1cmUiOiJYakZHNko0QlBJTFpkNDJZUVpRVDFCS0RXVFNUVEV6RHFDaDZpNjlwUmk5L1hSUmFqR2Uzd2FrSmxnRjA1OW5QSEU3ekRnV25WbG9GWVkwcWhZUGNnQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSmw0aXVvMWxUK3hKSXhxcm5zRnVZTVZZZnhFUysvYk1laXdLeEZ0V0ozeGdrZnNKMHlEejVSYWNwcEdQcXVMb0tESHdYVnFWcGE2UVljMS83QzU1Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2ODI0OTczMTM6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJibUFZY1g5SnRZd1hrVUlrWXgxUWdTL3ppOTVnMHc5K3pHTm1xNzhxU01nIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE5NTQwMjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRS93In0="
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
