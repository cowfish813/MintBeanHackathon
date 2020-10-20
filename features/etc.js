
const data = require('./data/data.js')

module.exports = function(controller) {

    

    controller.hears(commands, "message", async(bot, message) => {
        await bot.reply(message,{
            text: `THERE IS NO ESCAPE HUMAN`,
        })
    })

    controller.hears(greetings, "message", async(bot, message) => {
        
        await bot.reply(message,{
            text: `Hello Human`,
        })
    })

    controller.hears(who, "message", async(bot, message) => {
        await bot.reply(message,{
            text: `I am a Chat Bot built by ${data.firstName} ${data.lastName}`,
        })
    })
}

var commands = [ 
    "quit", "exit", "human", "destroy"
]

var greetings = [ new RegExp(/\bhi\b/),
    "hello", "nihao", "ni hao", "bonjour"
]

var who = [
    "who are you", "what are you"
]