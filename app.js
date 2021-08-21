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

messageCheck = (msg) => {
    var keywords = /\bsus(|sy|picious)\b|\bamong us\b|\bimpost(o|e)r\b/i;
    let final = -1;
    let match = msg.content.toLowerCase().match(keywords);
    if (match) {
        switch(match[0]) {
            case "among us":
                final = 0;
                break;
            case "sus"||"sussy":
                final = 1;
                break;
            case "suspicious":
                final = 2;
                break;
            case "imposter"||"impostor":
                final = 3;
                break;
        }
    }

    return final
}

client.on('ready', () => {
    console.log(`${client.user.tag} is sussy and ready to intrude!`)

    let server = client.guilds.cache.get('757321307737030686');

    let channel = server.channels.cache.find(chan => chan.name === "general");
});

client.on('messageCreate', (message) => {
    if (message.author.bot === false) {
        let value = messageCheck(message)

        if (value >= 0) {

        let reply = replies[value];

        message.reply(reply);

        }
    }
});

client.login(process.env.TOKEN);