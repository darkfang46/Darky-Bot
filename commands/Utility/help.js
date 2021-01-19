const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.json");
if (Prefix === null) Prefix = `d.`;

module.exports = {
  name: "help",
  aliases: null,
  category: "utility",
  description: "Get All Commands Information!",
  usage: "help | <Command Name>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    function ChangeLatter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let cmdgames = client.commands
      .filter(command => command.category === "games")
      .array();
    let cmdmisc = client.commands
      .filter(command => command.category === "miscellaneous")
      .array();
    let cmdemotes = client.commands
      .filter(command => command.category === "emotes")
      .array();
    let cmdimage = client.commands
      .filter(command => command.category === "image")
      .array();
    let cmdsearch = client.commands
      .filter(command => command.category === "search")
      .array();
    let cmdutil = client.commands
      .filter(command => command.category === "utility")
      .array();
    let cmdfun = client.commands
      .filter(command => command.category === "fun")
      .array();
    let cmdmod = client.commands
      .filter(command => command.category === "moderation")
      .array();

    let embedhelp = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} Help Section!`)
      .setDescription(
        `Please Use ${Prefix}help <command name> For More Command Information!`
      )
      .addField(`😂 | ${Prefix}help Fun`, `Get Fun Category Commands!`)
      .addField(
        `⚙️ | ${Prefix}help Moderation (Mod)`,
        `Get Moderation Category Commands!`
      )
      .addField(
        `ℹ️ | ${Prefix}help Utility (Util)`,
        `Get Utility Category Commands!`
      )
      .addField(`🔎 | ${Prefix}help Search`, `Get Search Category Commands!`)
      .addField(`💫 | ${Prefix}help Emotes`, `Get Emotes Category Commands!`)
      .addField(`🎮 | ${Prefix}help Games`, `Get Games Category Commands!`)
      .addField(`🖼️ | ${Prefix}help Image`, `Get Image Category Commands!`)
      .addField(
        `✨ | ${Prefix}help Miscellaneous (Misc)`,
        `Get Miscellaneous Category Commands!`
      )
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let utilembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Utility Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let gamesembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Games Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let miscembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Miscellaneous Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let searchembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Search Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let emotesembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Emotes Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let imageembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Image Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let funembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Fun Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    let modembed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Moderation Section!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    cmdutil.forEach(cmd => {
      utilembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdmisc.forEach(cmd => {
      miscembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdgames.forEach(cmd => {
      gamesembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdemotes.forEach(cmd => {
      emotesembed.addField(
        `{ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdimage.forEach(cmd => {
      imageembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdsearch.forEach(cmd => {
      searchembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdfun.forEach(cmd => {
      funembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    cmdmod.forEach(cmd => {
      modembed.addField(
        `${ChangeLatter(cmd.name)}`,
        `${ChangeLatter(cmd.description)}`
      );
    });

    if (!args[0]) {
      return message.channel.send(embedhelp);
    }

    if (args[0].toLowerCase() === "utility") {
      return message.channel.send(utilembed);
    }
    if (args[0].toLowerCase() === "emotes") {
      return message.channel.send(emotesembed);
    }
    if (args[0].toLowerCase() === "util") {
      return message.channel.send(utilembed);
    }
    if (args[0].toLowerCase() === "miscellaneous") {
      return message.channel.send(miscembed);
    }
    if (args[0].toLowerCase() === "misc") {
      return message.channel.send(miscembed);
    }
    if (args[0].toLowerCase() === "games") {
      return message.channel.send(gamesembed);
    }
    if (args[0].toLowerCase() === "fun") {
      return message.channel.send(funembed);
    }
    if (args[0].toLowerCase() === "moderation") {
      return message.channel.send(modembed);
    }
    if (args[0].toLowerCase() === "search") {
      return message.channel.send(searchembed);
    }
    if (args[0].toLowerCase() === "image") {
      return message.channel.send(imageembed);
    }
    if (args[0].toLowerCase() === "mod") {
      return message.channel.send(modembed);
    }

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    if (!cmd) return message.channel.send(embedhelp);

    if (cmd.aliases === null) cmd.aliases = `No Aliases!`;
    if (cmd.description.length === 0) cmd.description = `No Description!`;
    if (cmd.category === null) cmd.category = `No Category!`;
    if (cmd.name === null) return message.channel.send(`Something Went Wrong!`);

    let cmdhelp = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Command Information!`)
      .addField(`Name`, `${ChangeLatter(cmd.name)}`)
      .addField(`Aliases`, `${cmd.aliases}`)
      .addField(`Usage`, `${cmd.usage}`)
      .addField(`Category`, `${ChangeLatter(cmd.category)}`)
      .addField(`Description`, `${cmd.description}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (cmd) {
      return message.channel.send(cmdhelp);
    } else {
      return message.channel.send(embedhelp);
    }

    //End
  }
};
