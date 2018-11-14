const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require(`enmap`);
const farm = new Enmap();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
client.on('message', msg => {
    let ownerid = '510806759565295619';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "510806759565295619") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "510151528254930966") return;
            if(msg.isMentioned(client.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }
});

client.login("token");
