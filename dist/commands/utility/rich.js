"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactCollectorAwaitReactionSample = exports.reactCollectorSample = exports.reactSpecificGet = exports.reactSpecificDelete = exports.reactAllDelete = exports.reactNonOrderSample = exports.reactionExample = exports.embedReplyAndEdit = exports.embedLocalImgSample = exports.EmbedSample = exports.MarkDownMassage = exports.contentMenusMessage = exports.contextMenusUser = exports.ModalSample = exports.componentInteractionAdvance = exports.componentInteractionSample = exports.MenuSample = exports.buttonSample = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("../../types/index");
const promises_1 = require("node:timers/promises");
const buttonSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('button').setDescription('button sample'),
    async execute(interaction) {
        //ButtonBuilder()
        //customId, style, label が必要
        //customIdは、100文字以内で定義できる
        const primaryButton = new discord_js_1.ButtonBuilder()
            .setCustomId('primary')
            .setLabel('Primary Button')
            .setStyle(discord_js_1.ButtonStyle.Primary);
        const secondaryButton = new discord_js_1.ButtonBuilder()
            .setCustomId('secondary')
            .setLabel('Secondary Button')
            .setStyle(discord_js_1.ButtonStyle.Secondary);
        const successButton = new discord_js_1.ButtonBuilder()
            .setCustomId('success')
            .setLabel('Success Button')
            .setStyle(discord_js_1.ButtonStyle.Success);
        const dangerButton = new discord_js_1.ButtonBuilder()
            .setCustomId('danger')
            .setLabel('Danger Button')
            .setStyle(discord_js_1.ButtonStyle.Danger);
        //setDisabled(true)でボタンを無効化する
        const disabledButton = new discord_js_1.ButtonBuilder()
            .setCustomId('disabled')
            .setLabel('Disabled Button')
            .setStyle(discord_js_1.ButtonStyle.Primary)
            .setDisabled(true);
        //* setEmoji("emoji id")
        //Buttonに絵文字もつけられる
        //絵文字IDの調べ方
        //URL: https://qiita.com/Arusu_Dev/items/683aef9da468725e778a
        const emojiButton = new discord_js_1.ButtonBuilder()
            .setCustomId('emoji')
            .setLabel('Emoji Button')
            .setStyle(discord_js_1.ButtonStyle.Primary)
            .setEmoji('784105295328313394');
        //* ButtonStyle.Link
        //customIdをつけることはできない
        //setURLをつける必要がある
        const linkButton = new discord_js_1.ButtonBuilder()
            .setLabel('Link Button')
            .setURL('https://yukiosada.work')
            .setStyle(discord_js_1.ButtonStyle.Link);
        const row1 = new discord_js_1.ActionRowBuilder().addComponents(primaryButton, secondaryButton, successButton);
        const row2 = new discord_js_1.ActionRowBuilder().addComponents(disabledButton, linkButton, dangerButton, emojiButton);
        await interaction.reply({
            content: 'Button Sample',
            components: [row1, row2],
        });
    },
};
exports.buttonSample = buttonSample;
//*メニューを選択出来たら、メニューの外側を押すと選択できる
const MenuSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('menu').setDescription('menu sample'),
    async execute(interaction) {
        const select = new discord_js_1.StringSelectMenuBuilder().setCustomId('menu').setPlaceholder('select menu').addOptions(new discord_js_1.StringSelectMenuOptionBuilder().setLabel('item 1').setDescription('Item 1 selected.').setValue('item1'), 
        //setDefault(true)でデフォルト選択されるようにできる
        new discord_js_1.StringSelectMenuOptionBuilder()
            .setLabel('item 2')
            .setDescription('Item 2 selected.')
            .setValue('item2')
            .setDefault(true), 
        //setEmoji("emoji id")で絵文字を表示できる
        new discord_js_1.StringSelectMenuOptionBuilder()
            .setLabel('item 3')
            .setDescription('Item 3 selected.')
            .setValue('item3')
            .setEmoji('784105295328313394'));
        //参考: https://discord.js.org/docs/packages/builders/1.7.0/UserSelectMenuBuilder:Class
        const selectUser = new discord_js_1.UserSelectMenuBuilder()
            .setCustomId('user-menu')
            .setPlaceholder('select user menu')
            .setDefaultUsers('792738692208394240')
            .addDefaultUsers('1214244964981014552')
            .setMinValues(1)
            .setMaxValues(4);
        //参考: https://discord.js.org/docs/packages/builders/1.7.0/RoleSelectMenuBuilder:Class
        const selectRole = new discord_js_1.RoleSelectMenuBuilder()
            .setCustomId('role-menu')
            .setPlaceholder('select role menu')
            .setDefaultRoles(' 1129781618953957427')
            .addDefaultRoles('1129782522251837482')
            .setMinValues(1)
            .setMaxValues(4);
        //参考: https://discord.js.org/docs/packages/builders/1.7.0/MentionableSelectMenuBuilder:Class
        const selectMention = new discord_js_1.MentionableSelectMenuBuilder()
            .setCustomId('mention-menu')
            .setPlaceholder('select mention menu')
            .addDefaultRoles('1129782313014800444')
            .addDefaultUsers('792738692208394240')
            .setDisabled(false)
            .setMinValues(1)
            .setMaxValues(4);
        const selectChannel = new discord_js_1.ChannelSelectMenuBuilder()
            .setCustomId('channel-menu')
            .setPlaceholder('select channel menu')
            .setDefaultChannels('1095278657238466562')
            .addDefaultChannels('1100436414967058474')
            .setDisabled(false)
            .setMinValues(1)
            .setMaxValues(4);
        const row1 = new discord_js_1.ActionRowBuilder().addComponents(select);
        const row2 = new discord_js_1.ActionRowBuilder().addComponents(selectUser);
        const row3 = new discord_js_1.ActionRowBuilder().addComponents(selectRole);
        const row4 = new discord_js_1.ActionRowBuilder().addComponents(selectMention);
        const row5 = new discord_js_1.ActionRowBuilder().addComponents(selectChannel);
        await interaction.reply({
            content: 'select menu',
            components: [row1, row2, row3, row4, row5],
        });
    },
};
exports.MenuSample = MenuSample;
const componentInteractionSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('component-interaction').setDescription('component interaction sample'),
    async execute(interaction) {
        const primaryButton = new discord_js_1.ButtonBuilder()
            .setCustomId('primary')
            .setLabel('Primary Button')
            .setStyle(discord_js_1.ButtonStyle.Primary);
        const row = new discord_js_1.ActionRowBuilder().addComponents(primaryButton);
        const response = await interaction.reply({
            content: 'Button Sample',
            components: [row],
        });
        //スラッシュコマンドを入力したユーザーのみがコンポーネントの操作ができる
        const collectorFilter = (i) => i.user.id === interaction.user.id;
        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
            if (confirmation.customId === 'primary') {
                await confirmation.update({ content: 'button clicked!', components: [] });
            }
        }
        catch (error) {
            await interaction.editReply({
                content: 'Confirmation not received within 1 minute, cancelling',
                components: [],
            });
        }
    },
};
exports.componentInteractionSample = componentInteractionSample;
//*複数のインタラクションを収集する方法
const componentInteractionAdvance = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('component-interaction-advance')
        .setDescription('advance component interaction sample'),
    async execute(interaction) {
        const primaryButton = new discord_js_1.ButtonBuilder()
            .setCustomId('primary')
            .setLabel('Primary Button')
            .setStyle(discord_js_1.ButtonStyle.Primary);
        const select = new discord_js_1.StringSelectMenuBuilder().setCustomId('menu').setPlaceholder('select menu').addOptions(new discord_js_1.StringSelectMenuOptionBuilder().setLabel('item 1').setDescription('Item 1 selected.').setValue('item1'), 
        //setDefault(true)でデフォルト選択されるようにできる
        new discord_js_1.StringSelectMenuOptionBuilder()
            .setLabel('item 2')
            .setDescription('Item 2 selected.')
            .setValue('item2')
            .setDefault(true), 
        //setEmoji("emoji id")で絵文字を表示できる
        new discord_js_1.StringSelectMenuOptionBuilder()
            .setLabel('item 3')
            .setDescription('Item 3 selected.')
            .setValue('item3')
            .setEmoji('784105295328313394'));
        const firstRow = new discord_js_1.ActionRowBuilder().addComponents(primaryButton);
        const secondRow = new discord_js_1.ActionRowBuilder().addComponents(select);
        const response = await interaction.reply({
            content: 'Button Sample',
            components: [firstRow],
        });
        //スラッシュコマンドを入力したユーザーのみがコンポーネントの操作ができる
        const collectorFilter = (i) => i.user.id === interaction.user.id;
        try {
            const confirmation = await response.awaitMessageComponent({
                filter: collectorFilter,
                time: 60000,
            });
            if (confirmation.customId !== 'primary')
                return;
            const selectedItem = await confirmation.update({
                content: 'button clicked!',
                components: [secondRow],
            });
            const collector = selectedItem.createMessageComponentCollector({
                componentType: discord_js_1.ComponentType.StringSelect,
                time: 30000,
            });
            collector.on('collect', async (i) => {
                console.log(`client: ${i.client}`);
                console.log(`createdAt: ${i.createdAt}`);
                console.log(`createdTimestamp: ${i.createdTimestamp}`);
                console.log(`locale: ${i.locale}`);
                console.log(`member: ${i.member}`);
                console.log(`memberPermissions: ${i.memberPermissions}`);
                console.log(`values: ${i.values}`);
                const selection = i.values[0];
                await i.reply(`${i.user} has selected ${selection}!`);
                await i.followUp(`Thank you for select item!`);
            });
            //コレクターが指定された終了条件に基づいて収集を完了するとendイベントが発行される。
            //*今回の場合は、30秒経過した場合に終了する。これ -> createMessageComponentCollector({ ... time: 30_000,});
            collector.on('end', async (collected) => {
                if (collected.size === 1) {
                    await interaction.followUp(`The selection is closed. Thank you for answer the selection!`);
                    console.log(`Collected ${collected.size} interactions.`);
                }
                else if (collected.size === 0) {
                    await interaction.followUp(`Your selection is missing. Because, 30 sec. passed.`);
                    console.log(`Collected ${collected.size} interactions.`);
                }
            });
        }
        catch (error) {
            await interaction.editReply({
                content: 'Confirmation not received within 1 minute, cancelling',
                components: [],
            });
        }
    },
};
exports.componentInteractionAdvance = componentInteractionAdvance;
//*モーダル
//最大5つまで要素を持つことができる
//*モーダルは、応答の最初でなければならない
const ModalSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('modal').setDescription('modal sample'),
    async execute(interaction) {
        const modal = new discord_js_1.ModalBuilder().setCustomId('modal').setTitle('modal sample');
        //modalの中身の作成
        //*TextInputStyle.Short <- 短いテキストのインプットに使う
        const favoriteColorInput = new discord_js_1.TextInputBuilder()
            .setCustomId('favoriteColorInput')
            .setLabel("What's your favorite color?")
            .setStyle(discord_js_1.TextInputStyle.Short);
        //*TextInput+.Paragraph <- 長めのテキストのインプットに使う
        const hobbiesInput = new discord_js_1.TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setLabel("What's some of your favorite hobbies?")
            .setStyle(discord_js_1.TextInputStyle.Paragraph);
        //*入力プロパティのいろいろ
        const inputSample = new discord_js_1.TextInputBuilder()
            .setCustomId('inputSample')
            .setLabel('input sample')
            .setStyle(discord_js_1.TextInputStyle.Paragraph)
            .setMaxLength(1000)
            .setMinLength(10)
            .setPlaceholder('Enter some text!')
            .setValue('This is a default value')
            .setRequired(true);
        //行のインスタンス化?
        const firstActionRow = new discord_js_1.ActionRowBuilder().addComponents(favoriteColorInput);
        const secondActionRow = new discord_js_1.ActionRowBuilder().addComponents(hobbiesInput);
        const thirdActionRow = new discord_js_1.ActionRowBuilder().addComponents(inputSample);
        //modalに追加
        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);
        //モーダルの表示
        await interaction.showModal(modal);
        //filterの作成
        const filter = (interaction) => interaction.customId === `modal`;
        try {
            //モーダルの送信時間の制限をする
            const modalInteraction = await interaction.awaitModalSubmit({ filter, time: 30000 });
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
            const favoriteColor = modalInteraction.fields.getTextInputValue('favoriteColorInput');
            const hobbies = modalInteraction.fields.getTextInputValue('hobbiesInput');
            const inputSample = modalInteraction.fields.getTextInputValue('inputSample');
            await modalInteraction.reply(`favorite color: ${favoriteColor}`);
            await modalInteraction.followUp(`hobbies: ${hobbies}`);
            await modalInteraction.followUp(`inputSample: ${inputSample}`);
        }
        catch (error) {
            console.error(error);
        }
    },
};
exports.ModalSample = ModalSample;
//*コンテキストメニュー
//ユーザーまたはメッセージを右クリックまたはタップした際に表示されるメニュー？
//の中の[Apps]サブメニューコマンドが作成できる
//参考にした動画: https://www.youtube.com/watch?v=U4uRGMXf_kY
const contextMenusUser = {
    //ApplicationCommandType <-トリガーとなる対象を選ぶことができる
    data: new discord_js_1.ContextMenuCommandBuilder().setName('User Information').setType(discord_js_1.ApplicationCommandType.User),
    async execute(interaction) {
        //対象のメッセージを取得する
        const targetUser = interaction.targetUser;
        interaction.reply(`
            Username: ${targetUser.username}
            ID: ${targetUser.id}
            User tag: ${targetUser.tag}
            Avatar: ${targetUser.avatar}
            Global Name: ${targetUser.globalName}
            Created At: ${targetUser.createdAt}
            Created Timestamp: ${targetUser.createdTimestamp}
        `);
    },
};
exports.contextMenusUser = contextMenusUser;
//.envファイルを読み込む
dotenv_1.default.config();
const contentMenusMessage = {
    data: new discord_js_1.ContextMenuCommandBuilder().setName('Translate message').setType(discord_js_1.ApplicationCommandType.Message),
    async execute(interaction) {
        //対象のメッセージを取得する
        const targetMessage = interaction.targetMessage;
        interaction.reply(`
            Original message: ${targetMessage}
            Translate message: ....
        `);
    },
};
exports.contentMenusMessage = contentMenusMessage;
const MarkDownMassage = {
    data: new discord_js_1.SlashCommandBuilder().setName('markdown').setDescription('This is a markdown sample'),
    async execute(interaction) {
        const boldString = (0, discord_js_1.bold)('bold');
        const italicString = (0, discord_js_1.italic)('italic');
        const strikethroughString = (0, discord_js_1.strikethrough)('strikethrough');
        const underscoreString = (0, discord_js_1.underscore)('underscore');
        const spoilerString = (0, discord_js_1.spoiler)('spoiler');
        const quoteString = (0, discord_js_1.quote)('quote');
        const blockquoteString = (0, discord_js_1.blockQuote)('blockquote');
        //リンクのマスク
        const url = 'https://yukiosada.work';
        const link = (0, discord_js_1.hyperlink)('My website!', url);
        //hideLinkEmbed で <> の埋め込みを防ぐ
        const hiddenEmbed = (0, discord_js_1.hideLinkEmbed)(url);
        //タイムスタンプ
        const date = new Date();
        const timeString = (0, discord_js_1.time)(date);
        const timeD = (0, discord_js_1.time)(date, 'D');
        const timeF = (0, discord_js_1.time)(date, 'F');
        const timeR = (0, discord_js_1.time)(date, 'R');
        const timeT = (0, discord_js_1.time)(date, 'T');
        const timed = (0, discord_js_1.time)(date, 'd');
        const timef = (0, discord_js_1.time)(date, 'f');
        const timet = (0, discord_js_1.time)(date, 't');
        //メンション
        const channelId = (0, index_1.checkIsString)(process.env.EXAMPLECHANNEL);
        const roleId = (0, index_1.checkIsString)(process.env.EXAMPLEROLE);
        const userId = (0, index_1.checkIsString)(process.env.EXAMPLEUSER);
        const channel = (0, discord_js_1.channelMention)(channelId);
        const role = (0, discord_js_1.roleMention)(roleId);
        const user = (0, discord_js_1.userMention)(userId);
        await interaction.reply(`
${boldString}

${italicString}

${strikethroughString}

${underscoreString}

${spoilerString}

${quoteString}

${blockquoteString}
        `);
        await interaction.followUp(`
normal
${url}
        `);
        await interaction.followUp(`
hyperlink()
${link}
        `);
        await interaction.followUp(`
hideLinkEmbed
${hiddenEmbed}
        `);
        await interaction.followUp(`
normal
${date}

time()
${timeString}

time( , 'D')
${timeD}

time( , 'F')
${timeF}

time( , 'R')
${timeR}

time( , 'T')
${timeT}

time( , 'd')
${timed}

time( , 'f')
${timef}

time( , 't')
${timet}
        `);
        await interaction.followUp(`
channel mention
${channel}

role mention
${role}

user mention
${user}
        `);
    },
};
exports.MarkDownMassage = MarkDownMassage;
const EmbedSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('embed').setDescription('embed sample'),
    async execute(interaction) {
        //*基本のパターン
        //全体の文字数は、6000文字以内
        const exampleEmbed = new discord_js_1.EmbedBuilder()
            //側面の色を決めることができる
            //整数、16進数のカラー文字列、RGB値の配列、特定のカラー文字列で設定可能らしい
            .setColor(0x0099ff)
            //256文字以内
            .setTitle('Embed Title')
            .setURL('https://yukiosada.work/')
            //setAuthorのnameは、256文字以内
            .setAuthor({
            name: 'Yuki Osada',
            iconURL: 'https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&',
            url: 'https://yukiosada.work/',
        })
            //4096文字以内
            .setDescription('Embed description')
            .setThumbnail('https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&')
            //フィールドの数は、25個以内
            //nameは、256文字以内
            //valueは、1024文字以内
            .addFields({ name: 'Regular field title', value: 'Some field value', inline: false }, 
        //以下のように書くと、空のフィールドを作れる
        { name: '\u200B', value: '\u200B', inline: false }, 
        //inline：trueにすると、{name: "", value: ""} ごとに改行されない
        { name: 'Inline: true', value: 'sample text', inline: true }, { name: 'Inline: true', value: 'sample text', inline: true }, { name: 'Inline: true', value: 'sample text', inline: true }, 
        //inline: falseにすると、文字は折り返されない
        { name: 'Inline: false', value: 'sample text', inline: false }, { name: 'Inline: false', value: 'sample text', inline: false }, { name: 'Inline: false', value: 'sample text', inline: false })
            .addFields({ name: 'additional Inline field title', value: 'sample text', inline: false }, 
        //valueは、1文字以上必要
        { name: 'The least value pattern', value: 'あ', inline: false }, 
        //URLのマスクができる
        { name: 'The least value pattern', value: '[My Website!](https://yukiosada.work/)', inline: false })
            //画像を埋め込める
            //URLじゃないとだめらしい
            .setImage('https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&')
            //タイムスタンプも設置できる
            .setTimestamp()
            //setFooterのtextは、2024文字以内
            .setFooter({
            text: 'Embed footer text',
            iconURL: 'https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&',
        });
        interaction.reply({ embeds: [exampleEmbed] });
    },
};
exports.EmbedSample = EmbedSample;
const embedLocalImgSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('embed-local-img').setDescription('Embed local image'),
    async execute(interaction) {
        //*ローカルの画像を表示する方法
        //*プロジェクト直下のパスからの絶対パス？でパスを設定する
        const img = new discord_js_1.AttachmentBuilder('./src/commands/utility/sample.jpg');
        const localImgEmbed = new discord_js_1.EmbedBuilder()
            .setTitle('Local image embed title')
            .setImage('attachment://sample.jpg');
        interaction.reply({ embeds: [localImgEmbed], files: [img] });
    },
};
exports.embedLocalImgSample = embedLocalImgSample;
//*再送信と編集
//参照: https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
//※edit()は、よくわからない
const embedReplyAndEdit = {
    data: new discord_js_1.SlashCommandBuilder().setName('embed-reply-and-edit').setDescription('replya and edit embed'),
    async execute(interaction) {
        const originEmbed = new discord_js_1.EmbedBuilder().setTitle('Origin Title');
        await interaction.reply({ embeds: [originEmbed] });
        const message = await interaction.fetchReply();
        const receivedEmbed = message.embeds[0];
        const replyEmbed = discord_js_1.EmbedBuilder.from(receivedEmbed)
            .setTitle('New Title')
            .setDescription('new description');
        await interaction.followUp({ embeds: [replyEmbed] });
    },
};
exports.embedReplyAndEdit = embedReplyAndEdit;
//*リアクションの追加 (順番通り)
//参照: https://discordjs.guide/popular-topics/reactions.html
const reactionExample = {
    data: new discord_js_1.SlashCommandBuilder().setName('reaction').setDescription('reaction sample'),
    async execute(interaction) {
        await interaction.reply('Reaction in order :smile:');
        const message = await interaction.fetchReply();
        //*** reactionの追加 ***//
        try {
            //* Unicoe絵文字
            //awaitをつけることで必ず以下の順番で表示される
            await message.react('😄');
            await message.react('👷');
            //* カスタム絵文字
            //await message.react('123456789012345678');
            //以下の形式でも表示可能らしい
            // message.react('<:blobreach:123456789012345678>');
            // message.react('blobreach:123456789012345678');
            // message.react('<a:blobreach:123456789012345678>');
            // message.react('a:blobreach:123456789012345678');
        }
        catch (error) {
            console.error('One of the emojis failed to react:', error);
        }
    },
};
exports.reactionExample = reactionExample;
//*リアクションの追加 (順番不明)
const reactNonOrderSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('reaction-non-order').setDescription('reaction non order sample'),
    async execute(interaction) {
        //順番が重要でなければ以下のような書き方もできる
        await interaction.reply('It reacts regardless of the order :smile:');
        const message = await interaction.fetchReply();
        //*** reactionの追加 ***//
        Promise.all([message.react('1⃣'), message.react('2⃣'), message.react('3⃣')]).catch((error) => console.error('One of the emojis failed to react:', error));
    },
};
exports.reactNonOrderSample = reactNonOrderSample;
//*リアクションの全削除
const reactAllDelete = {
    data: new discord_js_1.SlashCommandBuilder().setName('reaction-all-delete').setDescription('reaction all delete sample'),
    async execute(interaction) {
        await interaction.reply('Reaction remove after 5 sec.');
        const message = await interaction.fetchReply();
        try {
            //reactionの追加
            await message.react('😄');
            await message.react('👷');
            await message.react('🐡');
            await message.react('🐚');
        }
        catch (error) {
            console.error('One of the emojis failed to react:', error);
        }
        //5秒待機
        await (0, promises_1.setTimeout)(5000);
        //*** reactionの削除 ***//
        //reactionの全削除
        await message.reactions.removeAll().catch((error) => console.error('Failed to clear reactions:', error));
    },
};
exports.reactAllDelete = reactAllDelete;
//*特定のリアクションの削除
const reactSpecificDelete = {
    data: new discord_js_1.SlashCommandBuilder().setName('reaction-specific-delete').setDescription('reaction all delete sample'),
    async execute(interaction) {
        await interaction.reply('Reaction remove after 5 sec.');
        const message = await interaction.fetchReply();
        try {
            //reactionの追加
            await message.react('🐡');
            await message.react('🐚');
            await message.react('🍏');
            await message.react('🐠');
        }
        catch (error) {
            console.error('One of the emojis failed to react:', error);
        }
        //5秒待機
        await (0, promises_1.setTimeout)(5000);
        //*** reactionの削除 ***//
        //特定のreactionの削除
        //*get()を使った場合
        await message.reactions.cache
            .get('🐡')
            ?.remove()
            .catch((error) => console.error('Failed to remove reactions:', error));
        await message.reactions.cache
            .get('🐚')
            ?.remove()
            .catch((error) => console.error('Failed to remove reactions:', error));
    },
};
exports.reactSpecificDelete = reactSpecificDelete;
//*特定のリアクションの取得
//!なぜか、うまくできない
const reactSpecificGet = {
    data: new discord_js_1.SlashCommandBuilder().setName('reaction-specific-get').setDescription('reaction all delete sample'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Emoji Reaction!', fetchReply: true });
        //*** reactionの取得 ***//
        //*find()を使った場合
        //始めに見つかった絵文字のみ取得する
        const findEmoji = message.guild?.emojis.cache.find((emoji) => emoji.name === '🚙');
        if (typeof findEmoji === 'undefined')
            return;
        await message.react(findEmoji);
        //*get()を使った場合
        const getEmoji = message.client.emojis.cache.get('⛰');
        if (typeof getEmoji === 'undefined')
            return;
        await message.react(getEmoji);
    },
};
exports.reactSpecificGet = reactSpecificGet;
//リアクションコレクター
//*createReactionCollector()
//参考: https://brianmorrison.me/blog/discord-bot-reaction-collectors/
const reactCollectorSample = {
    data: new discord_js_1.SlashCommandBuilder().setName('reaction-collector').setDescription('reaction collector sample'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Which emoji do you prefer?', fetchReply: true });
        await message.react('👍');
        await message.react('👎');
        //filterの作成
        const filter = (reaction, user) => {
            if (typeof reaction.emoji.name === 'string') {
                return ['👍', '👎'].includes(reaction.emoji.name) && !user.bot;
            }
            else {
                return false;
            }
        };
        //collectorの作成
        const collector = message.createReactionCollector({ filter, max: 1, time: 15000 });
        collector.on('collect', async (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
            await message.reactions.removeAll().catch((error) => console.error('Failed to clear reactions:', error));
            await interaction.followUp(`${user.tag} chose ${reaction.emoji.name}`);
            await interaction.followUp(`Thank you for answer the question!`);
        });
        collector.on('end', async (collected) => {
            console.log(`Collected ${collected.size} items`);
        });
    },
};
exports.reactCollectorSample = reactCollectorSample;
//リアクションコレクター
//*awaitReactions()
//参考: https://brianmorrison.me/blog/discord-bot-reaction-collectors/
//参考: https://maah.gitbooks.io/discord-bots/content/getting-started/awaiting-messages-and-reactions.html
//参考: https://scrapbox.io/discordjs-japan/%E3%83%AA%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%95%E3%82%8C%E3%82%8B%E3%81%AE%E3%82%92%E5%BE%85%E3%81%A1%E5%8F%97%E3%81%91%E3%81%A6%E5%87%A6%E7%90%86%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B
const reactCollectorAwaitReactionSample = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('reaction-collector-await')
        .setDescription('reaction collector await reaction sample'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Which fish do you prefer?', fetchReply: true });
        await message.react('🐠');
        await message.react('🐡');
        await message.react('🐟');
        await message.react('🦈');
        //filterの作成
        const collectorFilter = (reaction, user) => {
            if (typeof reaction.emoji.name === 'string') {
                return ['🐠', '🐡', '🐟', '🦈'].includes(reaction.emoji.name) && !user.bot;
            }
            else {
                return false;
            }
        };
        try {
            const reaction = await message.awaitReactions({
                filter: collectorFilter,
                max: 1,
                time: 60000,
                errors: ['time'],
            });
            console.log(reaction.size);
            console.log(`Collected ${reaction.first()?.emoji.name} from ${reaction
                .first()
                ?.users.cache.map((user) => user.tag)}`);
            await message.reactions.removeAll().catch((error) => console.error('Failed to clear reactions:', error));
            const users = reaction.first()?.users.cache.map((user) => {
                if (user.tag === 'DebtBot#0927')
                    return;
                return user.tag;
            });
            if (!users || users.length === 0)
                return;
            const user = users[1];
            if (typeof user === 'undefined')
                return;
            await interaction.followUp(`${user} chose ${reaction.first()?.emoji.name}`);
            await interaction.followUp(`Thank you for answer the question!`);
        }
        catch (error) {
            console.log(`After a minute, only ${error.size} out of 4 reacted.`);
        }
    },
};
exports.reactCollectorAwaitReactionSample = reactCollectorAwaitReactionSample;
