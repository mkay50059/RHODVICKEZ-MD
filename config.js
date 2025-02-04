const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FuUkptaWRKSGM2eVNqM2NwZ1JYZG11a1Q3ejE3WUhPVWhVclVQT09GYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXJYVlRMb3ZobDMrUlNJTm1mbVBpUzV3V21XR3NLUkI1bnNnYjlIdDN6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQW1ucStIa1U2KzBPeldBckpTV0xJYXJ6U29DRTBhdzFDaEREek9xK2xJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzT0tDMDVtdDB2RUlQSk9QN25XbGd5Yi9GNGNzZDJNN0N2bU9sRmZVQmlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGTVZjTjhGalVncjVyQk5xdmsyOVpQSWZSVlBJTFM3N0c2WGJtZzN0V2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImswS3M4ckFHUHk0SyttdjZzdm5IOGwvRmcrMDU4ZmNQTmxCODhSdnBXbnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1aTVZpNTlBRlpia1pZMTlmTzM3dVY4MU1wRHN1VERrY05CV3dBOTMxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzdqZFU5bmZpRjNjSVNvd0hSa2ZJcmNBa1dBNGk0Y29MNDM2NktKTnV3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhaMGcza3dna0c4MG1xMjVQTndWYXNMZXNrR2xlcHFkeklHYnhJQloyeWg3cFJhUm5kajZiVSsyK3BKUXV4R095MnNNaGRlRHBqVlkwbm54Uk1XMml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiIzSUQwWUJRR1hjTzBTTGxhTEZuZzMzNVlNZVdONUE2c1N0aDBRTDI3UXBnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGa1NOMTRaR1J0bVA5X1JxcHFzdVdnIiwicGhvbmVJZCI6IjNmMzViYTlhLWQyNDAtNDM0Yy1iMzA2LTM5YzgyODA3MmU3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5cHdrVWdzbjlKNUJITlRHcjJSV2J4Z3VMa2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3BpQ1NpdC8wRC8rclZFV25jWTVSWkg4enlFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRSVzFKU1FaIiwibWUiOnsiaWQiOiIyNTQ3OTk1MDg3MDA6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVW5rbm93biJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlh0cWl3UW5ZR0Z2UVlZQlNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicjlUK1doWnBGc2JyaXRoRUpwc2U5eDgyckxGQm0wVnBqTHFDWlFoY0JpVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidUY5NzJ2UXZRd2dKNTFzR3NBazVxZEdERWVtUW5jdWpnU3p0cmtDNlVCQXZOcnlONVJMa1MrcnRSOXh3blFGcFgrMmxTRnRxR0J3ZmlPZncwSGlrQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlM0bEJGQndSN3dnY1NnSzVrUVZhV0lpVHNDd0RDQzhTT1BtUkVPZ0RicnhyUVdWS1NQVWZkOG5HalltOHU4L0EvZ1VoZmlBT2JUNVplY0tvbEtaL2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk5NTA4NzAwOjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmEvVS9sb1dhUmJHNjRyWVJDYWJIdmNmTnF5eFFadEZhWXk2Z21VSVhBWWwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg2MjEwOTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmJWIn0=",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦RHODVICKEZ MD✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254799508700",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦RHODVICKEZ MD✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦RHODVICKEZ MD✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/PEZ5QL2.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> ✦RHODVICKEZ MD✦ IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING ✦RHODVICKEZ MD✦ FROM RHODVICK TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
ANTICALL: process.env.ANTICALL || "false",
// false or true for anticalls 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto like or react on status 
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by ✦RHODVICKEZ MD✦ MD 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
