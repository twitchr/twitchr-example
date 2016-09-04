# twitchr-example
[![npm](https://img.shields.io/npm/v/twitchr-example.svg)](https://www.npmjs.com/package/twitchr-example)
[![dependencies](https://img.shields.io/david/twitchr/twitchr-example.svg)](https://david-dm.org/twitchr/twitchr-example#info=dependencies&view=table)
[![devDependencies](https://img.shields.io/david/dev/twitchr/twitchr-example.svg)](https://david-dm.org/twitchr/twitchr-example#info=devDependencies&view=table)
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

    irc.send(`hello, ${args.user}!`);

    if (args.user !== name) {
        irc.timeout(args.user, 5);
        debugPlugin(`${args.user} was timed out`);
    }
}
```

If a message event is triggered, this plugin responds with a short greeting and performs a timeout lasting 5 seconds if the message sender was not the bot itself.
The plugin depends on [`debug`](https://www.npmjs.com/package/debug) which is used to log debug statements whenever a timeout happens.
Additional helper methods which are currently supported are listed in the [plugin API](https://github.com/twitchr/twitchr-plugin-api/blob/master/index.d.ts).
For any yet unsupported chat command you can use the `send()` method.

The full list of all possible commands to be executed can be found [here](https://help.twitch.tv/customer/portal/articles/659095-chat-moderation-commands).

## License

This project is licensed under the terms of the [MIT license](https://github.com/twitchr/twitchr-example/blob/master/LICENSE).
