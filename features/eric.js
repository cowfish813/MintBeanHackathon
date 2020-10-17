module.exports = function(controller) {
    controller.hears("Eric's education",'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Eric has a degree in accounting and completed AppAcademy in April 2020")
    })

    


    controller.hears('eric','message,direct_message', async(bot, message) => {

        await bot.reply(message, 
            {
                text: 'Here are information about Eric',
                quick_replies: [
                    {
                        title: "Education",
                        payload: "Eric's education"
                    }
                ]
            }
            
        );
    });

    
}