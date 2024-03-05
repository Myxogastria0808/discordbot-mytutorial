"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_1 = require("./commands/index");
const dotenv_1 = __importDefault(require("dotenv"));
const index_2 = require("./types/index");
//.envファイルを読み込む
dotenv_1.default.config();
//登録コマンドを呼び出してリスト形式で登録
const commands = [index_1.sayhello.data.toJSON()];
const token = (0, index_2.checkIsString)(process.env.TOKEN);
const applicationId = (0, index_2.checkIsString)(process.env.APPLICATIONID);
const guidId = (0, index_2.checkIsString)(process.env.GUIDID);
const rest = new discord_js_1.REST({ version: '10' }).setToken(token);
//Discordサーヴァーにコマンドを登録
const register = (async () => {
    try {
        const registeredCommands = await rest.put(discord_js_1.Routes.applicationGuildCommands(applicationId, guidId), {
            body: commands,
        });
        console.log(registeredCommands);
    }
    catch (error) {
        console.error(`コマンドの登録中にエラーが発生しました。\nエラー内容: ${error}`);
    }
})();
