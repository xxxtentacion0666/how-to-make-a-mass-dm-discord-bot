const Discord = require("discord.js") // made by cracked.to/1337
const client = new Discord.Client() // made by cracked.to/1337
const config = require('./config.json') // made by cracked.to/1337
const prefix = config.prefix // made by cracked.to/1337
 // made by cracked.to/1337
 // made by cracked.to/1337
client.on("ready", () => { // made by cracked.to/1337
    console.log("bot is up and running") // made by cracked.to/1337
 // made by cracked.to/1337
}) // made by cracked.to/1337
 // made by cracked.to/1337
client.on("message", async message => { // made by cracked.to/1337
    if (message.author.bot)  return; // made by cracked.to/1337
    if(message.content.indexOf(config.prefix) !== 0) return; // made by cracked.to/1337
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // made by cracked.to/1337
    const command = args.shift().toLowerCase(); // made by cracked.to/1337
 // made by cracked.to/1337
    if(command === "dmall") { // made by cracked.to/1337
         // made by cracked.to/1337
 // made by cracked.to/1337
        if(message.author.id !== "498487070378033177") // made by cracked.to/1337
        return message.channel.send("**You can't use this!**") // made by cracked.to/1337
 // made by cracked.to/1337
        let text = message.content.slice(`${prefix}dmall`.length); // made by cracked.to/1337
        message.guild.members.forEach(member => { // made by cracked.to/1337
            if(member.id != client.user.id && !member.user.bot) member.send(text)  // made by cracked.to/1337
        }) // made by cracked.to/1337
    } // made by cracked.to/1337
}) // made by cracked.to/1337
 // made by cracked.to/1337
client.login(config.token)
