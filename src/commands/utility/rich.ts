import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    CommandInteraction,
    SlashCommandBuilder,
    StringSelectMenuOptionBuilder,
    StringSelectMenuBuilder,
    UserSelectMenuBuilder,
    RoleSelectMenuBuilder,
    MentionableSelectMenuBuilder,
    ChannelSelectMenuBuilder,
    InteractionResponse,
    ComponentType,
    StringSelectMenuInteraction,
    CacheType,
    ModalBuilder,
    TextInputAssertions,
    TextInputBuilder,
    TextInputStyle,
    ModalActionRowComponent,
    ModalActionRowComponentBuilder,
    ContextMenuCommandBuilder,
    ApplicationCommandType,
    ContextMenuCommandInteraction,
} from 'discord.js';

const buttonSample = {
    data: new SlashCommandBuilder().setName('button').setDescription('button sample'),
    async execute(interaction: CommandInteraction) {
        //ButtonBuilder()
        //customId, style, label が必要
        //customIdは、100文字以内で定義できる
        const primaryButton = new ButtonBuilder()
            .setCustomId('primary')
            .setLabel('Primary Button')
            .setStyle(ButtonStyle.Primary);
        const secondaryButton = new ButtonBuilder()
            .setCustomId('secondary')
            .setLabel('Secondary Button')
            .setStyle(ButtonStyle.Secondary);
        const successButton = new ButtonBuilder()
            .setCustomId('success')
            .setLabel('Success Button')
            .setStyle(ButtonStyle.Success);
        const dangerButton = new ButtonBuilder()
            .setCustomId('danger')
            .setLabel('Danger Button')
            .setStyle(ButtonStyle.Danger);
        //setDisabled(true)でボタンを無効化する
        const disabledButton = new ButtonBuilder()
            .setCustomId('disabled')
            .setLabel('Disabled Button')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(true);
        //* setEmoji("emoji id")
        //Buttonに絵文字もつけられる
        //絵文字IDの調べ方
        //URL: https://qiita.com/Arusu_Dev/items/683aef9da468725e778a
        const emojiButton = new ButtonBuilder()
            .setCustomId('emoji')
            .setLabel('Emoji Button')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('784105295328313394');
        //* ButtonStyle.Link
        //customIdをつけることはできない
        //setURLをつける必要がある
        const linkButton = new ButtonBuilder()
            .setLabel('Link Button')
            .setURL('https://yukiosada.work')
            .setStyle(ButtonStyle.Link);

        const row1 = new ActionRowBuilder<ButtonBuilder>().addComponents(primaryButton, secondaryButton, successButton);
        const row2 = new ActionRowBuilder<ButtonBuilder>().addComponents(
            disabledButton,
            linkButton,
            dangerButton,
            emojiButton
        );

        await interaction.reply({
            content: 'Button Sample',
            components: [row1, row2],
        });
    },
};

//*メニューを選択出来たら、メニューの外側を押すと選択できる
const MenuSample = {
    data: new SlashCommandBuilder().setName('menu').setDescription('menu sample'),
    async execute(interaction: CommandInteraction) {
        const select = new StringSelectMenuBuilder().setCustomId('menu').setPlaceholder('select menu').addOptions(
            new StringSelectMenuOptionBuilder().setLabel('item 1').setDescription('Item 1 selected.').setValue('item1'),
            //setDefault(true)でデフォルト選択されるようにできる
            new StringSelectMenuOptionBuilder()
                .setLabel('item 2')
                .setDescription('Item 2 selected.')
                .setValue('item2')
                .setDefault(true),
            //setEmoji("emoji id")で絵文字を表示できる
            new StringSelectMenuOptionBuilder()
                .setLabel('item 3')
                .setDescription('Item 3 selected.')
                .setValue('item3')
                .setEmoji('784105295328313394')
        );

        //参考: https://discord.js.org/docs/packages/builders/1.7.0/UserSelectMenuBuilder:Class
        const selectUser = new UserSelectMenuBuilder()
            .setCustomId('user-menu')
            .setPlaceholder('select user menu')
            .setDefaultUsers('792738692208394240')
            .addDefaultUsers('1214244964981014552')
            .setMinValues(1)
            .setMaxValues(4);
        //参考: https://discord.js.org/docs/packages/builders/1.7.0/RoleSelectMenuBuilder:Class
        const selectRole = new RoleSelectMenuBuilder()
            .setCustomId('role-menu')
            .setPlaceholder('select role menu')
            .setDefaultRoles(' 1129781618953957427')
            .addDefaultRoles('1129782522251837482')
            .setMinValues(1)
            .setMaxValues(4);
        //参考: https://discord.js.org/docs/packages/builders/1.7.0/MentionableSelectMenuBuilder:Class
        const selectMention = new MentionableSelectMenuBuilder()
            .setCustomId('mention-menu')
            .setPlaceholder('select mention menu')
            .addDefaultRoles('1129782313014800444')
            .addDefaultUsers('792738692208394240')
            .setDisabled(false)
            .setMinValues(1)
            .setMaxValues(4);
        const selectChannel = new ChannelSelectMenuBuilder()
            .setCustomId('channel-menu')
            .setPlaceholder('select channel menu')
            .setDefaultChannels('1095278657238466562')
            .addDefaultChannels('1100436414967058474')
            .setDisabled(false)
            .setMinValues(1)
            .setMaxValues(4);

        const row1 = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
        const row2 = new ActionRowBuilder<UserSelectMenuBuilder>().addComponents(selectUser);
        const row3 = new ActionRowBuilder<RoleSelectMenuBuilder>().addComponents(selectRole);
        const row4 = new ActionRowBuilder<MentionableSelectMenuBuilder>().addComponents(selectMention);
        const row5 = new ActionRowBuilder<ChannelSelectMenuBuilder>().addComponents(selectChannel);

        await interaction.reply({
            content: 'select menu',
            components: [row1, row2, row3, row4, row5],
        });
    },
};

