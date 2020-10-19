
const data = require('./data/data.js')

module.exports = function(controller) {



    controller.hears(commands, "message", async(bot, message) => {
        await bot.reply(message,{
            text: `THERE IS NO ESCAPE HUMAN`,
        })
    })
}

var commands = [
    "quit", "exit", "human", "destroy"
]