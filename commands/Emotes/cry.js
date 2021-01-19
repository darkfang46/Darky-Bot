const discord = require("discord.js");

const { Random } = require("something-random-on-discord");

const random = new Random();

module.exports = {
  name: "cry",
  aliases:null,
  category: "emotes",
  description: "Sends a random crying image T_T",

  run: async (client, message, args) => {

    

    let data = await random.getAnimeImgURL("cry");

    

    let embed = new discord.MessageEmbed()

    .setImage(data)

    .setFooter(message.author.username)

    .setColor("#dda0dd")

    .setDescription(`${message.author.username} is crying!`)

    .setTitle("〒﹏〒")

    .setTimestamp()

    

    message.channel.send(embed);

  }

};