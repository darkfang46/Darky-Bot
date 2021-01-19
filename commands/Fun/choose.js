const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
    name: "choose",
    aliases: null,
    category: "fun",
    description: "Bot Choose Something!",
    usage: "Choose <Text> Or <Text>",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        let Content = args.join(" ");

        if (!Content) return message.channel.send(`Please Give Me Text!`);

        if (!Content.toLowerCase().includes("or")) {
            return message.channel.send(`Please Give Me 2nd Choice & Add Or!`)
        };

        if (Content.toLowerCase().endsWith("or")) {
            return message.channel.send(`Please Give Me 2nd Choice!`)
        };

        if (Content.length > 500) return message.channel.send(`Please Make Shorter! | Limit : 500`);

        let LowerCaseOr = Content.replace("Or", "or").replace("oR", "or").replace("OR", "or");

        let Select = LowerCaseOr.split(` or `)
		let Result = Select[Math.floor(Math.random() * Select.length)]

        let embed = new MessageEmbed()
        .setColor(Color)
        .setTitle(`I Choose`)
        .setDescription(Result)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();

        message.channel.send(embed);

        //End

    }
};