#  Slack Shmot Bot

- **Author:** [Stef Schulz](mailto:s.schulz@slothsoft.de)
- **Repository:** <https://github.com/slothsoft/slack-shmotbot>


My first attempt at a Slack bot. It uses the [shm-reduplication](https://en.wikipedia.org/wiki/Shm-reduplication) to mock your last word:

![Screenshot](https://raw.githubusercontent.com/slothsoft/slack-shmotbot/master/images/screenshot.png)

You need to talk to him directly or mention him in a group he is in for him to react.

The original ShmotBot (for Discord) is located [here](https://github.com/slothsoft/discord-shmotbot).



## Getting Started

### Run Bot Locally

To run the bot locally, you have to do the following:

1. Clone this repository
1. Follow [easy-peasy-bot](https://github.com/slackapi/easy-peasy-bot#readme) until you have a bot token ready to use and NodeJS installed
1. Install packages via command line `npm install`
1. Copy the file *.env.default* in the base folder to *.env* and fill it with your bot token like this `TOKEN=YourSuperSecretToken`
1. Start bot via command line `node index.js`
1. Open up Slack and see it in action

**Note:** To redeploy it press Control+C and run `node index.js` again.



### Add Bot to Server

It seems possible to deploy bots to Slack, I just haven't tried it yet.



## Bugs

- ShmotBot goes crazy when the last word is his name (similar stuff happens for trailing smileys):
![Screenshot](https://raw.githubusercontent.com/slothsoft/slack-shmotbot/master/images/bug_name_last.png)




## License

This project is licensed under the MIT - see the [license file](https://github.com/slothsoft/slack-shmotbot/blob/master/LICENSE) for details.
