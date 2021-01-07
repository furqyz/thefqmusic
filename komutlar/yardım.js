module.exports = {
    name: "music",
    aliases: ["müzik","muzik"],
    description: "sdsdsdsdsdsd",
    usage: "help",
    ownerOnly: false,
    run: async (message,args,client) => {

        if(!args[0]) {
            return message.channel.send("geç / kapat / kuyruğu-temizle / kuyruk / music")
         
        }
    }}