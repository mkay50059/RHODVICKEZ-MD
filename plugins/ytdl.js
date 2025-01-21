const {
  cmd,
  commands
} = require('../command');
const yts = require("yt-search");
const {
  fetchJson
} = require('../lib/functions');
const {
  ytsearch,
  ytmp3
} = require("@dark-yasiya/yt-dl.js");
const axios = require("axios");
async function ytmp4(_0x228005, _0x2af1df) {
  try {
    if (!_0x228005 || !_0x2af1df) {
      throw new Error("url and format parameters are required.");
    }
    const _0x3369b4 = parseInt(_0x2af1df.replace('p', ''), 0xa);
    const _0x1ad8b0 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x3369b4,
      'url': _0x228005
    };
    const _0x101457 = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'Origin': 'https://loader.to',
      'Referer': 'https://loader.to',
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x2e8339 = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0x1ad8b0,
      'headers': _0x101457
    });
    const _0x40231a = _0x2e8339.data.id;
    const _0x52123d = async () => {
      const _0x3ef775 = {
        'id': _0x40231a
      };
      try {
        const _0x195689 = await axios.get('https://p.oceansaver.in/ajax/progress.php', {
          'params': _0x3ef775,
          'headers': _0x101457
        });
        const {
          progress: _0x76f2fc,
          download_url: _0x92b9b8,
          text: _0x353f08
        } = _0x195689.data;
        return _0x353f08 === 'Finished' ? _0x92b9b8 : (await new Promise(_0x405ffa => setTimeout(_0x405ffa, 0x3e8)), _0x52123d());
      } catch (_0x14e9b0) {
        throw new Error("Error in progress check: " + _0x14e9b0.message);
      }
    };
    return await _0x52123d();
  } catch (_0x17375c) {
    console.error("Error:", _0x17375c);
    return {
      'error': _0x17375c.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x3d6b38) {
  const _0x5d936f = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x1a0f28 = _0x3d6b38.match(_0x5d936f);
  return _0x1a0f28 ? _0x1a0f28[0x1] : null;
}
function convertYouTubeLink(_0x12dfff) {
  const _0x4c7981 = extractYouTubeId(_0x12dfff);
  if (_0x4c7981) {
    return "https://www.youtube.com/watch?v=" + _0x4c7981;
  }
  return _0x12dfff;
}
cmd({
  'pattern': "song",
  'alias': "play",
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x10bab0, _0x5d7a7a, _0x1813c8, {
  from: _0x4638f9,
  quoted: _0x16a2e2,
  body: _0xc77ec8,
  isCmd: _0x42f54,
  command: _0x194dc0,
  args: _0x2f59c8,
  q: _0x3cc448,
  isGroup: _0x21a0c8,
  sender: _0x501ad2,
  senderNumber: _0x45ffc3,
  botNumber2: _0x3bc216,
  botNumber: _0x1f6cd8,
  pushname: _0x3d0624,
  isMe: _0x10747c,
  isOwner: _0x379a4e,
  groupMetadata: _0x3f44a5,
  groupName: _0x27cb97,
  participants: _0x2d802c,
  groupAdmins: _0x17d3a4,
  isBotAdmins: _0xe08da5,
  isAdmins: _0x598851,
  reply: _0x262793
}) => {
  try {
    if (!_0x3cc448) {
      return _0x262793("Please give me a URL or title.");
    }
    _0x3cc448 = convertYouTubeLink(_0x3cc448);
    const _0x129327 = await yts(_0x3cc448);
    const _0x23a76a = _0x129327.videos[0x0];
    const _0x582c58 = _0x23a76a.url;
    let _0x45b80b = "\n*RHODVICKEZ-MD-MUSIC*\n❍ *ᴛɪᴛʟᴇ :* " + _0x23a76a.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x23a76a.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x23a76a.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x23a76a.ago + "\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧*\n\n*1*     ┃  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\nRhodvick Tech ✻\n";
    const _0x50e748 = await _0x10bab0.sendMessage(_0x4638f9, {
      'image': {
        'url': _0x23a76a.thumbnail
      },
      'caption': _0x45b80b,
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
          'title': "RHODVICK TECH",
          'body': "RHODVICKEZ-MD-MUSIC",
          'mediaType': 0x1,
          'sourceUrl': 'https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N',
          'thumbnailUrl': "https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x5d7a7a
    });
    const _0x548fa9 = _0x50e748.key.id;
    _0x10bab0.ev.on("messages.upsert", async _0x1a8ad8 => {
      const _0xf04285 = _0x1a8ad8.messages[0x0];
      if (!_0xf04285.message) {
        return;
      }
      const _0x3d65a1 = _0xf04285.message.conversation || _0xf04285.message.extendedTextMessage?.["text"];
      const _0x5eb8a1 = _0xf04285.key.remoteJid;
      const _0x159544 = _0xf04285.message.extendedTextMessage && _0xf04285.message.extendedTextMessage.contextInfo.stanzaId === _0x548fa9;
      if (_0x159544) {
        await _0x10bab0.sendMessage(_0x5eb8a1, {
          'react': {
            'text': '⬇️',
            'key': _0xf04285.key
          }
        });
        if (_0x3d65a1 === '1') {
          const _0x230792 = await ytmp3(_0x582c58);
          await _0x10bab0.sendMessage(_0x5eb8a1, {
            'react': {
              'text': '⬆️',
              'key': _0xf04285.key
            }
          });
          await _0x10bab0.sendMessage(_0x5eb8a1, {
            'audio': {
              'url': _0x230792.download.url
            },
            'mimetype': "audio/mpeg",
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
                'body': "Rhodvick Tech",
                'mediaType': 0x1,
                'sourceUrl': _0x23a76a.url,
                'thumbnailUrl': _0x23a76a.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0xf04285
          });
          await _0x10bab0.sendMessage(_0x5eb8a1, {
            'react': {
              'text': '✅',
              'key': _0xf04285.key
            }
          });
        } else {
          if (_0x3d65a1 === '2') {
            const _0x147bf2 = await ytmp3(_0x582c58);
            await _0x10bab0.sendMessage(_0x5eb8a1, {
              'react': {
                'text': '⬆️',
                'key': _0xf04285.key
              }
            });
            await _0x10bab0.sendMessage(_0x5eb8a1, {
              'document': {
                'url': _0x147bf2.download.url
              },
              'mimetype': "audio/mp3",
              'fileName': _0x23a76a.title + '.mp3',
              'caption': "\n> *© Powered By Rhodvick Tech*\n ",
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
                  'body': 'RHODVICKEZ-MD-MUSIC',
                  'mediaType': 0x1,
                  'sourceUrl': _0x23a76a.url,
                  'thumbnailUrl': _0x23a76a.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0xf04285
            });
            await _0x10bab0.sendMessage(_0x5eb8a1, {
              'react': {
                'text': '✅',
                'key': _0xf04285.key
              }
            });
            await _0x10bab0.sendMessage(_0x5eb8a1, {
              'delete': _0x50e748.key
            });
          }
        }
      }
    });
  } catch (_0x214ed2) {
    console.log(_0x214ed2);
    _0x262793('' + _0x214ed2);
  }
});
cmd({
  'pattern': "video",
  'desc': "To download videos.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x25435b, _0x50d35f, _0x5182cc, {
  from: _0x439376,
  quoted: _0xb6d0fc,
  body: _0x5e7e0a,
  isCmd: _0x33f433,
  command: _0x5cf09a,
  args: _0x317e7e,
  q: _0x2b434e,
  isGroup: _0x645fff,
  sender: _0x179ff5,
  senderNumber: _0x12674b,
  botNumber2: _0x3a2a39,
  botNumber: _0x2287a2,
  pushname: _0x3ed788,
  isMe: _0x12f0f9,
  isOwner: _0xf47c38,
  groupMetadata: _0x59aab8,
  groupName: _0x5d47da,
  participants: _0x98d1a0,
  groupAdmins: _0x156f91,
  isBotAdmins: _0x474f85,
  isAdmins: _0x230168,
  reply: _0x46ba50
}) => {
  try {
    if (!_0x2b434e) {
      return _0x46ba50("Please give me a URL or title.");
    }
    _0x2b434e = convertYouTubeLink(_0x2b434e);
    const _0x3e8ede = await yts(_0x2b434e);
    const _0x2ff49f = _0x3e8ede.videos[0x0];
    const _0xaea594 = _0x2ff49f.url;
    let _0x3f8bfd = "\n*RHODVICK TECH-VIDEO*\n " + _0x2ff49f.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x2ff49f.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x2ff49f.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x2ff49f.ago + "\n\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> Rhodvick Tech ✻\n";
    const _0x5e81e0 = await _0x25435b.sendMessage(_0x439376, {
      'image': {
        'url': _0x2ff49f.thumbnail
      },
      'caption': _0x3f8bfd,
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
          'thumbnailUrl': "https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x50d35f
    });
    const _0x1ca37e = _0x5e81e0.key.id;
    _0x25435b.ev.on('messages.upsert', async _0x88b9dc => {
      const _0xb2e6dd = _0x88b9dc.messages[0x0];
      if (!_0xb2e6dd.message) {
        return;
      }
      const _0x1f27c6 = _0xb2e6dd.message.conversation || _0xb2e6dd.message.extendedTextMessage?.['text'];
      const _0x49ba55 = _0xb2e6dd.key.remoteJid;
      const _0x48f63b = _0xb2e6dd.message.extendedTextMessage && _0xb2e6dd.message.extendedTextMessage.contextInfo.stanzaId === _0x1ca37e;
      if (_0x48f63b) {
        await _0x25435b.sendMessage(_0x49ba55, {
          'react': {
            'text': '⬇️',
            'key': _0xb2e6dd.key
          }
        });
        if (_0x1f27c6 === "1.1") {
          const _0x4bbba5 = await ytmp4('' + _0xaea594, '360p');
          await _0x25435b.sendMessage(_0x49ba55, {
            'delete': _0x5e81e0.key
          });
          await _0x25435b.sendMessage(_0x49ba55, {
            'react': {
              'text': '⬆️',
              'key': _0xb2e6dd.key
            }
          });
          await _0x25435b.sendMessage(_0x49ba55, {
            'video': {
              'url': _0x4bbba5
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
                'sourceUrl': _0x2ff49f.url,
                'thumbnailUrl': _0x2ff49f.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0xb2e6dd
          });
          await _0x25435b.sendMessage(_0x49ba55, {
            'react': {
              'text': '✅',
              'key': _0xb2e6dd.key
            }
          });
        } else {
          if (_0x1f27c6 === '1.2') {
            const _0x445074 = await ytmp4('' + _0xaea594, "480");
            await _0x25435b.sendMessage(_0x49ba55, {
              'delete': _0x5e81e0.key
            });
            await _0x25435b.sendMessage(_0x49ba55, {
              'react': {
                'text': '⬆️',
                'key': _0xb2e6dd.key
              }
            });
            await _0x25435b.sendMessage(_0x49ba55, {
              'video': {
                'url': _0x445074
              },
              'caption': "\n> *© Powered By Rhodvick Tech*\n",
              'contextInfo': {
                'mentionedJid': ["923000000000@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363284845910703@newsletter',
                  'newsletterName': "Rhodvick Tech ✻",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "RHODVICK TECH",
                  'body': "RHODVICKEZ-MD-MUSIC",
                  'mediaType': 0x1,
                  'sourceUrl': _0x2ff49f.url,
                  'thumbnailUrl': _0x2ff49f.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0xb2e6dd
            });
            await _0x25435b.sendMessage(_0x49ba55, {
              'react': {
                'text': '✅',
                'key': _0xb2e6dd.key
              }
            });
          } else {
            if (_0x1f27c6 === "1.3") {
              const _0x2a0d05 = await ytmp4('' + _0xaea594, '720');
              await _0x25435b.sendMessage(_0x49ba55, {
                'delete': _0x5e81e0.key
              });
              await _0x25435b.sendMessage(_0x49ba55, {
                'react': {
                  'text': '⬆️',
                  'key': _0xb2e6dd.key
                }
              });
              await _0x25435b.sendMessage(_0x49ba55, {
                'video': {
                  'url': _0x2a0d05
                },
                'caption': "\n> *© Powered By Rhodvick Tech*\n",
                'contextInfo': {
                  'mentionedJid': ["923000000000@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363284845910703@newsletter',
                    'newsletterName': "Rhodvick Tech ✻",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "Rhodvick Tech",
                    'body': "RHODVICKEZ-MD-MUSIC",
                    'mediaType': 0x1,
                    'sourceUrl': _0x2ff49f.url,
                    'thumbnailUrl': _0x2ff49f.thumbnail,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0xb2e6dd
              });
              await _0x25435b.sendMessage(_0x49ba55, {
                'react': {
                  'text': '✅',
                  'key': _0xb2e6dd.key
                }
              });
            } else {
              if (_0x1f27c6 === "1.4") {
                const _0x1b7224 = await ytmp4('' + _0xaea594, "1080");
                await _0x25435b.sendMessage(_0x49ba55, {
                  'delete': _0x5e81e0.key
                });
                await _0x25435b.sendMessage(_0x49ba55, {
                  'react': {
                    'text': '⬆️',
                    'key': _0xb2e6dd.key
                  }
                });
                await _0x25435b.sendMessage(_0x49ba55, {
                  'video': {
                    'url': _0x1b7224
                  },
                  'caption': "\n> *© Powered By Rhodvick Tech*\n"
                }, {
                  'quoted': _0xb2e6dd
                });
                await _0x25435b.sendMessage(_0x49ba55, {
                  'react': {
                    'text': '✅',
                    'key': _0xb2e6dd.key
                  }
                });
              } else {
                if (_0x1f27c6 === '2.1') {
                  const _0x5aeb0c = await ytmp4('' + _0xaea594, "360");
                  await _0x25435b.sendMessage(_0x49ba55, {
                    'delete': _0x5e81e0.key
                  });
                  await _0x25435b.sendMessage(_0x49ba55, {
                    'react': {
                      'text': '⬆️',
                      'key': _0xb2e6dd.key
                    }
                  });
                  await _0x25435b.sendMessage(_0x49ba55, {
                    'document': {
                      'url': _0x5aeb0c
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x2ff49f.title + ".mp4",
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
                        'sourceUrl': _0x2ff49f.url,
                        'thumbnailUrl': _0x2ff49f.thumbnail,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0xb2e6dd
                  });
                  await _0x25435b.sendMessage(_0x49ba55, {
                    'react': {
                      'text': '✅',
                      'key': _0xb2e6dd.key
                    }
                  });
                } else {
                  if (_0x1f27c6 === '2.2') {
                    const _0x53c182 = await ytmp4('' + _0xaea594, "480");
                    await _0x25435b.sendMessage(_0x49ba55, {
                      'delete': _0x5e81e0.key
                    });
                    await _0x25435b.sendMessage(_0x49ba55, {
                      'react': {
                        'text': '⬆️',
                        'key': _0xb2e6dd.key
                      }
                    });
                    await _0x25435b.sendMessage(_0x49ba55, {
                      'document': {
                        'url': _0x53c182
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x2ff49f.title + ".mp4",
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
                          'sourceUrl': _0x2ff49f.url,
                          'thumbnailUrl': _0x2ff49f.thumbnail,
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, {
                      'quoted': _0xb2e6dd
                    });
                    await _0x25435b.sendMessage(_0x49ba55, {
                      'react': {
                        'text': '✅',
                        'key': _0xb2e6dd.key
                      }
                    });
                  } else {
                    if (_0x1f27c6 === '2.3') {
                      const _0x13a782 = await ytmp4('' + _0xaea594, "720");
                      await _0x25435b.sendMessage(_0x49ba55, {
                        'delete': _0x5e81e0.key
                      });
                      await _0x25435b.sendMessage(_0x49ba55, {
                        'react': {
                          'text': '⬆️',
                          'key': _0xb2e6dd.key
                        }
                      });
                      await _0x25435b.sendMessage(_0x49ba55, {
                        'document': {
                          'url': _0x13a782
                        },
                        'mimetype': "video/mp4",
                        'fileName': _0x2ff49f.title + '.mp4',
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
                            'sourceUrl': _0x2ff49f.url,
                            'thumbnailUrl': _0x2ff49f.thumbnail,
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, {
                        'quoted': _0xb2e6dd
                      });
                      await _0x25435b.sendMessage(_0x49ba55, {
                        'react': {
                          'text': '✅',
                          'key': _0xb2e6dd.key
                        }
                      });
                    } else {
                      if (_0x1f27c6 === "2.4") {
                        const _0x197ea1 = await ytmp4('' + _0xaea594, "1080");
                        await _0x25435b.sendMessage(_0x49ba55, {
                          'delete': _0x5e81e0.key
                        });
                        await _0x25435b.sendMessage(_0x49ba55, {
                          'react': {
                            'text': '⬆️',
                            'key': _0xb2e6dd.key
                          }
                        });
                        await _0x25435b.sendMessage(_0x49ba55, {
                          'document': {
                            'url': _0x197ea1
                          },
                          'mimetype': 'video/mp4',
                          'fileName': _0x2ff49f.title + ".mp4",
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
                              'sourceUrl': _0x2ff49f.url,
                              'thumbnailUrl': _0x2ff49f.thumbnail,
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, {
                          'quoted': _0xb2e6dd
                        });
                        await _0x25435b.sendMessage(_0x49ba55, {
                          'react': {
                            'text': '✅',
                            'key': _0xb2e6dd.key
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
  } catch (_0x35045b) {
    console.log(_0x35045b);
    _0x46ba50('' + _0x35045b);
  }
});
cmd({
  'pattern': "yta",
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1c3cfa, _0x40bd2f, _0x4471d9, {
  from: _0x205c00,
  q: _0x57e0db,
  reply: _0x101606
}) => {
  try {
    if (!_0x57e0db) {
      return await _0x101606("*Need a YouTube URL!*");
    }
    const _0xc734ff = await fetchJson("https://api.dreaded.site/api/ytdl2/audio?url=" + _0x57e0db);
    const _0x370ff4 = _0xc734ff.result.download_url;
    await _0x1c3cfa.sendMessage(_0x205c00, {
      'audio': {
        'url': _0x370ff4
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x40bd2f
    });
  } catch (_0x59d2ca) {
    console.log("First attempt failed:", _0x59d2ca);
    try {
      const _0x57229d = await dlyta(_0x57e0db);
      await _0x1c3cfa.sendMessage(_0x205c00, {
        'audio': {
          'url': _0x57229d.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x40bd2f
      });
    } catch (_0x957faf) {
      console.log("Second attempt failed:", _0x957faf);
      await _0x101606("*Failed to process the request. Please try again later!*");
    }
  }
});
