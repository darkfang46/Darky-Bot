const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
    name: "rate",
    aliases: null,
    category: "fun",
    description: "Bot Rate Your Given Thing!",
    usage: "Rate <Text>",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        let Content = args.join(" ");

        if (!Content) return message.channel.send(`Please Give Me Something To Rate!`);

        let embed = new Discord.MessageEmbed()
            .setColor(Color)
            .setTitle(`I Rate`)
            .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();

        message.channel.send(embed)

        //End

    }
};