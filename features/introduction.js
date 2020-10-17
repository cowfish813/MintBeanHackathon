
module.exports = function(controller) {

    controller.on('hello', async(bot, message) => {
        console.log("WELCOME")
        await intro(bot, message)
    }) 

    controller.on('welcome_back', async(bot, message) => {
        console.log("WELCOME BACK")
        await intro(bot, message)
    }) 


    const intro = (bot, message) => {
        bot.reply(message, 
        {
            text: 'Hi, I am Chat Bot. Who would you like to get to know today.',
            quick_replies: [
                {
                    title: 'Eric',
                    payload: 'eric',
                },
                {
                    title: 'Nicholas',
                    payload: 'nicholas',
                }, 
                {
                    title: 'Try',
                    payload: 'try',
                }

            ]
        });
    }

}