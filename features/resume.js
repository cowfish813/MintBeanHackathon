
const data = require('./data/data.js')

module.exports = function(controller) {



    controller.hears("resume", 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `Here is ${data.firstName}'s resume`,
            files: [
                {
                    url: data.resume,
                    image: false
                }
            ]
        })
    })
}