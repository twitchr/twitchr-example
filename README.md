# twitchr-example
[![dependencies](https://img.shields.io/david/twitchr/twitchr-example.svg)](https://david-dm.org/twitchr/twitchr-example#info=dependencies&view=table)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is a simple example plugin describing how to use [twitchr-plugin-api](https://github.com/twitchr/twitchr-plugin-api) while writing plugins for [twitchr](https://github.com/twitchr/twitchr).

## Explanation

This plugin is based on the recommended plugin structure.
Its `PluginEventListener` defines a hook function for the `MESSAGE` event:

```ts
let hooks: pluginApi.PluginEventListener = {
    onMessage: onMessage,
};
```

This hook function is implemented as follows:

```ts
function onMessage(nick: string, to: string, text: string): string {
    let d: Date = new Date();
    return `${nick} (${d.toLocaleTimeString()}): ${text}`;
}
```

If a message event is triggered, this plugin simply replies with another message containing the sender's nick name including a timestamp and his message.
It is also possible to reply with moderation commands for example `/ban`:

```ts
function onMessage(nick: string, to: string, text: string): string {
    return `/ban ${nick}`;
}
```

This hook function bans any user writing a message to the IRC chat.
The full list of all possible commands to be executed can be found [here](https://help.twitch.tv/customer/portal/articles/659095-chat-moderation-commands).

## License

This project is licensed under the terms of the [MIT license](https://github.com/twitchr/twitchr-example/blob/master/LICENSE).
