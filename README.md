
# Telegram Notification Sender

# Description:

Telegram Notification Sender is a lightweight Node.js module designed to easily send notifications to a Telegram channel or group using the Telegram Bot API. Simply set up your environment variables with your bot token and channel ID, and start sending messages programmatically. Perfect for automated notifications, alerts, or updates from your applications.

This package provides a simple API to interact with the Telegram Bot API, handles error logging, and returns useful status codes to ensure your messages are delivered successfully.

## Features

- Sends notifications to a specified Telegram channel or group.
- Utilizes the Telegram Bot API for message delivery.
- Handles basic error logging and response handling.

## Installation

You can install this package via npm:

```bash
npm install telegram-notification
```

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

```bash
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
CHANNEL_ID=your_channel_or_group_id
```

- `TELEGRAM_BOT_TOKEN`: The token for your Telegram bot, provided by BotFather.
- `CHANNEL_ID`: The ID of the Telegram channel or group where you want to send the message.

## Usage

Here is a basic example of how to use the package:

### Common Js Module

```javascript
const { sendTelegramNotification } = require('telegram-notification');

const message = "Hello, this is a test notification!";

sendTelegramNotification(message)
  .then(response => {
    console.log(response);  // { statusCode: 200, message: 'Message has been sent successfully' }
  })
  .catch(error => {
    console.error(error);   // Handle any error here
  });
```

### Es6 Module


```javascript
import { sendTelegramNotification } from ('telegram-notification');

const message = "Hello, this is a test notification!";

sendTelegramNotification(message)
  .then(response => {
    console.log(response);  // { statusCode: 200, message: 'Message has been sent successfully' }
  })
  .catch(error => {
    console.error(error);   // Handle any error here
  });
```

## Functions

### `sendTelegramNotification(message)`

Sends a notification message to the configured Telegram channel.

- `message`: The message text to send (default message is used if none is provided).

#### Response:

- On success: `{ statusCode: 200, message: 'Message has been sent successfully' }`
- On failure: `{ statusCode: <error code>, message: <error message> }`

## Error Handling

If the Telegram Bot Token or Channel ID is missing from the environment variables, the function will throw an error during initialization.

### Example Error:

```bash
Error: TELEGRAM_BOT_TOKEN is missing in .env
```

## License

MIT License.
