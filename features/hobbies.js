
const data = require('./data/data.js')

module.exports = function(controller) {

    controller.hears(commands, "message", async(bot, message) => {
        await bot.reply(message,{
            text: `On his free time ${data.firstName}, ${data.interest}`,
        })
    })

}

var commands = [
    "hobbies", "hobby", "interest", "fun"
]

