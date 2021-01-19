const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
  name: "ascii",
  aliases: null,
  category: "fun",
  description: "Ascii Art!",
  usage: "Ascii <Text>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Please Give Me Text!`);

    if (args.length === 1) return message.channel.send(`1 Word Really?`);

    if (Content.length > 20)
      return message.channel.send(`Please Make Shorter! | Limit : 20`);

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
