module.exports = function(controller) {

    controller.hears("job", "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Eric has worked at');
        }, 1000)
    })


}