import * as api from 'twitchr-plugin-api';
import * as debug from 'debug';

const debugPlugin: debug.IDebugger = debug('twitchr-plugin:example');

function onMessage(irc: api.IrcContext<api.IrcMessage>): void {
    const args: api.IrcMessage = <api.IrcMessage>irc.getArgs();
    const name: string = irc.getName();

    irc.send(`hello, ${args.user}!`);

    if (args.user !== name) {
        irc.timeout(args.user, 5);
        debugPlugin(`${args.user} was timed out`);
    }
}

const hooks: api.PluginEventListener = {
    onMessage: onMessage,
};

const plugin: api.Plugin = {
    hooks: hooks,
};

export = plugin;
