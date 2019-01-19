const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
bot.channels.get('536088775600898048').send('Link Manager v1.1 Operational');
});

bot.on("message", message => {
if(message.channel.id == '536097338628767754') return;
if(message.content.toLowerCase().includes("https://youtu")) {
message.delete();
message.reply("<#536097338628767754>");
} 
if(message.content.toLowerCase().includes("https://www.youtu")) {
message.delete();
message.reply("<#536097338628767754>");
} 
});

bot.login(process.env.TOKEN)



