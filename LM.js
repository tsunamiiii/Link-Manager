const Discord = require('discord.js');
const bot = new Discord.Client();
const pfix = "YT;";

bot.on("ready", () => {
console.log('Im managing again!');
bot.channels.get('536088775600898048').send('Link Manager v1.3.1 Operational');
bot.user.setActivity(`you | yt;help`, {type: "LISTENING"});
});

bot.on('message', async message => {
let msg = message.content.toUpperCase();
let args = message.content.slice(pfix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();
if (!msg.startsWith(pfix)) return;
if(message.author.bot) return;
if(msg.includes('.youtu') {
   if(message.channel.id == '536097338628767754') return;
   message.delete();
   message.reply('<#536097338628767754>').then(msg => {
     msg.delete(5000)
   });
}
try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
} catch(e) {
 message.channel.send(e.message)
}
});

bot.login(process.env.TOKEN)
