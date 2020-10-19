const data = require('./data/data.js')

module.exports = function(controller) {
    var years = (new Date().getFullYear()) - data.techYears;

    controller.hears(["Rechart"],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `Recharts is a light weight chart visualization library. ${data.firstName} has used it for ${data.techYears}`,
                quick_replies: data.techs
            })
    })
    var tech = data.techs.map( tech => tech.title)
    
  
    controller.hears(["tech", 'knowledge'],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} has the following technologies in his repertoire`,
                quick_replies: data.techs
            })
    })


    controller.hears(tech,'message,direct_message', async(bot,message)=> {

        let plural = (years > 1 ? "years" : "year")
        
        await bot.reply(message, 
            { 
                text: `${data.firstName} has experience with ${tech[index]} for ${plural}.`,
                quick_replies: data.techs
            })
    })


}