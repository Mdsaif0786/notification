This package will be usefull for sending Notification on Telegram.


You can use this package in your application to be alert when some error occured in your application.

Use this package in common error handler like catch block.


How to use this package.

step 1. install package using command " npm i telegram_notification"
step 2. import telegtram_notification package where you want to use.
step 3. destructure "sendTelegramNotification" function from telegram_notification 
step 4. call "sendTelegramNotification" function with below parameters.


Function parameters

first parameter = Telegram_token     
second parameter = chat_id
3rd parameter = message or error               // That you want to send on telegram channel


How to get Telegram_token

step 1. go to telegram app
step 2. search Botfather
step 3. click on Botfather
step 4. Enter the input which Bot has required.
step 5. You will get a Token



How to integrate Bot to telegram channel.

step 1. create a channel.
step 2. add Bot to your channel.
step 3. Give admin permission to your Bot.
step 4. Now your Bot is ready to send message to your channel.



How to get chat_id

step 1. send first message in your channel anything
step 2. open channel in Browser
step 3. In URL parameters you will get some numeric character like 788814023
step 4. chat_id = 788814023


INSTALL

npm i telegram_notification



import { sendTelegramNotification } from "telegram_notification"

let TELEGRAM_TOKEN = '6707116627:AAfggCLNPFROg-J99VZKObFggKcmf0p7GEOI'    // use your token
let CHAT_ID = '770004083'     // Use your chai_id                                        

sendTelegramNotification(TELEGRAM_TOKEN, CHAT_ID, 'helo')
.then((res) => console.log(res))
.catch((err) => console.log(err))