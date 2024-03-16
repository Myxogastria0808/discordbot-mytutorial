"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPing = exports.getPingMsg = exports.deletePing = exports.followUpDeferPing = exports.followUpPing = exports.delayPing = exports.secretPing = exports.ping = void 0;
const discord_js_1 = require("discord.js");
const promises_1 = require("node:timers/promises");
const ping = {
    data: new discord_js_1.SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    async execute(interaction) {
        //応答が有効な時間は、デフォルトで3秒間
        await interaction.reply('Pong!');
    },
};
exports.ping = ping;
//メッセージを送った人だけに見せる
const secretPing = {
    data: new discord_js_1.SlashCommandBuilder().setName('secret-ping').setDescription('Replies with secret pong!'),
    async execute(interaction) {
        //ephemeralで、slashコマンドを入力したユーザーのみが見ることができる
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    },
};
exports.secretPing = secretPing;
//遅延応答
//通常は、3秒以上反応がないとインタラクションに失敗したことになる
//deferReply()を使うと3秒以上遅れて反応することができる
const delayPing = {
    data: new discord_js_1.SlashCommandBuilder().setName('delay-ping').setDescription('Replies with delay pong!'),
    async execute(interaction) {
        await interaction.deferReply();
        await (0, promises_1.setTimeout)(4000);
        await interaction.editReply('Delay Pong!');
    },
};
exports.delayPing = delayPing;
//追加のメッセージを送る方法
//replay()やdeferReply()は、初期応答にしか使えない
//最初の応答から15分間できる。
const followUpPing = {
    data: new discord_js_1.SlashCommandBuilder().setName('followup-ping').setDescription('Replies with follow up pong!'),
    async execute(interaction) {
        await interaction.reply('First pong!');
        //followUp()で、追加のメッセージを送れる
        await interaction.followUp('Pong again!');
        //メッセージを送った人だけに見せることも可能
        await interaction.followUp({ content: 'Secret Pong again!', ephemeral: true });
    },
};
exports.followUpPing = followUpPing;
//追加のメッセージを送る方法
//replay()やdeferReply()は、初期応答にしか使えない
const followUpDeferPing = {
    data: new discord_js_1.SlashCommandBuilder().setName('followup-defer-ping').setDescription('Replies with follow up pong!'),
    async execute(interaction) {
        await interaction.deferReply();
        //followUp()で、追加のメッセージを送れる
        await interaction.followUp('Pong with DeferReply!');
        //マスクしたリンクを送ることも可能
        await interaction.followUp('[My Website](https://yukiosada.work)');
    },
};
exports.followUpDeferPing = followUpDeferPing;
//レスポンスの削除
const deletePing = {
    data: new discord_js_1.SlashCommandBuilder().setName('delete-ping').setDescription('Replies with delete pong!'),
    async execute(interaction) {
        await interaction.reply('Pong with delete after 2 sec,');
        await (0, promises_1.setTimeout)(2000);
        await interaction.deleteReply();
    },
};
exports.deletePing = deletePing;
//レスポンスの Message オブジェクトの取得
const getPingMsg = {
    data: new discord_js_1.SlashCommandBuilder().setName('get-ping-msg').setDescription('Replies with get ping msg'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        //返信の取得
        const message = await interaction.fetchReply();
        await interaction.followUp(`Get reply message: ${message}`);
        console.log(message);
    },
};
exports.getPingMsg = getPingMsg;
//* サブコマンドのいろいろ
//*適当なサンプル
const selectPing = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('greet')
        .setDescription('Greets!')
        .addStringOption((option) => option
        .setName('language')
        .setDescription('Choice your language')
        .setRequired(true)
        .setChoices({ name: 'Japanese', value: 'japanese' }, { name: 'English', value: 'english' })),
    async execute(interaction) {
        if (interaction.options.get('language')?.value === 'japanese') {
            await interaction.reply('こんにちは！');
        }
        else {
            await interaction.reply('Hello!');
        }
    },
};
exports.selectPing = selectPing;
