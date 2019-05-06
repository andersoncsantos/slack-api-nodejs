//API docs
//https://github.com/slackapi/node-slack-sdk
//https://slack.dev/node-slack-sdk/getting-started
const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');

// Create a new instance of the WebClient class with the token read from your environment variable
//const web = new WebClient(process.env.SLACK_TOKEN);

//testando os métodos
//https://api.slack.com/methods/channels.history/test
//https://api.slack.com/methods/reactions.add/test

const web = new WebClient('xoxp-318392221105-318942821602-626453242320-bacc497c229b8041d987510a6b7c0048');
//xoxp-318392221105-318942821602-626453242320-bacc497c229b8041d987510a6b7c0048

// The current date
const currentTime = new Date().toTimeString();

/* (async () => {
  // Use the `auth.test` method to find information about the installing user
  const res = await web.auth.test()

  // Find your user id to know where to send messages to
  const userId = res.user_id

  // Use the `chat.postMessage` method to send a message from this app
  await web.chat.postMessage({
    channel: 'C9E03H9L7',
    text: `The current time is ${currentTime}`
  });

  console.log(userId);
  console.log('Message posted!');
})(); */

/* (async () => {
  // Use the `auth.test` method to find information about the installing user
  const res = await web.auth.test()

  // Find your user id to know where to send messages to
  const userId = res.user_id

  // Use the `chat.postMessage` method to send a message from this app
  await web.reactions.add({
    channel: 'C9E03H9L7',
    name: 'thumbsup',
    timestamp: '1557011075.000100'
  });

  console.log(userId);
  console.log('You reacted a message!');
})(); */

(async () => {
  // Use the `auth.test` method to find information about the installing user
  const res = await web.auth.test()

  // Find your user id to know where to send messages to
  const userId = res.user_id

  // Use the `chat.postMessage` method to send a message from this app
  await web.chat.delete({
    channel: 'C9E03H9L7',
    ts: '1556976146.000500',
    as_user: 'U9CTQQ5HQ'
  });

  console.log(userId);
  console.log('You deleted a message!');
})();

