module.exports = {
    name: "plays",
    aliases: ["oynat","aç"],
    description: "sdsdsdsdsdsd",
    usage: "play",
    ownerOnly: false,
    run: async (message,args,client) => {

        if(!args[0]) {
            return message.channel.send("Dinleyeceğin şarkının adını yazar mısın?")
        } 

        var muzik = message.content.slice(6)


   if(client.player.isPlaying(message.guild.id) === true) {
//kuyruğa ekleme kısmı

if(!message.guild.members.cache.get(message.author.id).voice.channel) {
    return message.channel.send("Şarkıyı dinlemek için lütfen sesli kanala bağlan..")
}

 client.player.addToQueue(message.guild.id, muzik)

message.channel.send("Başarı ile kuyruğa eklendi: " + muzik)

   } else {
       var song = await client.player.play(message.member.voice.channel, muzik, message.member.user)
       var muzikveri = song.song;

       message.channel.send("Şu an oynatılıyor: " + muzikveri.name)

   }

    }}
