import { GatewayIntentBits, Client, Events } from 'discord.js';
import dotenv from 'dotenv';
import { ping } from './commands/utility/ping';

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
    //入力されたスラッシュコマンドは、interaction.commandNameに格納される
    //TODO: ここをいい感じにfor文で回したい
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
    } else {
        console.error(`No command matching ${interaction.commandName} was found.`);
    }
});
/////////////////////////////////////////////////////////

//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);
