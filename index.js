const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const mongoose = require("mongoose");
const { Prefix, Mongo, Token, Owner_ID, Color } = require("./config.json");
if (Prefix === null) Prefix = `d.`;
const client = new Discord.Client({
  disableMentions: 'everyone'
});
const bot = new Discord.Client({ disableMentions: 'everyone' });
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.descriptions = new Discord.Collection();

client.on("ready", async () => {
    console.log(`Bot Is Ready To Go & Online!`);
    client.user.setActivity(`Servers : ${client.guilds.cache.size} | Users : ${client.users.cache.size}`);
});
client.on("presenceUpdate", async (message, newPresence) => {
    // If your bot is in multiple guilds then you just need to check for a particular one (good for free hosting or low power hosting)
    if (newPresence.member.guild.id !== "779209321585704991") {
        return;
    }
    // Check that the member is offline or a bot
    if (newPresence.user.bot || newPresence.member.presence.status === "offline") {
        return;
    }
    // If the user don't have any activity
    if (!newPresence.member.presence.activities[0]) {
        // then check for the supporter role, if they have it
        if (newPresence.member.roles.cache.has("800229231187591178")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#DDA0DD")
                .setDescription(`Successfully removed <@&${"800229231187591178"}> role from ${newPresence.member}!`)
            // then remove it and send a log of removing the role to the logging channel.
            return newPresence.member.roles.remove("800229231187591178").then(
                client.channels.cache.get("800230262864609302").send(embed)
            );
        } else {
            // and return if the person have an activity
            return;
        }
    }
    // check whether a user have a custom status or not
    if (newPresence.member.presence.activities[0].type !== "BTS FOREVER") {
        return;
    }
    // if it's a custom status then check is it your status?
    if (newPresence.member.presence.activities[0].state === "BTS FOREVER") {
        const embed = new Discord.MessageEmbed()
            .setColor("#DDA0DD")
            .setDescription(`Successfully given <@&${"800229231187591178"}> role to ${newPresence.member}!`)
        // if yes then give them a role and send a log to the logging channel
        return await newPresence.member.roles.add("800229231187591178").then(
            client.channels.cache.get("800230262864609302").send(embed)
        );
    }
    // I know i could have used else{} but it's fun to do it this way.
    // if it's not your custom status
    if (newPresence.member.presence.activities[0].state !== "BTS FOREVER") {
        // then check that user have a supporter id otherwise it will stuck on the same person
        if (newPresence.member.roles.cache.has("800229231187591178")) {
            const embed = new Discord.MessageEmbed()
                .setColor("#DDA0DD")
                .setDescription(`Successfully removed <@&${"800229231187591178"}> role from ${newPresence.member}!`)
            // if yes then remove the role cause they just don't wanna be a supporter anymore and also log that event
            return newPresence.member.roles.remove("800229231187591178").then(
                client.channels.cache.get("800230262864609302").send(embed)
            );
        } else {
            // or you can return here
            return;
        }
    }
});

client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

mongoose.connect(Mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
  }).then(console.log('Connected to MongoDB!'))



client.on("message", async message => {
    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        let embed = new Discord.MessageEmbed()
            .setColor(Color)
            .setDescription(`My Prefix Is ${Prefix} For More Information Use ${Prefix}help`)
            .setTimestamp();
        return message.channel.send(embed);
    }
})

let modules = ["Emotes", "Fun", "Games", "Image", "Miscellaneous", "Moderation","Search", "Utility"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err) console.log(err);
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} - Status - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.description) {
        client.descriptions.set(command.description, command.description);
      }
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      };
    });
  });
});

client.on('message', message => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(Prefix)) return;

    try {

    let messageArray = message.content.split(` `);
    let args = messageArray.slice(1);
    let cmd = messageArray[0].toLowerCase();
  
    let command =
      client.commands.get(cmd.slice(Prefix.length)) ||
      client.commands.get(client.aliases.get(cmd.slice(Prefix.length)));

    if (command) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(`I Don't Have Permission To Use This Or Any Command! | Require : Administrator / Admin`)
        command.run(client, message, args);
    }} catch (error) {
        console.log(error);
        message.channel.send(`Error In Command Try Again Later!\nThank You!`);
    }
});

//Login
client.login(Token);
