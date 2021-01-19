const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "wikipedia",
    description: "Shows information about query from wikipedia",
    aliases: ["wiki"],
    usage: "<query>",
    category:"miscellaneous",
    accessableby: "everyone",
  run: async (client, message, args) => {

    const body = await fetch(

      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(

        args.join(" ")

      )}`

    ).then(res => res.json().catch(() => {}));

    if (!body)

      return message.channel.sendmessage.channel.send({

        embed: {

          color: "#dda0dd",

          title: "❌ Error Page Not Found."

        }

      });

    if (body.title && body.title === "Not found.")

      return message.channel.send({

        embed: {

          color: "#dda0dd",

          title: "❌ Error Page Not Found."

        }

      });

    const embed = new Discord.MessageEmbed()

      .setTitle(`🌐 ${body.title} `)
      .addField(

        "More Info: ",
        `**[Click Here!](${body.content_urls.desktop.page})**`,
        true
      )
      .setDescription(`** ${body.extract}**`)
      .setColor("#dda0dd")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);
    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
    message.channel.send(embed);

  }

};