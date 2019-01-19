const Discord = require('discord.js');
const bot = new Discord.Client();
const pfix = "yt;";

bot.on("ready", () => {
console.log('Im managing again!');
bot.channels.get('536088775600898048').send('Link Manager v1.3 Operational');
bot.user.setActivity(`you | yt;role`, {type: "LISTENING"});
});

bot.on("message", message => {
let args = message.content.slice(pfix.length).trim().split(' ');
let msg = message.content.toLowerCase();
if(msg.includes("youtu")) {
if(message.channel.id == '536097338628767754') return;
if(message.channel.id == '536112056957403136') return;
message.delete();
message.reply("<#536097338628767754>");
}
if(msg === pfix + "role") {
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
});

bot.login(process.env.TOKEN)