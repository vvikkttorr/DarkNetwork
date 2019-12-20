
const discord= require("discord.js");

module.exports.run = async (bot, message, args) => {

var icon = message.guild.iconURL;
        
        var botEmbed = new discord.RichEmbed()
         .setDescription("server info")
         .setColor("#04042b")
         .setThumbnail(icon)
         .addField("Gejoind op", message.member.joinedAt)
         .addField("Totaal aantal leden", message.guild.memberCount);
       
        return message.channel.send(botEmbed);   
               
        
}
module.exports.help ={
    naam:"serverinfo"
}

