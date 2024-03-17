"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ping_1 = require("./commands/utility/ping");
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./types/index");
const elaborate_1 = require("./commands/utility/elaborate");
const rich_1 = require("./commands/utility/rich");
//.envファイルを読み込む
dotenv_1.default.config();
const commands = [
    ping_1.ping.data.toJSON(),
    ping_1.secretPing.data.toJSON(),
    ping_1.delayPing.data.toJSON(),
    ping_1.followUpPing.data.toJSON(),
    ping_1.followUpDeferPing.data.toJSON(),
    ping_1.deletePing.data.toJSON(),
    ping_1.getPingMsg.data.toJSON(),
    ping_1.selectPing.data.toJSON(),
    elaborate_1.stringSub.data.toJSON(),
    elaborate_1.stringSubRequired.data.toJSON(),
    elaborate_1.variousOptionsSub.data.toJSON(),
    elaborate_1.choiceStringSub.data.toJSON(),
    elaborate_1.choiceNumberSub.data.toJSON(),
    elaborate_1.choiceIntegerSub.data.toJSON(),
    elaborate_1.subCommandSample.data.toJSON(),
    elaborate_1.selectLang.data.toJSON(),
    elaborate_1.autoCompleteSample.data.toJSON(),
    elaborate_1.autoCompleteSample2.data.toJSON(),
    rich_1.buttonSample.data.toJSON(),
    rich_1.MenuSample.data.toJSON(),
    rich_1.componentInteractionSample.data.toJSON(),
    rich_1.componentInteractionAdvance.data.toJSON(),
    rich_1.ModalSample.data.toJSON(),
    rich_1.contextMenusUser.data.toJSON(),
    rich_1.contentMenusMessage.data.toJSON(),
    rich_1.MarkDownMassage.data.toJSON(),
    rich_1.EmbedSample.data.toJSON(),
    rich_1.embedLocalImgSample.data.toJSON(),
    rich_1.embedReplyAndEdit.data.toJSON(),
    rich_1.reactionExample.data.toJSON(),
    rich_1.reactNonOrderSample.data.toJSON(),
    rich_1.reactAllDelete.data.toJSON(),
    rich_1.reactSpecificDelete.data.toJSON(),
    rich_1.reactSpecificGet.data.toJSON(),
];
console.log(commands);
console.log(commands.length);
const token = (0, index_1.checkIsString)(process.env.TOKEN);
const applicationId = (0, index_1.checkIsString)(process.env.APPLICATIONID);
const guildId = (0, index_1.checkIsString)(process.env.GUILDID);
const rest = new discord_js_1.REST({ version: '10' }).setToken(token);
//Discordサーバーにコマンドを登録
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
