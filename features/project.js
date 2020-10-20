var data = require('./data/data')

module.exports = function(controller) {

    controller.hears("project", "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: `Here are some projects ${data.firstName} has worked on`,
                quick_replies: data.projects
            });
     
        },1000);
    });

    controller.hears(data.EricHood.keywords, "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: `${data.EricHood.desc}`,
            });
            await bot.reply(message, {type: "typing"});
        },1000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message,`Live site is located at ${data.EricHood.url}`)
            await bot.reply(message, {type: "typing"});

        },2000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message,{
                text: "Technologies he used for this project are listed below",
                quick_replies: data.EricHood.tech
            })
        },3000);
    });

    controller.hears(data.TypingFantasy.keywords, "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: `${data.TypingFantasy.desc}`,
            });
            await bot.reply(message, {type: "typing"});
        },1000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message,`Live site is located at ${data.TypingFantasy.url}`)
            await bot.reply(message, {type: "typing"});

        },2000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message,{
                text: "Technologies he used for this project are listed below",
                quick_replies: data.TypingFantasy.tech
            })
        },3000);
    });

}