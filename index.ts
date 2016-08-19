import * as api from 'twitchr-plugin-api';

function onMessage(irc: api.IrcContext<api.IrcMessage>): void {
    const args: api.IrcMessage = <api.IrcMessage>irc.getArgs();
    const name: string = irc.getName();

    if (args.user !== name) {
        irc.timeout(args.user, 5);
        irc.send('gg ez');
    }
}

const hooks: api.PluginEventListener = {
    onMessage: onMessage,
};

const plugin: api.Plugin = {
    hooks: hooks,
};

export = plugin;
