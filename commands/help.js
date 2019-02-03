const Discord = require('discord.js');

exports.run = (bot, message, args) => {
message.channel.send(new Discord.RichEmbed()
.setTitle('Help')
.setDescription('**yt;role** - Request a subscriber role.')
.setColor([255, 0, 0]));
}
