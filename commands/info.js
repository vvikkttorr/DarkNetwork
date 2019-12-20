const discord= require("discord.js");

module.exports.run = async (bot, message, args) => {
    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
     .setDescription("discord bot info")
     .setColor("#04042b")
     .setThumbnail(botIcon)
     .addField("Bot naam", bot.user.username)
     .addField("Gamaakt op", bot.user.createdAt);
   
    return message.channel.send(botEmbed);
    


}
module.exports.help ={
    naam:"info"
}