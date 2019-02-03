const Discord = require('discord.js');


exports.run = (bot, message, args) => {
if(message.channel.id !== "536089768573009920") return;
try{
if(args.join(" ").includes("100")) {
bot.channels.get("536224842882482215").send(new Discord.RichEmbed()
.setTitle("Role Request")
.addField("Person", message.author.tag)
.addField("Role", "0-100 Subs"));
}
if(args.join(" ").includes("500")) {
bot.channels.get("536224842882482215").send(new Discord.RichEmbed()
.setTitle("Role Request")
.addField("Person", message.author.tag)
.addField("Role", "100-500 Subs"));
}
if(args.join(" ").includes("1000")) {
bot.channels.get("536224842882482215").send(new Discord.RichEmbed()
.setTitle("Role Request")
.addField("Person", message.author.tag)
.addField("Role", "500-1000 Subs"));
}
if(args.join(" ").includes("10000")) {
bot.channels.get("536224842882482215").send(new Discord.RichEmbed()
.setTitle("Role Request")
.addField("Person", message.author.tag)
.addField("Role", "1000-10000 Subs"));
}
if(args.join(" ").includes("100000")) {
bot.channels.get("536224842882482215").send(new Discord.RichEmbed()
.setTitle("Role Request")
.addField("Person", message.author.tag)
.addField("Role", "10000-100000 Subs"));
}
if(args.join(" ").includes("Veri")) {
bot.channels.get("536224842882482215").send(new Discord.RichEmbed()
.setTitle("Role Request")
.addField("Person", message.author.tag)
.addField("Role", "Verified"));
}
message.channel.send("Request sent. You will see the result soon.");
} catch(e) {
message.channel.send("Please provide a role.");
}
}
