const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = process.env.HOSTURL,
    token = process.env.TOKEN || '896992453:AAFfoac8zGZizOkq-yEN9_7QWVLzsVOQXDc',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
   
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });
