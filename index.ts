import * as pluginApi from 'twitchr-plugin-api';

function onMessage(nick: string, to: string, text: string): string {
    let d: Date = new Date();
    return `${nick} (${d.toLocaleTimeString()}): ${text}`;
}

let hooks: pluginApi.PluginEventListener = {
    onMessage: onMessage,
};

let plugin: pluginApi.Plugin = {
    hooks: hooks,
};

export = plugin;
