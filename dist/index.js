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
    intents: [discord_js_1.GatewayIntentBits.Guilds],
});
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
        else {
            console.error(`No command matching ${interaction.commandName} was found.`);
        }
    }
    else if (interaction.isAutocomplete()) {
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
    else if (interaction.isModalSubmit()) {
        if (interaction.customId === 'modalSample') {
            //***モーダル送信への応答***/
            // reply()
            // editReply()
            // deferReply()
            // fetchReply()
            // deleteReply()
            // followUp()
            // update()
            // deferUpdate()
            //が使えるはず
            //*モーダルで送信されたデータの抽出
            //const getInputValue = interaction.fields.getTextInputValue("custom id");
            const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
            const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
            const inputSample = interaction.fields.getTextInputValue('inputSample');
            await interaction.reply(`favorite color: ${favoriteColor}`);
            await interaction.followUp(`hobbies: ${hobbies}`);
            await interaction.followUp(`inputSample: ${inputSample}`);
        }
    }
    else {
        return;
    }
});
/////////////////////////////////////////////////////////
//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
