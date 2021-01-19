const fetch = require('node-fetch');

const { Ame_Api } = require("../../config.json");

const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'approved',	
  category: 'image',
	description: 'Sir,you are approved.',
	aliases: [],
	usage: 'approved [user]',

	run: async (client, message, args) => {

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

		const url = 'https://v1.api.amethyste.moe/generate/approved';

		const data = {

			'url': member.user.displayAvatarURL({ format: 'png' }),

		};

		const searchParams = Object.keys(data).map((key) => {

			return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);

		}).join('&');

		let response;

		try {

			response = await fetch(url, { method: 'POST', body: searchParams, headers: {

				'Content-Type': 'application/x-www-form-urlencoded',

				'authorization': `Bearer ${Ame_Api}`,

			} }).then(res => res.buffer());

		}

		catch (e) {

			console.log(e);

			return message.channel.send('❌ | An error occured, please try again!');

		}

		const attachment = new MessageAttachment(response, 'approved.png');

		return message.channel.send(attachment);

	},

};