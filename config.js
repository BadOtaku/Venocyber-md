//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdmaThFNnJ2UVhLL2tHbnQrZzJzVUpHS2dIanBaQnJqeGUyMVpncjdrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHNqZTNob0ZOTUR4OGZneG5LTTZFakZUZGNCc1VjMytKMVNuQll6c0tpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT1hvNEtXZWk5SUEvOUN3WnN4YkRxSFh6Q0JlVHlpTG8xMWZIcHJyL0hBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxKzFMQjlSVWFYbHpaK1BvaDlHREMvZVRpbVh0WUtJMDM2VWRQSWxvNGpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMckZpU3FUa2l1WTYveGlFSHlZWnRxd1dlNkZSTzc1YzMyNFhKQTdoMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMxRFJsSklva1hyelZ0OGtxRHZyR1RZQi9sSzExYlVnMmM4K3ppcTVFRkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05lbVViWWZudlYrOUNncjl2bzNDZkNtR1lFK1lhREVJUGxjWWd4MWlFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREZTVmZZMndKVUVsaXBSQytIYzZqNTlzaVoyTGF3b1RvUURBME4rTld6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNoNUxKditZb3VxVmVGMDBCaU9nTGVxT0c0TVpLYldiYXNuT0lmUmtGbzhFekVWNUVXM2JmdUI1QS82Z0NHaHJ6citxQ0dlbFNtMGpldjlNYkEwNmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJ3Qk1oUzdNdVk3S0VOWjNLV3EvZEJkWHVRR2lsMFdoNGdibHhVa2VDendNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzZjVjd0huZ1I5T2lMM3lidnc4bHlRIiwicGhvbmVJZCI6ImVkNDNhMDZiLWY2ZjYtNGQ1My1iMTgyLWRhYmQ3NzY5MGIwMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Y1UzYVIyRnpCMTNqQ2V5TDdWR1BReUNRS1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXdMQ0IzOCtWUnRXWjNuazFuQzd5MU1heDI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlEQUI0SlhHIiwibWUiOnsiaWQiOiIyMzQ5MDM4MTg0MDE2OjI1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN0JrclVERUpmdm9yVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWSVhnYW5CcDVZaDdScUhtZUFWLzFyaEFqVzhjaDVWRXpUMXhMaWs5elRVPSIsImFjY291bnRTaWduYXR1cmUiOiJmYVJHV0oyWTVlNDZkRlNqdWN1S3BhRGRTYytMN1dnOWFNcjlyK0UzZnZlZkFhcVd5RXlGVmNnM0IzckVzVkFiVVY1MDhBN1MvYlhISkUwK0VkdU9DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZzVNcVRLZHk2TEVWa2NHZHhxNUR1MnNFYzJMUlVOdWk3YklCTHRBc2ZEc2JLNmdLWFRid2I4dFhndHpFdExERVBHWDVmWjk2SC92eTluWHRmTUFZakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM4MTg0MDE2OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZTRjRHcHdhZVdJZTBhaDVuZ0ZmOWE0UUkxdkhJZVZSTTA5Y1M0cFBjMDEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMzMwOTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTVHIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using Dushane bot| Now bow or die| this is Dushane",
  author: process.env.PACK_AUTHER || "Dushane",
  packname: process.env.PACK_NAME || "Dushane",
  botname: process.env.BOT_NAME || "Dushane-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Dushane",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
