const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");
const fetch = require("node-fetch");

module.exports = {
    name: "meme",
    aliases: null,
    category: "fun",
    description: "Send A Meme!",
    usage: "Meme",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        fetch("https://meme-api.herokuapp.com/gimme")
        .then(res => res.json())
        .then(json => {

          let embed = new MessageEmbed()
            .setColor(Color)
            .setTitle(`${json.title}`)
            .setURL(json.postLink)
            .setImage(json.url)
            .setFooter(`From /r/${json.subreddit}`);

          message.channel.send(embed);
        });

        //End

    }
};