const componentInteractionSample = {
    data: new SlashCommandBuilder().setName('component-interaction').setDescription('component interaction sample'),
    async execute(interaction: CommandInteraction) {
        const primaryButton = new ButtonBuilder()
            .setCustomId('primary')
            .setLabel('Primary Button')
            .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(primaryButton);

        const response = await interaction.reply({
            content: 'Button Sample',
            components: [row],
        });
        //スラッシュコマンドを入力したユーザーのみがコンポーネントの操作ができる
        const collectorFilter = (i: any) => i.user.id === interaction.user.id;

        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });

            if (confirmation.customId === 'primary') {
                await confirmation.update({ content: 'button clicked!', components: [] });
            }
        } catch (error) {
            await interaction.editReply({
                content: 'Confirmation not received within 1 minute, cancelling',
                components: [],
            });
        }
    },
};

//*複数のインタラクションを収集する方法
const componentInteractionAdvance = {
    data: new SlashCommandBuilder()
        .setName('component-interaction-advance')
        .setDescription('advance component interaction sample'),
    async execute(interaction: CommandInteraction) {
        const primaryButton = new ButtonBuilder()
            .setCustomId('primary')
            .setLabel('Primary Button')
            .setStyle(ButtonStyle.Primary);

        const select = new StringSelectMenuBuilder().setCustomId('menu').setPlaceholder('select menu').addOptions(
            new StringSelectMenuOptionBuilder().setLabel('item 1').setDescription('Item 1 selected.').setValue('item1'),
            //setDefault(true)でデフォルト選択されるようにできる
            new StringSelectMenuOptionBuilder()
                .setLabel('item 2')
                .setDescription('Item 2 selected.')
                .setValue('item2')
                .setDefault(true),
            //setEmoji("emoji id")で絵文字を表示できる
            new StringSelectMenuOptionBuilder()
                .setLabel('item 3')
                .setDescription('Item 3 selected.')
                .setValue('item3')
                .setEmoji('784105295328313394')
        );

        const firstRow = new ActionRowBuilder<ButtonBuilder>().addComponents(primaryButton);
        const secondRow = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);

        const response = await interaction.reply({
            content: 'Button Sample',
            components: [firstRow],
        });
        //スラッシュコマンドを入力したユーザーのみがコンポーネントの操作ができる
        const collectorFilter = (i: any) => i.user.id === interaction.user.id;

        try {
            const confirmation = await response.awaitMessageComponent({
                filter: collectorFilter,
                time: 60_000,
            });
            if (confirmation.customId !== 'primary') return;
            const selectedItem: InteractionResponse<boolean> = await confirmation.update({
                content: 'button clicked!',
                components: [secondRow],
            });
            const collector = selectedItem.createMessageComponentCollector({
                componentType: ComponentType.StringSelect,
                time: 3_600_000,
            });
            collector.on('collect', async (i: StringSelectMenuInteraction<CacheType>) => {
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
        } catch (error) {
            await interaction.editReply({
                content: 'Confirmation not received within 1 minute, cancelling',
                components: [],
            });
        }
    },
};

//*モーダル
//最大5つまで要素を持つことができる
//*モーダルは、応答の最初でなければならない
const ModalSample = {
    data: new SlashCommandBuilder().setName('modal').setDescription('modal sample'),
    async execute(interaction: CommandInteraction) {
        const modal = new ModalBuilder().setCustomId('modalSample').setTitle('modal sample');

        //modalの中身の作成
        //*TextInputStyle.Short <- 短いテキストのインプットに使う
        const favoriteColorInput = new TextInputBuilder()
            .setCustomId('favoriteColorInput')
            .setLabel("What's your favorite color?")
            .setStyle(TextInputStyle.Short);

        //*TextInput+.Paragraph <- 長めのテキストのインプットに使う
        const hobbiesInput = new TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setLabel("What's some of your favorite hobbies?")
            .setStyle(TextInputStyle.Paragraph);

        //*入力プロパティのいろいろ
        const inputSample = new TextInputBuilder()
            .setCustomId('inputSample')
            .setLabel('input sample')
            .setStyle(TextInputStyle.Paragraph)
            .setMaxLength(1_000)
            .setMinLength(10)
            .setPlaceholder('Enter some text!')
            .setValue('This is a default value')
            .setRequired(true);

        //行のインスタンス化?
        const firstActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(favoriteColorInput);
        const secondActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(hobbiesInput);
        const thirdActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(inputSample);

        //modalに追加
        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

        //モーダルの表示
        await interaction.showModal(modal);
    },
};

//*コンテキストメニュー
//ユーザーまたはメッセージを右クリックまたはタップした際に表示されるメニュー？
//の中の[Apps]サブメニューコマンドが作成できる
const contextMenusSample = {
    data: new ContextMenuCommandBuilder().setName('User Information').setType(ApplicationCommandType.User),
    async execute(interaction: ContextMenuCommandInteraction) {},
};

export { buttonSample, MenuSample, componentInteractionSample, componentInteractionAdvance, ModalSample };
