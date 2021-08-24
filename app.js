require('dotenv').config(); // imports
const Discord = require('discord.js');
const express = require('express');
const app = express();
const port = process.env.PORT
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
    var keywords = /\bsus(|sy|picious)\b|\bamo(|n)g(| )us\b|\bimpost(o|e)r\b|\bbaka\b/i; //regex mess
    let final = -1;
    let match = msg.content.toLowerCase().match(keywords); //makes messsage content lower case and then checks against regex
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

client.on('guildCreate', (guild) => { // ping me when invited
    console.log('joined'); // just log the thing lmao
    let homeServer = client.guilds.cache.get('757321307737030686'); // sets the homeServer (where its gonna ping) to my throne world

    let channel = homeServer.channels.cache.find(channel => channel.name === 'sussy-updates'); // finds the channel named sussy updates
    let mention = '<@278663539999113217>' // my mention tag

    channel.send(`${mention}, I have invaded **${guild.name}**`) // sends the message in the channel
        .then(message => console.log(`Invaded ${guild.name}`)); // sends a message in the console as well
});

client.on('guildDelete', (guild) => { // same as before but for when kicked
    console.log('kicked');
    let homeServer = client.guilds.cache.get('757321307737030686');

    let channel = homeServer.channels.cache.find(channel => channel.name === 'sussy-updates');
    let mention = '<@278663539999113217>'

    channel.send(`${mention}, I got kicked from **${guild.name}** :(`)
        .then(message => console.log(`Kicked from ${guild.name}`));
});

app.get('/', (req, res) => {
    res.send("2 sussy 2 baka");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

client.login(process.env.TOKEN); // login to begin a bit of trolling

