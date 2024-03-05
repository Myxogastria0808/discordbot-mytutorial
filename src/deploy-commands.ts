//スラッシュ コマンド定義に変更を加える必要がある場合にのみ、個別に実行する

import { REST, Routes } from 'discord.js';
import { ping } from './commands/utility/ping';
import dotenv from 'dotenv';
import { checkIsString } from './types/index';

//.envファイルを読み込む
dotenv.config();

//登録コマンドを呼び出してリスト形式で登録
const commands = [ping.data.toJSON()];

const token: string = checkIsString(process.env.TOKEN);
const applicationId: string = checkIsString(process.env.APPLICATIONID);
const guildId: string = checkIsString(process.env.GUILDID);

const rest = new REST({ version: '10' }).setToken(token);

//Discordサーヴァーにコマンドを登録
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
