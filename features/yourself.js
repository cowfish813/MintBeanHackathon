const data = require('./data/data.js')

module.exports = function(controller) {



    controller.hears(commands, 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `${data.yourself}`,
            quick_replies: data.topics
        })
    })
}

var commands = [
    "tell me about yourself",
    "introduction",
    "creator",
    "eric",
    "ho"
]