/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var data = require('./data/data')

module.exports = function(controller) {


    controller.hears(["help"], "message", async(bot, message) => {
        await bot.reply(message, {
            text: `Need help? For help on topics type "topics"`,
            quick_replies: data.topics
        });
    });


    controller.hears(["topic"], 'message', async(bot, message) => {
        await bot.reply(message,{
            text: "Here are some topics you can choose from to ask me.",
            quick_replies: data.topics
        })
    })
}
