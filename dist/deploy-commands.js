"use strict";
//スラッシュ コマンド定義に変更を加える必要がある場合にのみ、個別に実行する
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ping_1 = require("./commands/utility/ping");
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./types/index");
//.envファイルを読み込む
dotenv_1.default.config();
//登録コマンドを呼び出してリスト形式で登録
const commands = [
    ping_1.ping.data.toJSON(),
    ping_1.secretPing.data.toJSON(),
    ping_1.delayPing.data.toJSON(),
    ping_1.followUpPing.data.toJSON(),
    ping_1.followUpDeferPing.data.toJSON(),
    ping_1.getPingMsg.data.toJSON(),
    ping_1.selectPing.data.toJSON(),
];
console.log(commands);
console.log(commands.length);
const token = (0, index_1.checkIsString)(process.env.TOKEN);
const applicationId = (0, index_1.checkIsString)(process.env.APPLICATIONID);
const guildId = (0, index_1.checkIsString)(process.env.GUILDID);
const rest = new discord_js_1.REST({ version: '10' }).setToken(token);
//Discordサーヴァーにコマンドを登録
const register = (async () => {
    try {
        const registeredCommands = await rest.put(discord_js_1.Routes.applicationGuildCommands(applicationId, guildId), {
            body: commands,
        });
        console.log(registeredCommands);
    }
    catch (error) {
        console.error(error);
    }
})();
