require('dotenv').config();
const Discord = require('discord.js');
const Intents = Discord.Intents;

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
});

client.on('ready', () => {
    console.log(`${client.user.tag} is sussy and ready to intrude!`)
});

client.login(process.env.TOKEN);