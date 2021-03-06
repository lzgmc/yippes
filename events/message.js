module.exports = async (client, message) => {
    const prefix = "b.";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
    return;
}
const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('Chill bro, ur on cooldown!')
    } else {
        message.reply('ur free from cooldown my bruhdah')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); 
    }
}
