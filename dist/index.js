"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//必要なパッケージをインポートする
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
//.envファイルを読み込む
dotenv_1.default.config();
//Botで使うGatewayIntents、partials
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.DirectMessages,
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
    partials: [discord_js_1.Partials.Message, discord_js_1.Partials.Channel],
});
//Botがきちんと起動したか確認
client.once('ready', () => {
    console.log('Ready!');
    if (client.user) {
        console.log(client.user.tag);
    }
});
//!timeと入力すると現在時刻を返信するように
client.on('messageCreate', async (message) => {
    if (message.author.bot)
        return;
    if (message.content === '!time') {
        const date1 = new Date();
        message.channel.send(date1.toLocaleString());
    }
});
//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
