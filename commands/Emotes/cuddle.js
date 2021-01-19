const Discord = require('discord.js');

const { MessageEmbed } = require('discord.js');

const superagent = require('superagent');

module.exports = {
        name: "cuddle",
        aliases:null,
        category: "emotes",
        description: "Cuddle someone (つ≧▽≦)つ",
        usage: "cuddle <user>",
        accessableby: "everyone",

    run: async (bot, message, args) => {

  let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;

  const { body } = await superagent

    .get("https://nekos.life/api/v2/img/cuddle");

        const embed = new MessageEmbed()

        .setColor("DDA0DD")
        .setDescription(`${message.author.username} cuddled ${victim}`)
        .setTitle("⊂(･ω･*⊂)")
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`${message.author.username}`);

         message.channel.send(embed);

    }

}