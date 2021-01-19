const discord = require("discord.js");

const {MessageEmbed} = require ("discord.js");

const fetch = require ("node-fetch");

module.exports = {
    name: "dance",
    aliases:null,
    description: "Are ya happy? Lets Dance!",
    usage: 'dance',
    category: 'emotes',


    run:async (bot, message, args)=> {

        const data = await fetch ("https://miss.perssbest.repl.co/api/v2/dance") .then (res => res.json ());

        let embed = new discord.MessageEmbed()

        .setFooter(message.author.username)
        .setDescription(`${message.author.username} Is Dancing!`)
        .setImage(`${data.image}`)
        .setTitle(`♪ \(^ω^\ )`)
        .setColor("#DDA0DD")
        .setTimestamp()

      message.channel.send(embed);

    }

};

