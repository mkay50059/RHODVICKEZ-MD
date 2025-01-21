const axios = require("axios");
const yts = require("yt-search");
const {
  youtube
} = require("btch-downloader");
const {
  cmd
} = require('../command');
cmd({
  'pattern': 'audio',
  'alias': ['spotify', "ytmusic", "music"],
  'react': '🎵',
  'desc': "Fetch audio from Spotify or YouTube",
  'category': "media",
  'filename': __filename
}, async (_0x28b38b, _0x7a0b43, _0x2cc993, {
  from: _0x117db8,
  quoted: _0x1a3edf,
  body: _0x11a6dd,
  isCmd: _0xab2852,
  command: _0x4ee577,
  args: _0x4bbc49,
  q: _0x5a08da,
  isGroup: _0x40b1c2,
  sender: _0x4f74e3,
  senderNumber: _0x5563f7,
  botNumber: _0x2b4b0c,
  pushname: _0x46d9f2,
  reply: _0x2a017e
}) => {
  if (!_0x5a08da) {
    return _0x2a017e("Please give Rhodvick a title or link (Spotify/YouTube)!");
  }
  _0x2a017e("Rhodvick is Fetching the audio... 🎧");
  try {
    const _0x3e97c7 = await axios.get("https://spotifyapi.caliphdev.com/api/search/tracks?q=" + encodeURIComponent(_0x5a08da));
    const _0x28307c = _0x3e97c7.data[0x0];
    if (_0x28307c) {
      const _0x20495f = await axios({
        'url': "https://spotifyapi.caliphdev.com/api/download/track?url=" + encodeURIComponent(_0x28307c.url),
        'method': "GET",
        'responseType': 'stream'
      });
      if (_0x20495f.headers["content-type"] === "audio/mpeg") {
        await _0x28b38b.sendMessage(_0x117db8, {
          'audio': _0x20495f.data,
          'mimetype': "audio/mpeg",
          'contextInfo': {
            'externalAdReply': {
              'title': _0x28307c.title,
              'body': "Artist: " + _0x28307c.artist,
              'mediaType': 0x1,
              'sourceUrl': _0x28307c.url,
              'renderLargerThumbnail': true
            }
          }
        });
        return;
      }
    }
  } catch (_0x63e633) {
    console.error("Spotify Error:", _0x63e633.message);
  }
  try {
    const _0x2e946e = await yts(_0x5a08da);
    const _0x385215 = _0x2e946e.videos[0x0];
    if (_0x385215 && _0x385215.seconds < 0xe10) {
      const _0x1a49ce = await youtube(_0x385215.url);
      if (_0x1a49ce && _0x1a49ce.mp3) {
        await _0x28b38b.sendMessage(_0x117db8, {
          'audio': {
            'url': _0x1a49ce.mp3
          },
          'mimetype': "audio/mpeg",
          'contextInfo': {
            'externalAdReply': {
              'title': _0x385215.title,
              'body': "Fetched from YouTube",
              'mediaType': 0x1,
              'sourceUrl': _0x385215.url,
              'renderLargerThumbnail': true
            }
          }
        });
      } else {
        _0x2a017e("Failed to fetch audio from YouTube.");
      }
    } else {
      _0x2a017e("No suitable YouTube results found.");
    }
  } catch (_0x3edc88) {
    console.error("YouTube Error:", _0x3edc88.message);
  }
});
