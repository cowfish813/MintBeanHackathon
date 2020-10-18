module.exports = function(controller) {
    //  /i at end of RegEx ignores case sensitivity

    
    controller.hears(new RegExp(/Nicholas.*education|education.*Nicholas/i),'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Nicholas has a degree in accounting and completed AppAcademy in April 2020")
    })


    controller.hears(new RegExp(/Nicholas.*contact|contact.*Nicholas/i),'message,direct_message',  async(bot, message) => {
        await bot.reply(message, "Nicholas's Contact Information <br> E-Mail: <Nicholas.h924@gmail.com> <br> LinkedIn: <https://www.linkedin.com/in/Nicholas-ho-9377b21a4/> <br> GitHub: <https://github.com/Trombed> <br> Portfolio: <https://www.ericho.net> <br> Phone: (415) 734 6108")

    })



    controller.hears("resume", 'message,direct_message',  async(bot, message) => {
        await bot.reply(message, {
            text: "Nicholas's resume",
            files: [
                {
                    url: './eric_ho_resume.pdf',
                    image: false
                }
            ]
        })
    })




    controller.hears('Nicholas','message,direct_message', async(bot, message) => {

        await bot.reply(message, 
            {
                text: 'Here are information about Nicholas',
                quick_replies: [
                    {
                        title: "Education",
                        payload: "Nicholas's education"
                    },
                    {
                        title: "Contact",
                        payload: "Nicholas's contact information"
                    }
                ]
            }
            
        );
    });

    
}