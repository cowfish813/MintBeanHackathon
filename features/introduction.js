
const data = require('./data/data.js')

module.exports = function(controller) {

    controller.on('hello', async(bot, message) => {
        console.log("WELCOME")
        await intro(bot, message)
    }) //async takes a second before it types out response

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
            await bot.reply(message, `I was created by my creator ${data.firstName} ${data.lastName} to introduce him to you.`);
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