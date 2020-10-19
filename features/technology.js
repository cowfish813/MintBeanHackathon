const data = require('./data/data.js')

module.exports = function(controller) {
    controller.hears(["tech", 'knowledge'],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} has the following technologies in his repertoire`,
                quick_replies: data.techs
            })
    })

    controller.hears(["ruby"],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} has bee working with Ruby for 1 year.`,
                quick_replies: data.techs
            })
    })


}