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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dKblRyR2pham5Fc3dHQVBNbVVOMitEVVoyMXF5ZnhTTE0xOVo0d3JIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVg5Z3ZmMC9YREhCSUpyWmVwUnY0UVdiK1hhWHZZNlkxSHR2eWx4YklXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTm5CY2JNM0htM1k4OVhWU2ViekxoUk1jeUIzRVJPaXk4L2EvVVZYazBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJadzZuamJLc0JwcVZLR1oxNm1oZUh4b04zNThjMnhrSll2VlpOWU80NlI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FR0FvWFR6S2pPeVhwS0FwV1BMYmZuY1VDUG1UV25hKzJ3ZlhEQVlJbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw5cm1oa2xkL0pIMHppRFY1S1JQQnk0VHhHTFk4ZmdkOE9iSU9HSmVTaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VTdVlNMWdRb1YrcHIzZWI0aW9TcDArbzN3TFdhTjJkT3BEL2l0alptcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NrR05td1VHNXFLTG1xcmx0L0FWMGtCeTlYSUZzdE9tVnI2LzlnSHkxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpwZWdybWJDMnEyTEpOZC8rWGdVRTdzcXdyK2hGWWpPNUtUUnlMUHNIUDQzZHUwUUJMTjdURWJISGtBMklwWTlHREJVbXlDUldNWmRIR1hoV1VkZmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJaSFB1eVhtUmlYeHQ5UjMwYTNkUG5Ba0xtNnNQWUVwSGNQU0VaTTk4SlBrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjbGd3TlRmdVRXbXZqeW9oZ2EtWXJRIiwicGhvbmVJZCI6IjA0ZmNkNTQxLWQ2NjktNDU0ZS04ODk4LWJkOGM3ZjQ4NGI3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDY01qYVIrR2g2Y1ZSbmlxcW9MeTJyR0s5R1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXAvaGJ0dS9WUDNpT3JDeWxqYlV0RmIrS3dZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw5U1lOMTFaIiwibWUiOnsiaWQiOiIyNTU2OTc2MDgyNzQ6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGFubnkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pDU2k1WUVFUE9TeWJrR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1ZQVV3eVkwZThKMXNlVGJSRlJ4VkExSUQzL1h6cXdBVzBZbERtYzY1V3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imd3aVdWZS93OFBKdjM2Y2ZWMTlvWE40aUtJMHNvSm03V2lHRStEbzBpUVFzR1BQM3dTL3dvTTRmelBjdVN1cU9jazhQT0E4TE5PQUd3UTVCNkI1SEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHMUIyZDlkV2RBdXBGZml4SDVVY25IUXg2RFQxTXJ6RDdNWTZXT1FIMGdCOXBKek1BM0J3dG5PMUhPWERRZGdFQ0x3cUZiM1ljbGppMXlIWTk4VGdpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY5NzYwODI3NDoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJabUFGTU1tTkh2Q2RiSGsyMFJVY1ZRTlNBOS8xODZzQUZ0R0pRNW5PdVZzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMzQ4ODY0fQ=="
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
