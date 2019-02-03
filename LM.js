const Discord = require('discord.js');
const bot = new Discord.Client();
const pfix = "yt;";

bot.on("ready", () => {
console.log('Im managing again!');
bot.channels.get('536088775600898048').send('Link Manager v1.3.1 Operational');
bot.user.setActivity(`you | yt;help`, {type: "LISTENING"});
});

bot.on('message', message => {
let msg = message.content.toUpperCase();
let args = message.content.slice(pfix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();
if (!msg.startsWith(pfix)) return;
if(message.author.bot) return;

try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
} catch(e) {
 message.channel.send(e.message)
}
});

bot.login(process.env.TOKEN)
