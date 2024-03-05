import { GatewayIntentBits, Client, Events } from 'discord.js';
import dotenv from 'dotenv';
import { sayhello } from 'commands';

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

////////////////////////////////////////////////////////
//  スラッシュコマンドを使うには、interactionCreateのインベントリスナーを使う必要がある
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }
    if (interaction.commandName === sayhello.data.name) {
    } else {
        console.error(
            `${interaction.commandName}というコマンドには対応していません。`
        );
    }
});
/////////////////////////////////////////////////////////

//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
