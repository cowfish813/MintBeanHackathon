module.exports = function(controller) {
    //  /i at end of RegEx ignores case sensitivity


    controller.hears(new RegExp(/eric.*education|education.*eric/i),'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Eric has a degree in accounting and completed AppAcademy in April 2020")
    })


    controller.hears(new RegExp(/eric.*contact|contact.*eric/i),'message,direct_message',  async(bot, message) => {
        await bot.reply(message, `Eric's Contact Information <br> E-Mail: ${email} <br> LinkedIn: ${linkedin} <br> GitHub: ${github} <br> Portfolio: ${portfolio} <br> Phone: ${phone}`)

    })


    controller.hears(new RegExp(/eric.*email|email.*eric/i),'message,direct_message',  async(bot, message) => {
        await bot.reply(message, 
            {
                text: `Eric's email: ${email}`,
                quick_replies: ericReplies
            })
    })

    controller.hears(new RegExp(/eric.*linkedin|linkedin.*eric/i),'message,direct_message',  async(bot, message) => {
        await bot.reply(message, 
            {
                text: `Eric's LinkedIn: ${linkedin}`,
                quick_replies: ericReplies
            })
    })


    



 




    controller.hears('eric','message,direct_message', async(bot, message) => {
        await bot.reply(message, 
            {
                text: 'Here are information about Eric',
                quick_replies: ericReplies
            }
            
        );
    });

    
}

var ericReplies = [
    {
        title: "Education",
        payload: "Eric's education"
    },
    {
        title: "Contact",
        payload: "Eric's contact information"
    },
    {   
        title: "Email",
        payload: "Eric's email address"
    }, 
    {
        title: "LinkedIn",
        payload: "Eric's LinkedIn"
    }
];

var email = "<eric.h924@gmail.com>";
var phone = "(415) 734-6108";
var github = "<https://github.com/Trombed>";
var linkedin = "<https://www.linkedin.com/in/eric-ho-9377b21a4/>"
var portfolio = "<https://www.ericho.net>"