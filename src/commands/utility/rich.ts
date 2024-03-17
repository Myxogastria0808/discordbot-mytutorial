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
    TextInputBuilder,
    TextInputStyle,
    ModalActionRowComponentBuilder,
    ContextMenuCommandBuilder,
    ApplicationCommandType,
    MessageContextMenuCommandInteraction,
    Message,
    UserContextMenuCommandInteraction,
    User,
    bold,
    italic,
    strikethrough,
    underscore,
    spoiler,
    quote,
    blockQuote,
    hyperlink,
    hideLinkEmbed,
    time,
    channelMention,
    roleMention,
    userMention,
    EmbedBuilder,
    Attachment,
    AttachmentBuilder,
    Embed,
    GuildEmoji,
} from 'discord.js';
import dotenv from 'dotenv';
import { checkIsString } from '../../types/index';
import { setTimeout } from 'node:timers/promises';

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
//参考にした動画: https://www.youtube.com/watch?v=U4uRGMXf_kY
const contextMenusUser = {
    //ApplicationCommandType <-トリガーとなる対象を選ぶことができる
    data: new ContextMenuCommandBuilder().setName('User Information').setType(ApplicationCommandType.User),
    async execute(interaction: UserContextMenuCommandInteraction) {
        //対象のメッセージを取得する
        const targetUser: User = interaction.targetUser;
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

//.envファイルを読み込む
dotenv.config();

const contentMenusMessage = {
    data: new ContextMenuCommandBuilder().setName('Translate message').setType(ApplicationCommandType.Message),
    async execute(interaction: MessageContextMenuCommandInteraction) {
        //対象のメッセージを取得する
        const targetMessage: Message<boolean> = interaction.targetMessage;
        interaction.reply(`
            Original message: ${targetMessage}
            Translate message: ....
        `);
    },
};

const MarkDownMassage = {
    data: new SlashCommandBuilder().setName('markdown').setDescription('This is a markdown sample'),
    async execute(interaction: CommandInteraction) {
        const boldString: string = bold('bold');
        const italicString: string = italic('italic');
        const strikethroughString: string = strikethrough('strikethrough');
        const underscoreString: string = underscore('underscore');
        const spoilerString: string = spoiler('spoiler');
        const quoteString: string = quote('quote');
        const blockquoteString: string = blockQuote('blockquote');

        //リンクのマスク
        const url: string = 'https://yukiosada.work';
        const link = hyperlink('My website!', url);
        //hideLinkEmbed で <> の埋め込みを防ぐ
        const hiddenEmbed = hideLinkEmbed(url);

        //タイムスタンプ
        const date = new Date();
        const timeString = time(date);
        const timeD = time(date, 'D');
        const timeF = time(date, 'F');
        const timeR = time(date, 'R');
        const timeT = time(date, 'T');
        const timed = time(date, 'd');
        const timef = time(date, 'f');
        const timet = time(date, 't');

        //メンション
        const channelId: string = checkIsString(process.env.EXAMPLECHANNEL);
        const roleId: string = checkIsString(process.env.EXAMPLEROLE);
        const userId: string = checkIsString(process.env.EXAMPLEUSER);

        const channel = channelMention(channelId);
        const role = roleMention(roleId);
        const user = userMention(userId);

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

const EmbedSample = {
    data: new SlashCommandBuilder().setName('embed').setDescription('embed sample'),
    async execute(interaction: CommandInteraction) {
        //*基本のパターン
        //全体の文字数は、6000文字以内
        const exampleEmbed: EmbedBuilder = new EmbedBuilder()
            //側面の色を決めることができる
            //整数、16進数のカラー文字列、RGB値の配列、特定のカラー文字列で設定可能らしい
            .setColor(0x0099ff)
            //256文字以内
            .setTitle('Embed Title')
            .setURL('https://yukiosada.work/')
            //setAuthorのnameは、256文字以内
            .setAuthor({
                name: 'Yuki Osada',
                iconURL:
                    'https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&',
                url: 'https://yukiosada.work/',
            })
            //4096文字以内
            .setDescription('Embed description')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&'
            )
            //フィールドの数は、25個以内
            //nameは、256文字以内
            //valueは、1024文字以内
            .addFields(
                { name: 'Regular field title', value: 'Some field value', inline: false },
                //以下のように書くと、空のフィールドを作れる
                { name: '\u200B', value: '\u200B', inline: false },
                //inline：trueにすると、{name: "", value: ""} ごとに改行されない
                { name: 'Inline: true', value: 'sample text', inline: true },
                { name: 'Inline: true', value: 'sample text', inline: true },
                { name: 'Inline: true', value: 'sample text', inline: true },
                //inline: falseにすると、文字は折り返されない
                { name: 'Inline: false', value: 'sample text', inline: false },
                { name: 'Inline: false', value: 'sample text', inline: false },
                { name: 'Inline: false', value: 'sample text', inline: false }
            )
            .addFields(
                { name: 'additional Inline field title', value: 'sample text', inline: false },
                //valueは、1文字以上必要
                { name: 'The least value pattern', value: 'あ', inline: false },
                //URLのマスクができる
                { name: 'The least value pattern', value: '[My Website!](https://yukiosada.work/)', inline: false }
            )
            //画像を埋め込める
            //URLじゃないとだめらしい
            .setImage(
                'https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&'
            )
            //タイムスタンプも設置できる
            .setTimestamp()
            //setFooterのtextは、2024文字以内
            .setFooter({
                text: 'Embed footer text',
                iconURL:
                    'https://cdn.discordapp.com/attachments/831456338513100810/1042555381815181392/sdfgf.png?ex=660492dc&is=65f21ddc&hm=faf68c3d1e898bb89abb6231c286a8143d8dad742a43d33ec2baa5982f4fdeda&',
            });

        interaction.reply({ embeds: [exampleEmbed] });
    },
};

const embedLocalImgSample = {
    data: new SlashCommandBuilder().setName('embed-local-img').setDescription('Embed local image'),
    async execute(interaction: CommandInteraction) {
        //*ローカルの画像を表示する方法
        //*プロジェクト直下のパスからの絶対パス？でパスを設定する
        const img: AttachmentBuilder = new AttachmentBuilder('./src/commands/utility/sample.jpg');
        const localImgEmbed: EmbedBuilder = new EmbedBuilder()
            .setTitle('Local image embed title')
            .setImage('attachment://sample.jpg');

        interaction.reply({ embeds: [localImgEmbed], files: [img] });
    },
};

//*再送信と編集
//参照: https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
//※edit()は、よくわからない
const embedReplyAndEdit = {
    data: new SlashCommandBuilder().setName('embed-reply-and-edit').setDescription('replya and edit embed'),
    async execute(interaction: CommandInteraction) {
        const originEmbed = new EmbedBuilder().setTitle('Origin Title');

        await interaction.reply({ embeds: [originEmbed] });

        const message: Message<boolean> = await interaction.fetchReply();
        const receivedEmbed: Embed = message.embeds[0];
        const replyEmbed: EmbedBuilder = EmbedBuilder.from(receivedEmbed)
            .setTitle('New Title')
            .setDescription('new description');

        await interaction.followUp({ embeds: [replyEmbed] });
    },
};

//*リアクションの追加 (順番通り)
//参照: https://discordjs.guide/popular-topics/reactions.html
const reactionExample = {
    data: new SlashCommandBuilder().setName('reaction').setDescription('reaction sample'),
    async execute(interaction: CommandInteraction) {
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
        } catch (error) {
            console.error('One of the emojis failed to react:', error);
        }
    },
};

//*リアクションの追加 (順番不明)
const reactNonOrderSample = {
    data: new SlashCommandBuilder().setName('reaction-non-order').setDescription('reaction non order sample'),
    async execute(interaction: CommandInteraction) {
        //順番が重要でなければ以下のような書き方もできる
        await interaction.reply('It reacts regardless of the order :smile:');
        const message = await interaction.fetchReply();

        //*** reactionの追加 ***//
        Promise.all([message.react('1⃣'), message.react('2⃣'), message.react('3⃣')]).catch((error) =>
            console.error('One of the emojis failed to react:', error)
        );
    },
};

//*リアクションの全削除
const reactAllDelete = {
    data: new SlashCommandBuilder().setName('reaction-all-delete').setDescription('reaction all delete sample'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Reaction remove after 5 sec.');
        const message = await interaction.fetchReply();
        try {
            //reactionの追加
            await message.react('😄');
            await message.react('👷');
            await message.react('🐡');
            await message.react('🐚');
        } catch (error) {
            console.error('One of the emojis failed to react:', error);
        }

        //5秒待機
        await setTimeout(5_000);

        //*** reactionの削除 ***//
        //reactionの全削除
        await message.reactions.removeAll().catch((error) => console.error('Failed to clear reactions:', error));
    },
};

//*特定のリアクションの削除
const reactSpecificDelete = {
    data: new SlashCommandBuilder().setName('reaction-specific-delete').setDescription('reaction all delete sample'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Reaction remove after 5 sec.');
        const message = await interaction.fetchReply();
        try {
            //reactionの追加
            await message.react('🐡');
            await message.react('🐚');
            await message.react('🍏');
            await message.react('🐠');
        } catch (error) {
            console.error('One of the emojis failed to react:', error);
        }

        //5秒待機
        await setTimeout(5_000);

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

//*特定のリアクションの取得
//!なぜか、うまくできない
const reactSpecificGet = {
    data: new SlashCommandBuilder().setName('reaction-specific-get').setDescription('reaction all delete sample'),
    async execute(interaction: CommandInteraction) {
        const message = await interaction.reply({ content: 'Emoji Reaction!', fetchReply: true });

        //*** reactionの取得 ***//
        //*find()を使った場合
        //始めに見つかった絵文字のみ取得する
        const findEmoji: GuildEmoji | undefined = message.guild?.emojis.cache.find((emoji) => emoji.name === '🚙');
        if (typeof findEmoji === 'undefined') return;
        await message.react(findEmoji);

        //*get()を使った場合
        const getEmoji: GuildEmoji | undefined = message.client.emojis.cache.get('⛰');
        if (typeof getEmoji === 'undefined') return;
        await message.react(getEmoji);
    },
};

export {
    buttonSample,
    MenuSample,
    componentInteractionSample,
    componentInteractionAdvance,
    ModalSample,
    contextMenusUser,
    contentMenusMessage,
    MarkDownMassage,
    EmbedSample,
    embedLocalImgSample,
    embedReplyAndEdit,
    reactionExample,
    reactNonOrderSample,
    reactAllDelete,
    reactSpecificDelete,
    reactSpecificGet,
};
