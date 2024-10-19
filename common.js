const axios = require('axios')

const { TELEGRAM_BOT_TOKEN, CHANNEL_ID } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is missing in .env');
}
if (!CHANNEL_ID) {
  throw new Error('CHANNEL_ID is missing in .env');
}

const sendTelegramNotification = async (message = 'pass some super message as a parameter in function') => {
  const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const result = await axios.post(apiUrl, {
      chat_id: CHANNEL_ID,
      text: message,
    });

    if (result.status === 200) {
      return { statusCode: 200, message: 'Message has been sent successfully' };
    } else {
      return { statusCode: result.status, message: 'Bad request' };
    }
  } catch (error) {
    console.error('Error while sending Telegram notification:', error.message);

    // Return meaningful error message based on Axios error
    return { statusCode: error?.response?.status || 500, message: error?.message || 'Internal server error' };
  }
};

module.exports = { sendTelegramNotification };
