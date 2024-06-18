
import axios from "axios";
const { TELEGRAM_TOKEN, CHAT_ID } = process.env




let message = 'helo'

const sendTelegramNotification = async (TELEGRAM_TOKEN, CHAT_ID, message) => {
     const apiUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    message = message ? message : 'helo'
    if (!TELEGRAM_TOKEN) {
        return { statusCode: 400, message: 'Telegram_token is missing' }
    } else if (!CHAT_ID) {
        return { statusCode: 400, message: "Chat_id is missing" }
    }

    try {
        let result = await axios.post(apiUrl, {
            chat_id: CHAT_ID,
            text: message
        })
        console.log(result.status)
        if (result.status === 200) {
            return { statusCode: 200, message: "Message has been sent successfuly" }
        } else {
            return { statusCode: 400, message: 'Bad request' }
        }
    } catch (error) {
        console.log("🚀 ~ notification ~ er̥ror:", error.message)
        if (error.isAxiosError) {
            return { statusCode: 500, message: error?.message }
        } else {
            return { statusCode: 500, message: error?.message }

        }
    }

}


export { sendTelegramNotification }