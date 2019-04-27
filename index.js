const Discord = require('discord.js');
const client = new Discord.Client();
var bot = new Discord.Client();


bot.on("ready", function() {
    console.log("Ready");
});

bot.on('guildMemberAdd', member =>  {
    console.log('user ' + member.user.username + 'Telah Masuk Server')

    var role = member.guild.roles.find('name', 'Citizen');

    member.addRole(role)
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTcxMTQzOTcyNzY5MTAzODky.XMJdTA.FSB5Naf_pZ_88Lo5VcwRlUNA01g');