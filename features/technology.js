
const data = require('./data/data.js')

module.exports = function(controller) {
    var years = (new Date().getFullYear()) - data.techYears;
    let plural = (years > 1 ? "years" : "year")
    var tech = data.techs.map( tech => tech.title.toLowerCase())
    let knownTech = new Set(tech)
   
    controller.hears(["Rechart"],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `Recharts is a light weight chart visualization library. ${data.firstName} has used it for ${data.techYears}`,
                quick_replies: data.techs
            })
    })


    
   
    
  
    controller.hears(["tech", 'knowledge'],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} has the following technologies in his repertoire`,
                quick_replies: data.techs
            })
    })


    controller.hears(tech,'message,direct_message', async(bot,message)=> {
        let cur;
        message.text.split(" ").forEach( word => {

            if (knownTech.has(word.toLowerCase())) {
                cur = word;
                cur = cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase();
            } 
        })
        await bot.reply(message, 
            { 
                text: `${data.firstName} has experience with ${cur} for ${plural}.`,
                quick_replies: data.techs
            }
        )
    })


}