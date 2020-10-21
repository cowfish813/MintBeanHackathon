/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const data = require('./data/data')
module.exports = function(controller) {


    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message,
            {
                text: `I am unable to understand your message perhaps I can assist you with some topics of interest`,
                quick_replies: data.topics
            }    
        );
    });


}