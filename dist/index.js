"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const ping_1 = require("./commands/utility/ping");
const elaborate_1 = require("./commands/utility/elaborate");
const rich_1 = require("./commands/utility/rich");
//.envファイルを読み込む
dotenv_1.default.config();
//Botで使うGatewayIntents、partials
const client = new discord_js_1.Client({
    //以下は、ボットがリアクションをする際に必要？
    //GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.GuildMessageReactions],
});
//謎
// //ボットのユーザー名の設定
// client.user?.setUsername('Nyoki');
// //アバター設定
// client.user?.setAvatar('./avator/pexels-asad-photo-maldives-457881.jpg');
// //プレイステータスの設定
// client.user?.setActivity('nyoki nyoki nyoki');
// //ボットの状態
// client.user?.setStatus('online');
//Client objectが準備できた時に一度だけ実行されます。
client.once('ready', () => {
    console.log('Bot starting ...');
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});
//////////////////////////////////////////////////////////
//  スラッシュコマンドを使うには、interactionCreateのインベントリスナーを使う必要がある
client.on(discord_js_1.Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
        //*ChatInputCommand
        //入力されたスラッシュコマンドは、interaction.commandNameに格納される
        if (interaction.commandName === ping_1.ping.data.name) {
            try {
                await ping_1.ping.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.secretPing.data.name) {
            try {
                await ping_1.secretPing.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.delayPing.data.name) {
            try {
                await ping_1.delayPing.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.followUpPing.data.name) {
            try {
                await ping_1.followUpPing.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.followUpDeferPing.data.name) {
            try {
                await ping_1.followUpDeferPing.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.deletePing.data.name) {
            try {
                await ping_1.deletePing.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.getPingMsg.data.name) {
            try {
                await ping_1.getPingMsg.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === ping_1.selectPing.data.name) {
            try {
                await ping_1.selectPing.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.stringSub.data.name) {
            try {
                await elaborate_1.stringSub.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.stringSubRequired.data.name) {
            try {
                await elaborate_1.stringSubRequired.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.variousOptionsSub.data.name) {
            try {
                await elaborate_1.variousOptionsSub.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.choiceStringSub.data.name) {
            try {
                await elaborate_1.choiceStringSub.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.choiceNumberSub.data.name) {
            try {
                await elaborate_1.choiceNumberSub.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.choiceIntegerSub.data.name) {
            try {
                await elaborate_1.choiceIntegerSub.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.subCommandSample.data.name) {
            try {
                await elaborate_1.subCommandSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.selectLang.data.name) {
            try {
                await elaborate_1.selectLang.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.buttonSample.data.name) {
            try {
                await rich_1.buttonSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.MenuSample.data.name) {
            try {
                await rich_1.MenuSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.componentInteractionSample.data.name) {
            try {
                await rich_1.componentInteractionSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.componentInteractionAdvance.data.name) {
            try {
                await rich_1.componentInteractionAdvance.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.autoCompleteSample.data.name) {
            try {
                await elaborate_1.autoCompleteSample.commandFunc(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === elaborate_1.autoCompleteSample2.data.name) {
            try {
                await elaborate_1.autoCompleteSample2.commandFunc(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.ModalSample.data.name) {
            try {
                await rich_1.ModalSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.MarkDownMassage.data.name) {
            try {
                await rich_1.MarkDownMassage.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.EmbedSample.data.name) {
            try {
                await rich_1.EmbedSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.embedLocalImgSample.data.name) {
            try {
                await rich_1.embedLocalImgSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.embedReplyAndEdit.data.name) {
            try {
                await rich_1.embedReplyAndEdit.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactionExample.data.name) {
            try {
                await rich_1.reactionExample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactNonOrderSample.data.name) {
            try {
                await rich_1.reactNonOrderSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactAllDelete.data.name) {
            try {
                await rich_1.reactAllDelete.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactSpecificDelete.data.name) {
            try {
                await rich_1.reactSpecificDelete.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactSpecificGet.data.name) {
            try {
                await rich_1.reactSpecificGet.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactCollectorSample.data.name) {
            try {
                await rich_1.reactCollectorSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else if (interaction.commandName === rich_1.reactCollectorAwaitReactionSample.data.name) {
            try {
                await rich_1.reactCollectorAwaitReactionSample.execute(interaction);
            }
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        }
        else {
            console.error(`No command matching ${interaction.commandName} was found.`);
        }
    }
    else if (interaction.isAutocomplete()) {
        //*Autocomplete
        if (interaction.commandName === elaborate_1.autoCompleteSample.data.name) {
            await elaborate_1.autoCompleteSample.autocompleteFunc(interaction);
        }
        else if (interaction.commandName === elaborate_1.autoCompleteSample2.data.name) {
            await elaborate_1.autoCompleteSample2.autoCompleteFunc(interaction);
        }
        else {
            console.error(`No command matching ${interaction.commandName} was found.`);
        }
    }
    else if (interaction.isMessageContextMenuCommand()) {
        //*MessageContextMenuCommand
        if (interaction.commandName === 'Translate message') {
            await rich_1.contentMenusMessage.execute(interaction);
        }
    }
    else if (interaction.isUserContextMenuCommand()) {
        //*UserContextMenuCommand
        if (interaction.commandName === 'User Information') {
            await rich_1.contextMenusUser.execute(interaction);
        }
    }
    else {
        return;
    }
});
/////////////////////////////////////////////////////////
//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
