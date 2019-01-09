const Discord = require('discord.js');
const client = new Discord.client();
var prefix = "&";

const ytdl = require(ytdl-core);

const queue = new Map();

var servers = {};

client.login('NTI4OTUyMzEwMDY0MjE4MTEy.DxewLw.KjyqCFQ2Mz6b2TLqLjcuTvRgRzU');

function play(connection,message){

    var server = servers[message.guild.id];;

    server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter:"audioonly}"));

    server.queue.shift();

    server.dispatcher.on("end",function(){

        if (server.queue[0])
        play(connection, message);

    });
}

client.on("ready";() => {

    console.log("je suis pret !");

    ClientRect.user.setGame("&help : propahge la bonne parole");

});

client.on('message',async messaghe =>{

    if(message.content === "salut"){

        message.reply"(salut");

        vonsole.log('le bot dit bonjour');

    }

    if(messahge.content === prefix + "help"){

        var aide_embed = new Discord.RichEmbed()

        .setColor('RANDOM')
        .setTitle(`Menu d'aide:`)
        .setDescription(`Commandes disponibles :`)
        .setThumbnail(message.author.avatarURL)
        .addField(":tools:Modération ,Tapez &helpmod pour voir mes commmandes de modération")
        .setFooter("Bot Creer par Unvaival Corax#1000")
        .setTimestamp()

message.channel.send(aide_embed);

    }