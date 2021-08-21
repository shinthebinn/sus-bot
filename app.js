require('dotenv').config(); // imports
const Discord = require('discord.js');
const replies = require('./replies.json');
const Intents = Discord.Intents; // i dont want to type Discord constantly.

const client = new Discord.Client({ // declaring intents so i can actually do stuff
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
});

messageCheck = function(msg) {
    let keywords = ["among us", "sus", "sussy", "impostor", "imposter",]
    keywords.foreach((element, index) => {
        if (msg.toLowerCase === element) {
            return index+1
        }
    });

    return 0
}

client.on('ready', () => {
    console.log(`${client.user.tag} is sussy and ready to intrude!`)

    let server = client.guilds.cache.get('757321307737030686');

    let channel = server.channels.cache.find(chan => chan.name === "general");

    channel.send('sussy!');
});

client.on('messageCreate', (message) => {
    let value = messageCheck(message)

    message.reply(replies.json[value]);
});

client.login(process.env.TOKEN);