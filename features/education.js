const data = require('./data/data.js')

module.exports = function(controller) {
    controller.hears(["education",'school'],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} has the follow schools in his resume`,
                quick_replies: data.schools
            })
    })

    controller.hears("appacademy",'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `Located in San Francisco, ${data.firstName} went to AppAcademy a SWE bootcamp known for its challenging cirriculumn`,
                quick_replies: data.schools
            })
    })


    controller.hears(["SFSU", "San Francisco State"],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} went to San Francisco State University and finished with a major in Accounting, he is still currently a CPA candidate`,
                quick_replies: data.schools
            })
    })

}