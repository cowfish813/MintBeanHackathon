const data = require('./data/data.js')

module.exports = function(controller) {



    controller.hears(["email", 'mail'], 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `${data.firstName}'s email: <br> ${data.email}`,
            quick_replies: data.contacts
        })
    })


    controller.hears(["phone"], 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `${data.firstName}'s phone: <br> ${data.phone}`,
            quick_replies: data.contacts
        })
    })

    controller.hears(["linkedin", "social"], 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `${data.firstName}'s linkedin: <br> ${data.linkedin}`,
            quick_replies: data.contacts
        })
    })

    controller.hears(["github","git"], 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `${data.firstName}'s github: <br> ${data.github}`,
            quick_replies: data.contacts
        })
    })

    controller.hears(["personal site","portfolio"], 'message', async(bot, message) => {
        await bot.reply(message,{
            text: `${data.firstName}'s portfolio: <br> ${data.portfolio}`,
            quick_replies: data.contacts
        })
    })


    controller.hears(new RegExp(/contact/i),'message,direct_message',  async(bot, message) => {
        await bot.reply(message, `${data.firstName}'s Contact Information <br> E-Mail: ${data.email} <br> LinkedIn: ${data.linkedin} <br> GitHub: ${data.github} <br> Portfolio: ${data.portfolio} <br> Phone: ${data.phone}`)

    })
}