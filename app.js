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

    server = client.guilds.cache.get('757321307737030686');

    channel = server.channels.cache.find(chan => chan.name === "general");

    channel.send('sussy!');
});

client.login(process.env.TOKEN);