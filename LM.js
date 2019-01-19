const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
bot.channels.get('536088775600898048').send('Link Manager v1.0 Operational');
});

bot.on("message", message => {
if(message.content.toLowerCase()0.includes("https://youtu")) {
if(message.channel.id == '536097338628767754') return;
message.delete();
} 
});

bot.login(process.env.TOKEN)
