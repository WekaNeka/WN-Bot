const Discord = require('discord.js');
const YTDL = require("ytdl-core");

const TOKEN = "NTQ0ODU2Nzc0MDgwMDY5NjMy.D0RNMQ.xNPdoB4_qg5AlSThp25yNnewsHM";
const PREFIX = "B!"
var bot = new Discord.Client();

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispacther = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))

    server.queue.shift();

    server.dispacther.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var servers = {};

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    console.log(message.content);
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) {
        case "author":
        message.channel.sendMessage("https://www.youtube.com/channel/UCyyBceaWftjdOObIRUG6r4g");
        break;
    }

});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()) {
        case "help":
        message.channel.sendMessage("Fitur bot ini baru tersedia untuk Music (itupun cacat geming) B!Play (Link YT) maka akan memutar lagu yang ada di link tersebut , B!skip untuk ngeskip lagu dan B!stop untuk nyetop lagu (Can't");
        break;

        default:
          message.channel.sendMessage("Command anda tidak diketahui coba B!help untuk mengetahui command yang ada")
     
        case "play":
          if (!args[1]) {
              message.channel.sendMessage ("linknya gan");
              return;
          }

         
         if (!message.member.voiceChannel) {  
            message.channel.sendMessage ("Masuk ke voice channel dulu gay(n)");
            return;
          
         }

         if(!servers[message.channel.guild.id]) servers[message.channel.guild.id] = {
             queue : []
         };

         var server = servers[message.channel.guild.id];

         server.queue.push(args[1]);

         if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
         });
          break;
          case "skip" :
           var server = servers[message.guild.id];

           if (server.dispacther) server.dispacther.end();
           break;
        case "stop":
          var server = servers[message.guild.id];

          if (message.guild.voiceConnection) message.guild.voiceChannel.disconnect();
          break;

          f (message.guild.voiceConnection)
          {
              for (var i = server.queue.length - 1; i >= 0; i--) 
              {
                  server.queue.splice(i, 1);
           }
              server.dispatcher.end();
              console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
          }
        
    }

});

bot.on('message', msg => {
    if (msg.content === 'B!Desc') {
      msg.reply('Bot BPUPKI adalah bot yang dibuat untuk kedamaian masyarakat luas, secara harfiah bot ini dibuat oleh tangan orang hebat (Kang fap) yang berdasarkan asas ke kimochian tertentu');
    }
  });

  bot.on("ready",function(){   

    console.log("READY");    
   
   bot.user.setPresence({ game: { name: "GTA 9 Windows XP Edition|B!help" , type: 0 } });
   
   });
  
  


bot.login(TOKEN);