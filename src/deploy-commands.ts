import { REST, Routes } from 'discord.js';
import { sayhello } from './commands/index';
import dotenv from 'dotenv';
import { checkIsString } from './types/index';

//.envファイルを読み込む
dotenv.config();

//登録コマンドを呼び出してリスト形式で登録
const commands = [sayhello.data.toJSON()];

const token: string = checkIsString(process.env.TOKEN);
const applicationId: string = checkIsString(process.env.APPLICATIONID);
const guidId: string = checkIsString(process.env.GUIDID);

const rest = new REST({ version: '10' }).setToken(token);

//Discordサーヴァーにコマンドを登録
const register = (async () => {
    try {
        const registeredCommands = await rest.put(Routes.applicationGuildCommands(applicationId, guidId), {
            body: commands,
        });
        console.log(registeredCommands);
    } catch (error) {
        console.error(`コマンドの登録中にエラーが発生しました。\nエラー内容: ${error}`);
    }
})();
