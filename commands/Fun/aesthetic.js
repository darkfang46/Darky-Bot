const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "aesthetic",
    aliases:null,
    description: "Make you're text font aesthetic!",
    usage: "aesthetic <text>",
    category: "fun",

run: async (client, message, args) => {

    const aes = args.join("+")

    if(!aes) return message.channel.send("❌ | Provide a message to make it aesthetic!")

let res = await fetch(`https://api.deltaa.tk/aesthetic?text=${aes}`)

let data = await res.json()

return message.channel.send(data.aesthetic)

}

};

