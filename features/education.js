const data = require('./data/data.js')

module.exports = function(controller) {
    let school = data.schools.map( el => el.title).join(" and ")
    controller.hears(["education",'school'],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, 
            { 
                text: `${data.firstName} went to the following schools, ${school}`,
                quick_replies: data.schools
            })
    })

    controller.hears("appacademy",'message,direct_message', async(bot,message)=> {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, `Information about ${data.AppAcademy.name}`);
            await bot.reply(message, {type: "typing"});
        },1000)        
        setTimeout( async () => {
            await bot.changeContext(message.reference);            
            await bot.reply(message, 
            { 
                text: `${data.AppAcademy.desc}`,
                quick_replies: data.schools
            })
        },2000)        

    })


    controller.hears(["SFSU", "San Francisco"],'message,direct_message', async(bot,message)=> {
        await bot.reply(message, {type: "typing"});
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, `Information about ${data.SFSU.name}`);
            await bot.reply(message, {type: "typing"});
        },1000)        
        setTimeout( async () => {
            await bot.changeContext(message.reference);            
            await bot.reply(message, 
            { 
                text: `${data.SFSU.desc}`,
                quick_replies: data.schools
            })
        },2000)   
    })

}