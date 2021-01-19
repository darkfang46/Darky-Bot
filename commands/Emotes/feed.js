const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: "feed",
        aliases: null,
        category: "emotes",
        description: "Feed someone (･o･;) ",
        usage: "feed <user>",
        accessableby: "everyone",
   
    run: async (bot, message, args) => {

  let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;

  const { body } = await superagent

    .get("https://nekos.life/api/v2/img/feed");

        const embed = new MessageEmbed()

        .setColor("DDA0DD")
        .setDescription(`${message.author.username} fed ${victim}`)
        .setTitle("(･o･;) ")
        .setImage(body.url)
        .setTimestamp()
        .setFooter(message.author.username);

         message.channel.send(embed);

    }

}