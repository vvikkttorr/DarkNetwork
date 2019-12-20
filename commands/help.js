const discord= require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**TGB bot** \n\n **__Commands__** \n !hallo - Zeg hallo tegen de bot \n !info - Krijg info over de bot";

        message.author.send(text);

        message.channel.send("Al de commands kan je vinden in je dm.")

    } catch (error){
        message.channel.send("Er is iets fout gebeurd");

      
    }
    
}

module.exports.help ={
    naam:"help"
}