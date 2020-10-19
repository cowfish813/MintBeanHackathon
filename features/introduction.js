
const data = require('./data/data.js')

module.exports = function(controller) {

    controller.on('hello', async(bot, message) => {
        console.log("WELCOME")
        await intro(bot, message)
    }) 

    controller.on('welcome_back', async(bot, message) => {
        console.log("WELCOME BACK")
        await intro(bot, message)
    }) 

    const intro = async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Hello I am Chat Bot.');
            await bot.reply(message, {type: "typing"});

        }, 1000)
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, `I am here today to talk about my creator ${data.firstName}.`);
            await bot.reply(message, {type: "typing"});
        }, 2000)
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, `He is open to work right now, and you can ask me any question about him here.`);
            await bot.reply(message, {type: "typing"});
        }, 3000)
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: "What would you like to know about him more?",
                quick_replies: data.topics
            });

        }, 4000)

    }


}