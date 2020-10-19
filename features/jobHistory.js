const data = require('./data/data.js')


module.exports = function(controller) {
    
    controller.hears(["jobs", "message", "job"], "message", async(bot, message) => {
        console.log("test")

        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.firstName} has worked at the following companies.`,
                    quick_replies: data.jobs

                }
            )
        }, 1000)
    })
    controller.hears(data.yapstone.keywords, "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.yapstone.name} `,
                })
            await bot.reply(message, {type: "typing"});
        }, 1000);
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.yapstone.year} `,
                })
            await bot.reply(message, {type: "typing"});
        }, 2000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.yapstone.desc} `,
                    quick_replies: data.jobs
                })
        }, 3000)
    })

    controller.hears(data.trimark.keywords, "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.trimark.name} `,
                })
            await bot.reply(message, {type: "typing"});
        }, 1000);
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.trimark.year} `,
                })
            await bot.reply(message, {type: "typing"});
        }, 2000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.trimark.desc} `,
                    quick_replies: data.jobs
                })
        }, 3000)
    })

    controller.hears(data.portlink.keywords, "message", async(bot, message) => {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.portlink.name} `,
                })
            await bot.reply(message, {type: "typing"});
        }, 1000);
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.portlink.year} `,
                })
            await bot.reply(message, {type: "typing"});
        }, 2000);
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, 
                {
                    text: `${data.portlink.desc} `,
                    quick_replies: data.jobsccccçcx
                })
        }, 3000)
    })
}