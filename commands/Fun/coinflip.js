const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
    name: "coinflip",
    aliases: ["toss", "flip"],
    category: "fun",
    description: "Flip A Coin!",
    usage: "Coinflip",
    accessableby: "everyone",
    run: async (client, message, args) => {

      //Start

      const coins = [
        "Heads",
        "Tails",
        "Center"
      ]
      
      let result = Math.floor(Math.random() * coins.length);
      
      const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`The Coin Landed On`)
      .setDescription(coins[result])
      .setFooter(`Fliped by ${message.author.username}`)
      .setTimestamp();
      
      message.channel.send(embed)

      //End

  }
};