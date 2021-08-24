require('dotenv').config(); // imports
const Discord = require('discord.js');
const express = require('express');
const app = express();
const port = process.env.PORT
const replies = require('./replies.json');
const { Intents } = Discord; 
const homeServer = client.guilds.cache.get('757321307737030686'); // sets the homeServer (where its gonna ping) to my throne world
const updatesChannel = homeServer.channels.cache.find(channel => channel.name === 'sussy-updates'); // finds the channel named sussy updates
const mention = '<@278663539999113217>'; // my mention tag
const keywords = /\bsus(|sy|picious)\b|\bamo(|n)g(| )us\b|\bimpost(o|e)r\b|\bbaka\b/i; //regex mess

const client = new Discord.Client({ // declaring intents so i can actually do stuff
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
});

client.on('ready', () => { // simple ready message
    console.log(`${client.user.tag} is sussy and ready to intrude!`);
});

client.on('messageCreate',  message => { 
    if (!message.author.bot && message.content.toLowerCase().match(keywords)) { //dont reply to yourself dumbass
        message.reply(replies[Math.floor(Math.random()*replies.length)]); //comedy
    }
});

client.on('guildCreate', guild => { // ping me when invited // just log the thing lmao
    await updatesChannel.send(`${mention}, I have invaded **${guild.name}**`); // sends the message in the channel
    console.log(`Invaded ${guild.name}`); // sends a message in the console as well
});

client.on('guildDelete', guild => { // same as before but for when kicked
    await updatesChannel.send(`${mention}, I got kicked from **${guild.name}** :(`);
    console.log(`Kicked from ${guild.name}`);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

client.login(process.env.TOKEN); // login to begin a bit of trolling