const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "8ball",
  aliases: null,
  category: "fun",
  description: "8ball!",
  usage: "8ball <Question>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    if (!args[0]) return message.channel.send(`Please Give Me Question!`);

    if (!message.content.endsWith("?"))
      return message.channel.send(
        `Please Give A Valid Question & Add ? At The End!`
      );

    let Answers = [
      "lol! its a joke right?",
      "This Is Right",
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes - definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
      "Maybe",
      "That is sure as hell",
      "Fire",
      "Indeed",
      "Try to be usefull",
      "Watch the birds",
      "Gold",
      "Answer is uncertain",
      "You are the master of your life",
      "Maybe no",
      "We can not be never sure",
      "As you wish",
      "Eat less, move more",
      "Better ask yourself",
      "Just do it",
      "Sorry, but this is really stupid question",
      "Try to be usefull",
      "Water",
      "We can not be never sure",
      "You already know the Answer",
      "Very bad idea",
      "Never",
      "Maybe yes",
      "Mabye no",
      "You know what my answer is",
      "lmao yes",
      "lmao no",
      "your question is not a question",
      "100% right",
      "Yes & No",
      "50% Right",
      "50% Wrong",
      "Hell Yeah!",
      "Heaven Is Showing No!"
    ];

    let result = Answers[Math.floor(Math.random() * Answers.length)];

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Answer Is`)
      .setDescription(result)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
