import { REST, RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord.js';
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
import dotenv from 'dotenv';
import { checkIsString } from './types/index';
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
} from './commands/utility/subcommand';
import {
    buttonSample,
    MenuSample,
    componentInteractionSample,
    componentInteractionAdvance,
} from './commands/utility/rich';

//.envファイルを読み込む
dotenv.config();

//登録コマンドを呼び出してリスト形式で登録
const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [
    ping.data.toJSON(),
    secretPing.data.toJSON(),
    delayPing.data.toJSON(),
    followUpPing.data.toJSON(),
    followUpDeferPing.data.toJSON(),
    deletePing.data.toJSON(),
    getPingMsg.data.toJSON(),
    selectPing.data.toJSON(),
    stringSub.data.toJSON(),
    stringSubRequired.data.toJSON(),
    variousOptionsSub.data.toJSON(),
    choiceStringSub.data.toJSON(),
    choiceNumberSub.data.toJSON(),
    choiceIntegerSub.data.toJSON(),
    subCommandSample.data.toJSON(),
    selectLang.data.toJSON(),
    autoCompleteSample.data.toJSON(),
    autoCompleteSample2.data.toJSON(),
    buttonSample.data.toJSON(),
    MenuSample.data.toJSON(),
    componentInteractionSample.data.toJSON(),
    componentInteractionAdvance.data.toJSON(),
];

console.log(commands);
console.log(commands.length);

const token: string = checkIsString(process.env.TOKEN);
const applicationId: string = checkIsString(process.env.APPLICATIONID);
const guildId: string = checkIsString(process.env.GUILDID);

const rest = new REST({ version: '10' }).setToken(token);

//Discordサーバーにコマンドを登録
const register = (async () => {
    try {
        const registeredCommands = await rest.put(Routes.applicationGuildCommands(applicationId, guildId), {
            body: commands,
        });
        console.log(registeredCommands);
    } catch (error) {
        console.error(error);
    }
})();
