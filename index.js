require("dotenv").config(); //to start process from .env file
const {Client, GatewayIntentBits}=require("discord.js");
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,//adds server functionality
        GatewayIntentBits.GuildMessages,//gets messages from our bot.
        GatewayIntentBits.MessageContent //
    ]
});
client.once("ready", () =>{
    console.log(`BOT IS ONLINE ${client.user.tag}`); //message when bot is online
})

    client.on("messageCreate", (message) => {
        if (message.content.toLowerCase()==='ping') {
            message.reply("Pong!")
           
} })
client.login(process.env.TOKEN);
