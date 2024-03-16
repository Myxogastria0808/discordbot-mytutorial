"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalSample = exports.componentInteractionAdvance = exports.componentInteractionSample = exports.MenuSample = exports.buttonSample = void 0;
const discord_js_1 = require("discord.js");
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
                time: 3600000,
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
        const modal = new discord_js_1.ModalBuilder().setCustomId('modalSample').setTitle('modal sample');
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
    },
};
exports.ModalSample = ModalSample;
//*コンテキストメニュー
//ユーザーまたはメッセージを右クリックまたはタップした際に表示されるメニュー？
//の中の[Apps]サブメニューコマンドが作成できる
const contextMenusSample = {
    data: new discord_js_1.ContextMenuCommandBuilder().setName('User Information').setType(discord_js_1.ApplicationCommandType.User),
    async execute(interaction) { },
};
