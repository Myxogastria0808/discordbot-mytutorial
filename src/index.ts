import { CacheType, Interaction, GatewayIntentBits, Client, Events } from 'discord.js';
import dotenv from 'dotenv';
import {
    ping,
    secretPing,
    delayPing,
    followUpPing,
    followUpDeferPing,
    deletePing,
    getPingMsg,
    selectPing,
} from './commands/utility/ping';
import {
    stringSub,
    stringSubRequired,
    variousOptionsSub,
    choiceStringSub,
    choiceNumberSub,
    choiceIntegerSub,
    subCommandSample,
    selectLang,
    autoCompleteSample,
    autoCompleteSample2,
} from './commands/utility/elaborate';
import {
    buttonSample,
    MenuSample,
    componentInteractionSample,
    componentInteractionAdvance,
    ModalSample,
} from './commands/utility/rich';

//.envファイルを読み込む
dotenv.config();

//Botで使うGatewayIntents、partials
const client = new Client({
    intents: [GatewayIntentBits.Guilds],
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
client.on(Events.InteractionCreate, async (interaction: Interaction<CacheType>) => {
    if (interaction.isChatInputCommand()) {
        //入力されたスラッシュコマンドは、interaction.commandNameに格納される
        if (interaction.commandName === ping.data.name) {
            try {
                await ping.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === secretPing.data.name) {
            try {
                await secretPing.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === delayPing.data.name) {
            try {
                await delayPing.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === followUpPing.data.name) {
            try {
                await followUpPing.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === followUpDeferPing.data.name) {
            try {
                await followUpDeferPing.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === deletePing.data.name) {
            try {
                await deletePing.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === getPingMsg.data.name) {
            try {
                await getPingMsg.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === selectPing.data.name) {
            try {
                await selectPing.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === stringSub.data.name) {
            try {
                await stringSub.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === stringSubRequired.data.name) {
            try {
                await stringSubRequired.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === variousOptionsSub.data.name) {
            try {
                await variousOptionsSub.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === choiceStringSub.data.name) {
            try {
                await choiceStringSub.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === choiceNumberSub.data.name) {
            try {
                await choiceNumberSub.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === choiceIntegerSub.data.name) {
            try {
                await choiceIntegerSub.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === subCommandSample.data.name) {
            try {
                await subCommandSample.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === selectLang.data.name) {
            try {
                await selectLang.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === buttonSample.data.name) {
            try {
                await buttonSample.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === MenuSample.data.name) {
            try {
                await MenuSample.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === componentInteractionSample.data.name) {
            try {
                await componentInteractionSample.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === componentInteractionAdvance.data.name) {
            try {
                await componentInteractionAdvance.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === autoCompleteSample.data.name) {
            try {
                await autoCompleteSample.commandFunc(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === autoCompleteSample2.data.name) {
            try {
                await autoCompleteSample2.commandFunc(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else if (interaction.commandName === ModalSample.data.name) {
            try {
                await ModalSample.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        } else {
            console.error(`No command matching ${interaction.commandName} was found.`);
        }
    } else if (interaction.isAutocomplete()) {
        if (interaction.commandName === autoCompleteSample.data.name) {
            await autoCompleteSample.autocompleteFunc(interaction);
        } else if (interaction.commandName === autoCompleteSample2.data.name) {
            await autoCompleteSample2.autoCompleteFunc(interaction);
        } else {
            console.error(`No command matching ${interaction.commandName} was found.`);
        }
    } else if (interaction.isModalSubmit()) {
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
    } else {
        return;
    }
});
/////////////////////////////////////////////////////////

//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
