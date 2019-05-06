const { WebClient } = require('@slack/web-api');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
//const token = process.env.SLACK_TOKEN;

const web = new WebClient('xoxp-318392221105-318942821602-626453242320-bacc497c229b8041d987510a6b7c0048');

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C9E03H9L7';

/* (async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({ 
      channel: conversationId, 
      text: 'Hello there' 
    });

  // `res` contains information about the posted message
  console.log('Message sent: ', res.ts);
})(); */