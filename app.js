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

messageCheck = (msg) => { //uses regex to check for matches and then selects the correct index for each response
    var keywords = /\bsus(|sy|picious)\b|\bamong us\b|\bimpost(o|e)r\b/i; //regex mess
    let final = -1;
    let match = msg.content.toLowerCase().match(keywords); //makes messsage content lower case and then checks against regex
    if (match) {
        switch(match[0]) { //pain
            case "among us":
                final = 0;
                break;
            case "sus":
                final = 1;
                break;
            case "sussy":
                final = 1;
                break;
            case "suspicious":
                final = 2;
                break;
            case "imposter":
                final = 3;
                break;
            case "impostor":
                final = 3;
                break;
        }
    }

    return final
}

client.on('ready', () => { // simple ready message
    console.log(`${client.user.tag} is sussy and ready to intrude!`)
});

client.on('messageCreate', (message) => { 
    if (message.author.bot === false) { //dont reply to yourself dumbass
        let value = messageCheck(message) //uses function above

        if (value >= 0) { //if nothing matches dont fucking do this

            let reply = replies[value]; // looks through json for the correct reply

            message.reply(reply); //comedy

        }
    }
});

client.login(process.env.TOKEN); // login to begin a bit of trolling