import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { setTimeout } from 'node:timers/promises';

const ping = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    async execute(interaction: CommandInteraction) {
        //応答が有効な時間は、デフォルトで3秒間
        await interaction.reply('Pong!');
    },
};

//メッセージを送った人だけに見せる
const secretPing = {
    data: new SlashCommandBuilder().setName('secret-ping').setDescription('Replies with secret pong!'),
    async execute(interaction: CommandInteraction) {
        //ephemeralで、slashコマンドを入力したユーザーのみが見ることができる
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    },
};

//遅延応答
//通常は、3秒以上反応がないとインタラクションに失敗したことになる
//deferReply()を使うと3秒以上遅れて反応することができる
const delayPing = {
    data: new SlashCommandBuilder().setName('delay-ping').setDescription('Replies with delay pong!'),
    async execute(interaction: CommandInteraction) {
        await interaction.deferReply();
        await setTimeout(4_000);
        await interaction.editReply('Delay Pong!');
    },
};

//追加のメッセージを送る方法
//replay()やdeferReply()は、初期応答にしか使えない
//最初の応答から15分間できる。
const followUpPing = {
    data: new SlashCommandBuilder().setName('followup-ping').setDescription('Replies with follow up pong!'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('First pong!');
        //followUp()で、追加のメッセージを送れる
        await interaction.followUp('Pong again!');
        //メッセージを送った人だけに見せることも可能
        await interaction.followUp({ content: 'Secret Pong again!', ephemeral: true });
    },
};

//追加のメッセージを送る方法
//replay()やdeferReply()は、初期応答にしか使えない
const followUpDeferPing = {
    data: new SlashCommandBuilder().setName('followup-defer-ping').setDescription('Replies with follow up pong!'),
    async execute(interaction: CommandInteraction) {
        await interaction.deferReply();
        //followUp()で、追加のメッセージを送れる
        await interaction.followUp('Pong with DeferReply!');
        //マスクしたリンクを送ることも可能
        await interaction.followUp('[My Website](https://yukiosada.work)');
    },
};

//レスポンスの削除
const deletePing = {
    data: new SlashCommandBuilder().setName('delete-ping').setDescription('Replies with delete pong!'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong with delete after 2 sec,');
        await setTimeout(2_000);
        await interaction.deleteReply();
    },
};

//レスポンスの Message オブジェクトの取得
const getPingMsg = {
    data: new SlashCommandBuilder().setName('get-ping-msg').setDescription('Replies with get ping msg'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong!');
        //返信の取得
        const message = await interaction.fetchReply();
        await interaction.followUp(`Get reply message: ${message}`);
        console.log(message);
    },
};

//* サブコマンドのいろいろ
const selectPing = {
    data: new SlashCommandBuilder()
        .setName('greet')
        .setDescription('Greets!')
        .addStringOption((option) =>
            option
                .setName('language')
                .setDescription('Choice your language')
                .setRequired(true)
                .setChoices({ name: 'Japanese', value: 'japanese' }, { name: 'English', value: 'english' })
        ),
    async execute(interaction: CommandInteraction) {
        if (interaction.options.get('language')?.value === 'japanese') {
            await interaction.reply('こんにちは！');
        } else {
            await interaction.reply('Hello!');
        }
    },
};

export { ping, secretPing, delayPing, followUpPing, followUpDeferPing, getPingMsg, selectPing };
