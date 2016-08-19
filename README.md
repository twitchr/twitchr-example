# twitchr-example
[![dependencies](https://img.shields.io/david/twitchr/twitchr-example.svg)](https://david-dm.org/twitchr/twitchr-example#info=dependencies&view=table)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is a simple example plugin describing how to use [twitchr-plugin-api](https://github.com/twitchr/twitchr-plugin-api) while writing plugins for [twitchr](https://github.com/twitchr/twitchr).

## Explanation

This plugin is based on the recommended plugin structure.
Its `PluginEventListener` defines a hook function for the `PRIVMSG` event:

```ts
const hooks: api.PluginEventListener = {
    onMessage: onMessage,
};
```

This hook function is implemented as follows:

```ts
function onMessage(irc: api.IrcContext<api.IrcMessage>): void {
    const args: api.IrcMessage = <api.IrcMessage>irc.getArgs();
    const name: string = irc.getName();

    if (args.user !== name) {
        irc.timeout(args.user, 5);
        irc.send('gg ez');
    }
}
```

If a message event is triggered, this plugin performs a timeout lasting 5 seconds and responds with a short message if the message sender was not the bot itself.
Additional helper methods which are currently supported are `ban()` and `unban()`. For any yet unsupported chat commands use the `send()` method:

```ts
function onMessage(irc: api.IrcContext<api.IrcMessage>): void {
    irc.send('/clear');
}
```

This hook function clears the chat history whenever a message is sent.
The full list of all possible commands to be executed can be found [here](https://help.twitch.tv/customer/portal/articles/659095-chat-moderation-commands).

## License

This project is licensed under the terms of the [MIT license](https://github.com/twitchr/twitchr-example/blob/master/LICENSE).
