// TO ALL RHODVICKEZ MD BOT CLONERS
// THATS WHY I ADD HARD ENC BECOZ YOU DONT ASK FOR PERMISSION 
// F*CK YOU IF YOU ARE THAT KIND, RHODVICK TECH

const { cmd } = require('../command');
const config = require('../config');

// Developer's WhatsApp number
const DEVELOPER_NUMBER = '254115408870@s.whatsapp.net'; // Replace with your number

cmd({
    pattern: 'report',
    alias: ['rep', 'feedback'],
    react: '📬',
    desc: 'Send a report to the developer.',
    category: 'misc',
    filename: __filename
}, async (conn, mek, m, {
    from,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply
}) => {
    try {
        // Extract the report message (everything after ".report")
        const reportMessage = body.replace('.report', '').trim();

        if (!reportMessage) {
            return reply('Please provide a report message.\n\n Example: `.report` Hi Rhodvick Tech , My bot is not downloading Songs');
        }

        // Format the report
        const formattedReport = `🚨 *New Rhodvick Tech Report* 🚨\n\n` +
                               `*👤 From:* ${sender.split('@')[0]}\n` +
                               `*👥 Group:* ${isGroup ? 'Yes' : 'No'}\n` +
                               `*📩 Message:* ${reportMessage}`;

        // Send the report to the developer with an image
        await conn.sendMessage(DEVELOPER_NUMBER, {
            image: { url: 'https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg' }, // Image URL
            caption: formattedReport,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363284845910703@newsletter',
                    newsletterName: '『 RHODVICK TECH 』',
                    serverMessageId: 143
                }
            }
        });

        // Notify the user with an image
        await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg' }, // Image URL
            caption: 'Your report has been sent to the Rhodvick Tech. Thank you!✅',
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363284845910703@newsletter',
                    newsletterName: '『 RHODVICK TECH 』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error('Error in report command:', error);
        reply('An error occurred while sending your report. Please try again later.');
    }
});
