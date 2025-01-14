const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ _Owner : *${config.OWNER_NAME}*_
┃★│ _Baileys : *Multi Device*_
┃★│ _Type : *NodeJs*_
┃★│ _Platform : *Heroku*_
┃★│ _Mode : *[${config.MODE}]*_
┃★│ _Prifix : *[${config.PREFIX}]*_
┃★│ _Version : *1.0.1*_
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *DOWNLOAD MENU* 〕━━┈⊷
✦╭─────────────·๏
✦➛ _facebook_
✦➛ _mediafire_
✦➛ _tiktok_
✦➛ _twitter_
✦➛ _Insta_
✦➛ _apk_
✦➛ _img_
✦➛ _tt2_
✦➛ _git_
✦➛ _spotify_
✦➛ _play_
✦➛ _play2_
✦➛ _play3_
✦➛ _audio_
✦➛ _video_
✦➛ _video2_
✦➛ _ytmp3_
✦➛ _ytmp4_
✦➛ _song_
✦➛ _darama
✦➛ _gdrive_
✦➛ _smovie_
✦➛ _baiscope_ 
✦➛ _ginisilia_ 
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *GROUP MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _grouplink_
✦➛ _kickall_
✦➛ _kickall2_
✦➛ _kickall3_
✦➛ _add_
✦➛ _remove_
✦➛ _kick_
✦➛ _promote_ 
✦➛ _demote_
✦➛ _dismiss_ 
✦➛ _revoke_
✦➛ _setgoodbye_
✦➛ _setwelcome_
✦➛ _delete_ 
✦➛ _getpic_
✦➛ _ginfo_
✦➛ _delete_ 
✦➛ _disappear on_
✦➛ _disappear off_
✦➛ _disappear 7D,24H_
✦➛ _allreq_
✦➛ _updategname_
✦➛ _updategdesc_
✦➛ _joinrequests_
✦➛ _senddm_
✦➛ _nikal_
✦➛ _mute_
✦➛ _unmute_
✦➛ _lockgc_
✦➛ _unlockgc_
✦➛ _invite_
✦➛ _tag_
✦➛ _hidetag_
✦➛ _tagall_
✦➛ _tagadmins_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *OWNER MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _owner_
✦➛ _menu_
✦➛ _menu2_
✦➛ _vv_
✦➛ _listcmd_
✦➛ _allmenu_
✦➛ _repo_
✦➛ _block_
✦➛ _unblock_
✦➛ _fullpp_
✦➛ _setpp_
✦➛ _restart_
✦➛ _shutdown_
✦➛ _updatecmd_
✦➛ _alive_
✦➛ _ping_ 
✦➛ _gjid_
✦➛ _jid_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *FUN MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _insult_
✦➛ _hack_
✦➛ _ship_
✦➛ _character_
✦➛ _pickup_ 
✦➛ _joke_
✦➛ _hrt_
✦➛ _hpy_
✦➛ _syd_
✦➛ _anger_
✦➛ _shy_
✦➛ _kiss_
✦➛ _mon_
✦➛ _cunfuzed_
✦➛ _setpp_
✦➛ _hand_
✦➛ _nikal_
✦➛ _hold_
✦➛ _hug_
✦➛ _nikal_
✦➛ _hifi_
✦➛ _poke_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *CONVERT MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _sticker_
✦➛ _sticker2_
✦➛ _fancy_
✦➛ _take_
✦➛ _tomp3_
✦➛ _tts_
✦➛ _trt_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *AI MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _ai_
✦➛ _gpt_
✦➛ _meta_
✦➛ _blackbox_
✦➛ _gpt4_
✦➛ _bing_
✦➛ _copilot_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *MAIN MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _ping_
✦➛ _ping2_
✦➛ _speed_
✦➛ _live _
✦➛ _alive_
✦➛ _runtime_
✦➛ _uptime_
✦➛ _repo_
✦➛ _owner_
✦➛ _menu_
✦➛ _menu2_
✦➛ _restart_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *ANIME MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _fack_
✦➛ _dog_
✦➛ _awoo_
✦➛ _garl_
✦➛ _waifu_
✦➛ _neko_
✦➛ _megnumin_
✦➛ _neko_
✦➛ _maid_
✦➛ _loli_
✦➛ _animegirl_
✦➛ _animegirl_
✦➛ _animegirl1_
✦➛ _animegirl2_
✦➛ _animegirl3_
✦➛ _animegirl4_
✦➛ _animegirl5_
✦➛ _anime1_
✦➛ _anime1_
✦➛ _anime2_
✦➛ _anime3_
✦➛ _anime4_
✦➛ _anime5_
✦➛ _animenews_
✦➛ _foxgirl_
✦➛ _naruto_
✦➛└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *OTHER MENU* 〕━━┈⊷
✦➛╭─────────────·๏
✦➛ _fact_
✦➛ _pair_
✦➛ _pair2_
✦➛ _fancy_
✦➛ _logo <text>_
✦➛ _define_
✦➛ _news_
✦➛ _movie_
✦➛ _weather_
✦➛ _srepo_
✦➛ _insult_
✦➛ _save_
✦➛ _wikipedia_
✦➛ _gpass_
✦➛ _githubstalk_
✦➛ _yts_
✦➛ _ytv_
✦➛└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363284845910703@newsletter',
                        newsletterName: '✦RHODVICKEZ MD✦',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
