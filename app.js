require('dotenv').config(); // imports
const Discord = require('discord.js');
const express = require('express');
const app = express();
const port = process.env.PORT

// Discord things
const replies = require('./replies.json');
const { Intents } = Discord; 
const homeServer = client.guilds.cache.get('757321307737030686'); // sets the homeServer (where its gonna ping) to my throne world
const updatesChannel = homeServer.channels.cache.find(channel => channel.name === 'sussy-updates'); // finds the channel named sussy updates
const mention = '<@278663539999113217>' // my mention tag


const client = new Discord.Client({ // declaring intents so i can actually do stuff
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
});

messageCheck = msg => { 
    // uses regex to check for matches and then selects the correct index for each response
    var keywords = /\bsus(|sy|picious)\b|\bamo(|n)g(| )us\b|\bimpost(o|e)r\b|\bbaka\b/i; //regex mess
    let final;
    const match = msg.content.toLowerCase().match(keywords); //makes messsage content lower case and then checks against regex
    if (match) {
        switch(match[0]) { //pain
            case "among us":
            case "amongus":
                final = 0;
                break;
            case "amogus":
                final = 6;
                break;
            case "sus":
                final = 1;
                break;
            case "suspicious":
                final = 2;
                break;
            case "imposter":
            case "impostor":
                final = 3;
                break;
            case "sussy":
            case "baka":
                final = 5;
                break;
        }
    }
    return final;
}

client.on('ready', () => { // simple ready message
    console.log(`${client.user.tag} is sussy and ready to intrude!`)
});

client.on('messageCreate',  message => { 
    if (message.author.bot === false) { //dont reply to yourself dumbass
        if (messageCheck(message)) { //if nothing matches dont fucking do this
            message.reply(replies[value]); //comedy
        }
    }
});


client.on('guildCreate', guild => { // ping me when invited // just log the thing lmao
    await updatesChannel.send(`${mention}, I have invaded **${guild.name}**`) // sends the message in the channel
    console.log(`Invaded ${guild.name}`); // sends a message in the console as well
});

client.on('guildDelete', guild => { // same as before but for when kicked
    await updatesChannel.send(`${mention}, I got kicked from **${guild.name}** :(`)
    console.log(`Kicked from ${guild.name}`);
});

app.get('/', (req, res) => {
    res.send("2 sussy 2 baka");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

client.login(process.env.TOKEN); // login to begin a bit of trolling