const {
  cmd,
  commands
} = require('../command');
const {
  fetchJson
} = require('../lib/functions');
cmd({
  'pattern': 'pair',
  'alias': ["getpair", "clone"],
  'react': '🔄',
  'desc': "pair",
  'category': "download",
  'use': ".pair +2637197473XXX",
  'filename': __filename
}, async (_0x53ef81, _0x3fcf12, _0x1cac84, {
  from: _0x2eaa93,
  prefix: _0x329d70,
  quoted: _0x297544,
  q: _0x283a2f,
  reply: _0x20e232,
  isGroup: _0x17a4ed
}) => {
  try {
    if (_0x17a4ed) {
      return await _0x20e232("❌ This command is not allowed in group chats. Please use it in my inbox.");
    }
    if (!_0x283a2f) {
      return await _0x20e232("*Example - :* .pair +254115408XXX");
    }
    await _0x20e232("*Rhodvick is generaying your pairing code...*");
    const _0x4504a8 = await fetchJson("https://power-session.silvatechinc.my.id/pair/code?number=" + _0x283a2f);
    const _0x4bc4f7 = _0x4504a8.code;
    await _0x1cac84.reply('' + _0x4bc4f7);
    await _0x1cac84.reply("> *Use the above pairing code to get your session id for RHODVICKEZ-MD.*");
  } catch (_0x978c45) {
    console.error(_0x978c45);
    _0x20e232("An error occurred: " + _0x978c45.message);
  }
});
cmd({
  'pattern': 'pair2',
  'alias': ['getpair2', "clone2"],
  'react': '🔄',
  'desc': "pair",
  'category': 'download',
  'use': ".pair +2637196473XXX",
  'filename': __filename
}, async (_0x44077a, _0x16a498, _0x33b7ac, {
  from: _0x2edf8e,
  prefix: _0x5cec58,
  quoted: _0x42fdaa,
  q: _0x648b91,
  reply: _0x205d46,
  isGroup: _0x5953bb
}) => {
  try {
    if (_0x5953bb) {
      return await _0x205d46("❌ This command is not allowed in group chats. Please use it in my inbox.");
    }
    if (!_0x648b91) {
      return await _0x205d46("*Example - :* .pair2 +254115408XXX");
    }
    await _0x205d46("*Rhodvick is generating your pairing code...*");
    const _0x354115 = await fetchJson('https://subzeropq.onrender.com/code?number=' + _0x648b91);
    const _0x35dcc0 = _0x354115.code;
    await _0x33b7ac.reply('' + _0x35dcc0);
    await _0x33b7ac.reply("> *Use the above pairing code to get your session id for RHODVICKEZ-MD.*");
  } catch (_0x4da84d) {
    console.error(_0x4da84d);
    _0x205d46("An error occurred: " + _0x4da84d.message);
  }
});
