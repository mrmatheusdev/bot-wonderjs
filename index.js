const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais e ${client.guilds.size} servidores.`); 
});

client.login(config.token);