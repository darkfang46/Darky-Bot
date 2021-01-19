const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
    name: "ping",
    aliases: null,
    category: "utility",
    description: "Pong!",
    usage: "Ping",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        message.channel.send(`Pong - ${Math.floor(client.ws.ping)}ms`)

        //End

    }
};
