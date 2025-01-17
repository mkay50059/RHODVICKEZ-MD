const {
  cmd,
  commands
} = require("../command");
const yts = require('yt-search');
const {
  fetchJson
} = require("../lib/functions");
const {
  ytsearch,
  ytmp3
} = require("@dark-yasiya/yt-dl.js");
const axios = require('axios');
async function ytmp4(_0x2dbfbe, _0x35e3b1) {
  try {
    if (!_0x2dbfbe || !_0x35e3b1) {
      throw new Error("url and format parameters are required.");
    }
    const _0x1b8fc4 = parseInt(_0x35e3b1.replace('p', ''), 0xa);
    const _0x4cf072 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x1b8fc4,
      'url': _0x2dbfbe
    };
    const _0x1b22a5 = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x4441f7 = await axios.get('https://ab.cococococ.com/ajax/download.php', {
      'params': _0x4cf072,
      'headers': _0x1b22a5
    });
    const _0x5099c3 = _0x4441f7.data.id;
    const _0x1761d0 = async () => {
      const _0x1a1684 = {
        'id': _0x5099c3
      };
      try {
        const _0x213d33 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x1a1684,
          'headers': _0x1b22a5
        });
        const {
          progress: _0x34bd59,
          download_url: _0x54b341,
          text: _0x30160a
        } = _0x213d33.data;
        return _0x30160a === "Finished" ? _0x54b341 : (await new Promise(_0x371230 => setTimeout(_0x371230, 0x3e8)), _0x1761d0());
      } catch (_0x4ccfd3) {
        throw new Error("Error in progress check: " + _0x4ccfd3.message);
      }
    };
    return await _0x1761d0();
  } catch (_0x21e801) {
    console.error("Error:", _0x21e801);
    return {
      'error': _0x21e801.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x445136) {
  const _0x1a2092 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x2ff0a0 = _0x445136.match(_0x1a2092);
  return _0x2ff0a0 ? _0x2ff0a0[0x1] : null;
}
function convertYouTubeLink(_0x467237) {
  const _0x261610 = extractYouTubeId(_0x467237);
  if (_0x261610) {
    return "https://www.youtube.com/watch?v=" + _0x261610;
  }
  return _0x467237;
}
cmd({
  'pattern': "song",
  'alias': "play",
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0xe60c1c, _0x24200f, _0x4dd8ba, {
  from: _0x15ff7d,
  quoted: _0x29e086,
  body: _0x5218bb,
  isCmd: _0x37aa35,
  command: _0x40bb9d,
  args: _0x554e52,
  q: _0x51e6b3,
  isGroup: _0x497705,
  sender: _0x428685,
  senderNumber: _0x40bde8,
  botNumber2: _0x17b49c,
  botNumber: _0x291e67,
  pushname: _0x136f15,
  isMe: _0x39a969,
  isOwner: _0x2847e7,
  groupMetadata: _0x3fbedc,
  groupName: _0x3c1cee,
  participants: _0x3e06d7,
  groupAdmins: _0x51a116,
  isBotAdmins: _0x41bd3a,
  isAdmins: _0x10718a,
  reply: _0x324a6e
}) => {
  try {
    if (!_0x51e6b3) {
      return _0x324a6e("Please give me a URL or title.");
    }
    _0x51e6b3 = convertYouTubeLink(_0x51e6b3);
    const _0x35bb08 = await yts(_0x51e6b3);
    const _0x274d52 = _0x35bb08.videos[0x0];
    const _0x274a8d = _0x274d52.url;
    let _0x1254f8 = "\n*RHODVICKEZ-MD-MUSIC*\n❍ *ᴛɪᴛʟᴇ :* " + _0x274d52.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x274d52.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x274d52.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x274d52.ago + "\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧*\n\n*1*     ┃  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\Rhodvick Tech ✻\n";
    const _0x42cf71 = await _0xe60c1c.sendMessage(_0x15ff7d, {
      'image': {
        'url': _0x274d52.thumbnail
      },
      'caption': _0x1254f8,
      'contextInfo': {
        'mentionedJid': ["923000000000@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363284845910703@newsletter",
          'newsletterName': "Jawad Tech X ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': 'RHODVICK TECH',
          'body': 'RHODVICKEZ-MD-MUSIC',
          'mediaType': 0x1,
          'sourceUrl': "https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N",
          'thumbnailUrl': 'https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x24200f
    });
    const _0x5c7840 = _0x42cf71.key.id;
    _0xe60c1c.ev.on("messages.upsert", async _0x6b486a => {
      const _0x9e66ec = _0x6b486a.messages[0x0];
      if (!_0x9e66ec.message) {
        return;
      }
      const _0x46d024 = _0x9e66ec.message.conversation || _0x9e66ec.message.extendedTextMessage?.["text"];
      const _0xdf4135 = _0x9e66ec.key.remoteJid;
      const _0x3397d3 = _0x9e66ec.message.extendedTextMessage && _0x9e66ec.message.extendedTextMessage.contextInfo.stanzaId === _0x5c7840;
      if (_0x3397d3) {
        await _0xe60c1c.sendMessage(_0xdf4135, {
          'react': {
            'text': '⬇️',
            'key': _0x9e66ec.key
          }
        });
        if (_0x46d024 === '1') {
          const _0x134c8c = await ytmp3(_0x274a8d);
          await _0xe60c1c.sendMessage(_0xdf4135, {
            'react': {
              'text': '⬆️',
              'key': _0x9e66ec.key
            }
          });
          await _0xe60c1c.sendMessage(_0xdf4135, {
            'audio': {
              'url': _0x134c8c.download.url
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': ["923000000000@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363284845910703@newsletter",
                'newsletterName': "Jawad Tech X ✻",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "Jawad Tech X",
                'body': "Jawad Tech X BOT",
                'mediaType': 0x1,
                'sourceUrl': _0x274d52.url,
                'thumbnailUrl': _0x274d52.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x9e66ec
          });
          await _0xe60c1c.sendMessage(_0xdf4135, {
            'react': {
              'text': '✅',
              'key': _0x9e66ec.key
            }
          });
        } else {
          if (_0x46d024 === '2') {
            const _0x338d12 = await ytmp3(_0x274a8d);
            await _0xe60c1c.sendMessage(_0xdf4135, {
              'react': {
                'text': '⬆️',
                'key': _0x9e66ec.key
              }
            });
            await _0xe60c1c.sendMessage(_0xdf4135, {
              'document': {
                'url': _0x338d12.download.url
              },
              'mimetype': "audio/mp3",
              'fileName': _0x274d52.title + '.mp3',
              'caption': "\n> *© Powered By Jawad TechX*\n ",
              'contextInfo': {
                'mentionedJid': ["923000000000@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363284845910703@newsletter',
                  'newsletterName': "Jawad Tech X ✻",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "RHODVICK TECH",
                  'body': "RHODVICKEZ-MD-MUSIC",
                  'mediaType': 0x1,
                  'sourceUrl': _0x274d52.url,
                  'thumbnailUrl': _0x274d52.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x9e66ec
            });
            await _0xe60c1c.sendMessage(_0xdf4135, {
              'react': {
                'text': '✅',
                'key': _0x9e66ec.key
              }
            });
            await _0xe60c1c.sendMessage(_0xdf4135, {
              'delete': _0x42cf71.key
            });
          }
        }
      }
    });
  } catch (_0x3523e3) {
    console.log(_0x3523e3);
    _0x324a6e('' + _0x3523e3);
  }
});
cmd({
  'pattern': 'video',
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x6117c7, _0x2da09e, _0x458954, {
  from: _0xecd497,
  quoted: _0x3ea10e,
  body: _0x371165,
  isCmd: _0x4d6cad,
  command: _0x217a69,
  args: _0x488686,
  q: _0x1ccb98,
  isGroup: _0x34c8b8,
  sender: _0x543447,
  senderNumber: _0x3d442c,
  botNumber2: _0x25b092,
  botNumber: _0xbda850,
  pushname: _0x241a76,
  isMe: _0x5111bd,
  isOwner: _0x5e3060,
  groupMetadata: _0x33260f,
  groupName: _0x439af1,
  participants: _0x5cf361,
  groupAdmins: _0x419b87,
  isBotAdmins: _0x557a27,
  isAdmins: _0x1de554,
  reply: _0x26d5b1
}) => {
  try {
    if (!_0x1ccb98) {
      return _0x26d5b1("Please give me a URL or title.");
    }
    _0x1ccb98 = convertYouTubeLink(_0x1ccb98);
    const _0x38b0f9 = await yts(_0x1ccb98);
    const _0x37a988 = _0x38b0f9.videos[0x0];
    const _0x3c9686 = _0x37a988.url;
    let _0x472dd5 = "\n*RHODVICK TECH X-VIDEO*\n " + _0x37a988.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x37a988.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x37a988.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x37a988.ago + "\n\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> Rhodvick Tech ✻\n";
    const _0x3446d1 = await _0x6117c7.sendMessage(_0xecd497, {
      'image': {
        'url': _0x37a988.thumbnail
      },
      'caption': _0x472dd5,
      'contextInfo': {
        'mentionedJid': ["923000000000@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363284845910703@newsletter",
          'newsletterName': "Rhodvick Tech ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "Rhodvick Tech",
          'body': "RHODVICKEZ-MD-MUSIC",
          'mediaType': 0x1,
          'sourceUrl': "https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N",
          'thumbnailUrl': 'https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x2da09e
    });
    const _0x55a65c = _0x3446d1.key.id;
    _0x6117c7.ev.on('messages.upsert', async _0x16e0bc => {
      const _0x50a285 = _0x16e0bc.messages[0x0];
      if (!_0x50a285.message) {
        return;
      }
      const _0x1a6a3b = _0x50a285.message.conversation || _0x50a285.message.extendedTextMessage?.["text"];
      const _0x492848 = _0x50a285.key.remoteJid;
      const _0x22787e = _0x50a285.message.extendedTextMessage && _0x50a285.message.extendedTextMessage.contextInfo.stanzaId === _0x55a65c;
      if (_0x22787e) {
        await _0x6117c7.sendMessage(_0x492848, {
          'react': {
            'text': '⬇️',
            'key': _0x50a285.key
          }
        });
        if (_0x1a6a3b === '1.1') {
          const _0x548079 = await ytmp4('' + _0x3c9686, "360p");
          await _0x6117c7.sendMessage(_0x492848, {
            'delete': _0x3446d1.key
          });
          await _0x6117c7.sendMessage(_0x492848, {
            'react': {
              'text': '⬆️',
              'key': _0x50a285.key
            }
          });
          await _0x6117c7.sendMessage(_0x492848, {
            'video': {
              'url': _0x548079
            },
            'caption': "\n> *© Powered By Rhodvick Tech*\n",
            'contextInfo': {
              'mentionedJid': ["923000000000@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363284845910703@newsletter",
                'newsletterName': "Rhodvick Tech ✻",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "Rhodvick Tech",
                'body': "RHODVICKEZ-MD-MUSIC",
                'mediaType': 0x1,
                'sourceUrl': _0x37a988.url,
                'thumbnailUrl': _0x37a988.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x50a285
          });
          await _0x6117c7.sendMessage(_0x492848, {
            'react': {
              'text': '✅',
              'key': _0x50a285.key
            }
          });
        } else {
          if (_0x1a6a3b === "1.2") {
            const _0x1e9bbe = await ytmp4('' + _0x3c9686, "480");
            await _0x6117c7.sendMessage(_0x492848, {
              'delete': _0x3446d1.key
            });
            await _0x6117c7.sendMessage(_0x492848, {
              'react': {
                'text': '⬆️',
                'key': _0x50a285.key
              }
            });
            await _0x6117c7.sendMessage(_0x492848, {
              'video': {
                'url': _0x1e9bbe
              },
              'caption': "\n> *© Powered By Rhodvick Tech*\n",
              'contextInfo': {
                'mentionedJid': ["923000000000@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363284845910703@newsletter',
                  'newsletterName': "Jawad Tech X ✻",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "RHODVICK TECH",
                  'body': "RHODVICKEZ-MD-MUSIC",
                  'mediaType': 0x1,
                  'sourceUrl': _0x37a988.url,
                  'thumbnailUrl': _0x37a988.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x50a285
            });
            await _0x6117c7.sendMessage(_0x492848, {
              'react': {
                'text': '✅',
                'key': _0x50a285.key
              }
            });
          } else {
            if (_0x1a6a3b === "1.3") {
              const _0x2ad5b7 = await ytmp4('' + _0x3c9686, "720");
              await _0x6117c7.sendMessage(_0x492848, {
                'delete': _0x3446d1.key
              });
              await _0x6117c7.sendMessage(_0x492848, {
                'react': {
                  'text': '⬆️',
                  'key': _0x50a285.key
                }
              });
              await _0x6117c7.sendMessage(_0x492848, {
                'video': {
                  'url': _0x2ad5b7
                },
                'caption': "\n> *© Powered By Rhodvick Tech*\n",
                'contextInfo': {
                  'mentionedJid': ['923000000000@s.whatsapp.net'],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363284845910703@newsletter",
                    'newsletterName': "Rhodvick Tech ✻",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "Rhodvick Tech",
                    'body': "RHODVICKEZ-MD-MUSIC",
                    'mediaType': 0x1,
                    'sourceUrl': _0x37a988.url,
                    'thumbnailUrl': _0x37a988.thumbnail,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x50a285
              });
              await _0x6117c7.sendMessage(_0x492848, {
                'react': {
                  'text': '✅',
                  'key': _0x50a285.key
                }
              });
            } else {
              if (_0x1a6a3b === "1.4") {
                const _0xfc94af = await ytmp4('' + _0x3c9686, "1080");
                await _0x6117c7.sendMessage(_0x492848, {
                  'delete': _0x3446d1.key
                });
                await _0x6117c7.sendMessage(_0x492848, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x50a285.key
                  }
                });
                await _0x6117c7.sendMessage(_0x492848, {
                  'video': {
                    'url': _0xfc94af
                  },
                  'caption': "\n> *© Powered By Rhodvick Tech*\n"
                }, {
                  'quoted': _0x50a285
                });
                await _0x6117c7.sendMessage(_0x492848, {
                  'react': {
                    'text': '✅',
                    'key': _0x50a285.key
                  }
                });
              } else {
                if (_0x1a6a3b === '2.1') {
                  const _0x51a57c = await ytmp4('' + _0x3c9686, "360");
                  await _0x6117c7.sendMessage(_0x492848, {
                    'delete': _0x3446d1.key
                  });
                  await _0x6117c7.sendMessage(_0x492848, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x50a285.key
                    }
                  });
                  await _0x6117c7.sendMessage(_0x492848, {
                    'document': {
                      'url': _0x51a57c
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x37a988.title + '.mp4',
                    'caption': "\n> *© Powered By Jawad TechX*\n",
                    'contextInfo': {
                      'mentionedJid': ["923000000000@s.whatsapp.net"],
                      'groupMentions': [],
                      'forwardingScore': 0x1,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363284845910703@newsletter",
                        'newsletterName': "Rhodvick Tech ✻",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "Rhodvick Tech",
                        'body': "RHODVICKEZ-MD-MUSIC",
                        'mediaType': 0x1,
                        'sourceUrl': _0x37a988.url,
                        'thumbnailUrl': _0x37a988.thumbnail,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x50a285
                  });
                  await _0x6117c7.sendMessage(_0x492848, {
                    'react': {
                      'text': '✅',
                      'key': _0x50a285.key
                    }
                  });
                } else {
                  if (_0x1a6a3b === "2.2") {
                    const _0x44e31b = await ytmp4('' + _0x3c9686, "480");
                    await _0x6117c7.sendMessage(_0x492848, {
                      'delete': _0x3446d1.key
                    });
                    await _0x6117c7.sendMessage(_0x492848, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x50a285.key
                      }
                    });
                    await _0x6117c7.sendMessage(_0x492848, {
                      'document': {
                        'url': _0x44e31b
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x37a988.title + ".mp4",
                      'caption': "\n> *© Powered By Rhodvick Tech*\n",
                      'contextInfo': {
                        'mentionedJid': ["923000000000@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x1,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': "120363284845910703@newsletter",
                          'newsletterName': "Rhodvick Tech ✻",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': "RHODVICK TECH",
                          'body': "RHODVICKEZ-MD-MUSIC",
                          'mediaType': 0x1,
                          'sourceUrl': _0x37a988.url,
                          'thumbnailUrl': _0x37a988.thumbnail,
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, {
                      'quoted': _0x50a285
                    });
                    await _0x6117c7.sendMessage(_0x492848, {
                      'react': {
                        'text': '✅',
                        'key': _0x50a285.key
                      }
                    });
                  } else {
                    if (_0x1a6a3b === "2.3") {
                      const _0x519519 = await ytmp4('' + _0x3c9686, '720');
                      await _0x6117c7.sendMessage(_0x492848, {
                        'delete': _0x3446d1.key
                      });
                      await _0x6117c7.sendMessage(_0x492848, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x50a285.key
                        }
                      });
                      await _0x6117c7.sendMessage(_0x492848, {
                        'document': {
                          'url': _0x519519
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0x37a988.title + ".mp4",
                        'caption': "\n> *© Powered By Rhodvick Tech*\n",
                        'contextInfo': {
                          'mentionedJid': ["923000000000@s.whatsapp.net"],
                          'groupMentions': [],
                          'forwardingScore': 0x1,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': "120363284845910703@newsletter",
                            'newsletterName': "Rhodvick Tech ✻",
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "Rhodvick Tech",
                            'body': 'RHODVICKEZ-MD-MUSIC',
                            'mediaType': 0x1,
                            'sourceUrl': _0x37a988.url,
                            'thumbnailUrl': _0x37a988.thumbnail,
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, {
                        'quoted': _0x50a285
                      });
                      await _0x6117c7.sendMessage(_0x492848, {
                        'react': {
                          'text': '✅',
                          'key': _0x50a285.key
                        }
                      });
                    } else {
                      if (_0x1a6a3b === "2.4") {
                        const _0x4fb87f = await ytmp4('' + _0x3c9686, "1080");
                        await _0x6117c7.sendMessage(_0x492848, {
                          'delete': _0x3446d1.key
                        });
                        await _0x6117c7.sendMessage(_0x492848, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x50a285.key
                          }
                        });
                        await _0x6117c7.sendMessage(_0x492848, {
                          'document': {
                            'url': _0x4fb87f
                          },
                          'mimetype': "video/mp4",
                          'fileName': _0x37a988.title + ".mp4",
                          'caption': "\n> *© Powered By Rhodvick Tech*\n",
                          'contextInfo': {
                            'mentionedJid': ["923000000000@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x1,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': "120363284845910703@newsletter",
                              'newsletterName': "Rhodvick Tech ✻",
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': "Rhodvick Tech",
                              'body': "RHODVICKEZ-MD-MUSIC",
                              'mediaType': 0x1,
                              'sourceUrl': _0x37a988.url,
                              'thumbnailUrl': _0x37a988.thumbnail,
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, {
                          'quoted': _0x50a285
                        });
                        await _0x6117c7.sendMessage(_0x492848, {
                          'react': {
                            'text': '✅',
                            'key': _0x50a285.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x43ae41) {
    console.log(_0x43ae41);
    _0x26d5b1('' + _0x43ae41);
  }
});
cmd({
  'pattern': "yta",
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2ed8ae, _0x564a8c, _0x958306, {
  from: _0x217b5c,
  q: _0x1787bc,
  reply: _0xa0dd3a
}) => {
  try {
    if (!_0x1787bc) {
      return await _0xa0dd3a("*Need a YouTube URL!*");
    }
    const _0x167d7c = await fetchJson("https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=" + _0x1787bc);
    const _0x5c1f2e = _0x167d7c.result.download_url;
    await _0x2ed8ae.sendMessage(_0x217b5c, {
      'audio': {
        'url': _0x5c1f2e
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x564a8c
    });
  } catch (_0x4ee768) {
    console.log("First attempt failed:", _0x4ee768);
    try {
      const _0xd7690d = await dlyta(_0x1787bc);
      await _0x2ed8ae.sendMessage(_0x217b5c, {
        'audio': {
          'url': _0xd7690d.dl_link
        },
        'mimetype': 'audio/mpeg'
      }, {
        'quoted': _0x564a8c
      });
    } catch (_0x374080) {
      console.log("Second attempt failed:", _0x374080);
      await _0xa0dd3a("*Failed to process the request. Please try again later!*");
    }
  }
});
