const {
  cmd,
  commands
} = require("../command");
const fetch = require("node-fetch");
cmd({
  'pattern': "praytime",
  'alias': ["prayertimes", "prayertime", "ptime"],
  'react': '✅',
  'desc': "Get the prayer times, weather, and location for the city.",
  'category': "information",
  'filename': __filename
}, async (_0x443147, _0x1450f5, _0x38a167, {
  from: _0x5be208,
  l: _0x373b08,
  quoted: _0x423d83,
  body: _0xe7792e,
  isCmd: _0x5f0e70,
  command: _0x2f1fe7,
  args: _0x2d5d1b,
  q: _0x3b4dec,
  isGroup: _0x5b0ba0,
  sender: _0x1ec162,
  senderNumber: _0x32c7ae,
  botNumber2: _0x7975be,
  botNumber: _0x1aa9a8,
  pushname: _0x176a2f,
  isMe: _0x4759dc,
  isOwner: _0x25105c,
  groupMetadata: _0x3d2200,
  groupName: _0x453a38,
  participants: _0x181c7d,
  isItzcp: _0x1afaed,
  groupAdmins: _0x57ddf4,
  isBotAdmins: _0x1ee267,
  isAdmins: _0x5b622f,
  reply: _0xd65adf
}) => {
  try {
    const _0x12e075 = _0x2d5d1b.length > 0x0 ? _0x2d5d1b.join(" ") : "bhakkar";
    const _0x2c5f35 = "https://api.nexoracle.com/islamic/prayer-times?city=" + _0x12e075;
    const _0x4912f4 = await fetch(_0x2c5f35);
    if (!_0x4912f4.ok) {
      return _0xd65adf("Error fetching prayer times!");
    }
    const _0xab253f = await _0x4912f4.json();
    if (_0xab253f.status !== 0xc8) {
      return _0xd65adf("Rhodvick was unable to get prayer times. Please try again later.");
    }
    const _0x38c1da = _0xab253f.result.items[0x0];
    const _0x368dc0 = _0xab253f.result.today_weather;
    const _0x36e4f6 = _0xab253f.result.city;
    let _0x38093d = "*Prayer Times for " + _0x36e4f6 + ", " + _0xab253f.result.state + "*\n\n";
    _0x38093d += "📍 *Location*: " + _0x36e4f6 + ", " + _0xab253f.result.state + ", " + _0xab253f.result.country + "\n";
    _0x38093d += "🕌 *Method*: " + _0xab253f.result.prayer_method_name + "\n\n";
    _0x38093d += "🌅 *Fajr*: " + _0x38c1da.fajr + "\n";
    _0x38093d += "🌄 *Shurooq*: " + _0x38c1da.shurooq + "\n";
    _0x38093d += "☀️ *Dhuhr*: " + _0x38c1da.dhuhr + "\n";
    _0x38093d += "🌇 *Asr*: " + _0x38c1da.asr + "\n";
    _0x38093d += "🌆 *Maghrib*: " + _0x38c1da.maghrib + "\n";
    _0x38093d += "🌃 *Isha*: " + _0x38c1da.isha + "\n\n";
    _0x38093d += "🧭 *Qibla Direction*: " + _0xab253f.result.qibla_direction + "°\n";
    const _0x32d310 = _0x368dc0.temperature !== null ? _0x368dc0.temperature + '°C' : "Data not available";
    _0x38093d += "🌡️ *Temperature*: " + _0x32d310 + "\n";
    await _0x443147.sendMessage(_0x5be208, {
      'image': {
        'url': "https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg"
      },
      'caption': _0x38093d,
      'contextInfo': {
        'mentionedJid': [_0x38a167.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363284845910703@newsletter",
          'newsletterName': "RHODVICK TECH",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x1450f5
    });
    await _0x443147.sendMessage(_0x5be208, {
      'audio': {
        'url': 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/Islamic.m4a'
      },
      'mimetype': "audio/mp4",
      'ptt': false
    }, {
      'quoted': _0x1450f5
    });
  } catch (_0x52bbc6) {
    console.log(_0x52bbc6);
    _0xd65adf("*Error occurred while fetching prayer times and weather.*");
  }
});
