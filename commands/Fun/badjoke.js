const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "badjoke",
    category:"fun",
    aliases: ["Badjoke", "BadJoke", "BADJOKE", " badjoke", " Badjoke", " BadJoke", " BADJOKE"],
    usage:"badjoke",
    description: "Sends You A Bad Joke",

    run: async (client, message, args) => {

        let data = await random.getJoke()

        message.channel.send(data)

    }

}