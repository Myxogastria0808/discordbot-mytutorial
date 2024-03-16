import { AutocompleteInteraction, CommandInteraction, SlashCommandBuilder } from 'discord.js';

//*最も基本的なオプション付きのコマンドの1つ
const stringSub = {
    //*オプション
    //*オプションには、必ず名前(setName)と説明(setDescription)が必要
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('echo like slash command')
        .addStringOption((option) => option.setName('input').setDescription('The input to echo back')),
    async execute(interaction: CommandInteraction) {
        const inputWord = interaction.options.get('input')?.value;
        await interaction.reply(`Typed word is: ${inputWord}`);
    },
};

//*setRequired(true) で必須オプションにする
const stringSubRequired = {
    data: new SlashCommandBuilder()
        .setName('echo-require')
        .setDescription('echo like slash command')
        .addStringOption((option) =>
            //必須オプションをつけている
            option.setName('input').setDescription('The input to echo back').setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        const inputWord = interaction.options.get('input')?.value;
        await interaction.reply(`Typed word is: ${inputWord}`);
    },
};

//*Optionのいろいろ
const variousOptionsSub = {
    data: new SlashCommandBuilder()
        .setName('various-options')
        .setDescription('various options')
        .addStringOption((option) => option.setName('string').setDescription('文字列を受け入れる'))
        .addIntegerOption((option) => option.setName('integer').setDescription('整数のみを受け入れる'))
        .addNumberOption((option) => option.setName('number').setDescription('整数と少数の両方を受け入れる'))
        .addBooleanOption((option) => option.setName('boolean').setDescription('真偽値のみを受け入れる'))
        .addAttachmentOption((option) => option.setName('attachment').setDescription('ファイルのアップロード'))
        .addChannelOption((option) => option.setName('channel').setDescription('不明'))
        .addRoleOption((option) => option.setName('role').setDescription('不明'))
        .addUserOption((option) => option.setName('user').setDescription('不明')),
    async execute(interaction: CommandInteraction) {
        const stringValue = interaction.options.get('string')?.value;
        const integerValue = interaction.options.get('integer')?.value;
        const numberValue = interaction.options.get('number')?.value;
        const booleanValue = interaction.options.get('boolean')?.value;
        const attachmentValue = interaction.options.get('attachment')?.value;
        const channelValue = interaction.options.get('channel')?.value;
        const roleValue = interaction.options.get('role')?.value;
        const userValue = interaction.options.get('user')?.value;
        await interaction.reply(`String value is: ${stringValue}`);
        await interaction.followUp(`Integer value is: ${integerValue}`);
        await interaction.followUp(`Number value is: ${numberValue}`);
        await interaction.followUp(`Boolean value is: ${booleanValue}`);
        await interaction.followUp(`Attachment value is: ${attachmentValue}`);
        await interaction.followUp(`Channel value is: ${channelValue}`);
        await interaction.followUp(`Role value is: ${roleValue}`);
        await interaction.followUp(`User value is: ${userValue}`);
    },
};

//*選択肢のオプション
// String, Number, Integerが使える
const choiceStringSub = {
    data: new SlashCommandBuilder()
        .setName('choice-string')
        .setDescription('choice option')
        .addStringOption((option) =>
            option.setName('string-choice').setDescription('string choice').setRequired(true).addChoices(
                //選択肢は、最大25個作ることができる
                //25子より多い場合は、autocompleteを使うとよい
                { name: 'option 1', value: 'option 1 selected!' },
                { name: 'option 2', value: 'option 2 selected!' },
                { name: 'option 3', value: 'option 3 selected!' }
            )
        ),
    async execute(interaction: CommandInteraction) {
        const chosenItem = interaction.options.get('string-choice')?.value;
        await interaction.reply(`Choice item is: ${chosenItem}`);
    },
};

const choiceNumberSub = {
    data: new SlashCommandBuilder()
        .setName('choice-number')
        .setDescription('choice option')
        .addNumberOption((option) =>
            option.setName('number-choice').setDescription('number choice').setRequired(true).addChoices(
                //選択肢は、最大25個作ることができる
                //25個より多い場合は、autocompleteを使うとよい
                { name: 'option 1', value: 1.12 },
                { name: 'option 2', value: 2.232 },
                { name: 'option 3', value: 3.233 }
            )
        ),
    async execute(interaction: CommandInteraction) {
        const chosenItem = interaction.options.get('number-choice')?.value;
        await interaction.reply(`Choice item is: ${chosenItem}`);
    },
};

const choiceIntegerSub = {
    data: new SlashCommandBuilder()
        .setName('choice-integer')
        .setDescription('choice option')
        .addIntegerOption((option) =>
            option.setName('integer-choice').setDescription('integer choice').setRequired(true).addChoices(
                //選択肢は、最大25個作ることができる
                //25子より多い場合は、autocompleteを使うとよい
                { name: 'option 1', value: 1 },
                { name: 'option 2', value: 2 },
                { name: 'option 3', value: 3 }
            )
        ),
    async execute(interaction: CommandInteraction) {
        const chosenItem = interaction.options.get('integer-choice')?.value;
        await interaction.reply(`Choice item is: ${chosenItem}`);
    },
};

//*サブコマンド
// const subCommandSample = {
//     data: new SlashCommandBuilder()
//         .setName('subcommand-sample')
//         .setDescription('subcommand sample!')
//         .addSubcommand((subcommand) => subcommand.setName('first-command').setDescription('this is a first command'))
//         .addSubcommand((subcommand) =>
//             subcommand.setName('second-command').setDescription('This is a next command (second)')
//         ),
//     async execute(interaction: CommandInteraction) {},
// };
const subCommandSample = {
    data: new SlashCommandBuilder()
        .setName('subcommand-sample')
        .setDescription('subcommand sample!')
        .addSubcommandGroup((group) =>
            group
                .setName('group-1')
                .setDescription('This is group 1')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('group-1-sub-1')
                        .setDescription('This is a group 1 sub')
                        .addStringOption((option) =>
                            option.setName('group-1-sub-1-string').setDescription('group-1-sub-1-string')
                        )
                        .addStringOption((option) =>
                            option.setName('group-1-sub-2-string').setDescription('group-1-sub-2-string')
                        )
                )
        )
        .addSubcommandGroup((group) =>
            group
                .setName('group-2')
                .setDescription('This is group 2')
                .setName('group-2-sub-1')
                .setDescription('This is a group 2 sub')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('group-2-sub-1')
                        .setDescription('This is a group 2 sub')
                        .addBooleanOption((option) =>
                            option.setName('group-2-sub-1-string').setDescription('group-2-sub-2-string')
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('group-2-sub-2').setDescription('This is a group 2 sub')
                )
        ),
    async execute(interaction: CommandInteraction) {
        const group1Sub1String = interaction.options.get('group-1-sub-1-string')?.value;
        const group1Sub2String = interaction.options.get('group-1-sub-2-string')?.value;
        const group2Sub1String = interaction.options.get('group-2-sub-1-string')?.value;
        if (typeof group1Sub1String === 'string') {
            await interaction.reply(`Choice item is: ${group1Sub1String}`);
            await interaction.followUp(`Choice item is: ${group1Sub2String}`);
        }
        if (typeof group2Sub1String === 'boolean') {
            await interaction.reply(`Choice item is: ${group2Sub1String}`);
        }
    },
};

//*言語
//Localesの候補: https://discord.com/developers/docs/reference#locales
//*小文字のみしか使えない
const selectLang = {
    data: new SlashCommandBuilder()
        .setName('dog')
        .setNameLocalizations({
            pl: 'hello',
            de: 'nyoki',
        })
        .setDescription('Get a cute picture of a dog!')
        .setDescriptionLocalizations({
            pl: 'Słodkie zdjęcie pieska!',
            de: 'Poste ein niedliches Hundebild!',
        })
        .addStringOption((option) =>
            option
                .setName('breed')
                .setDescription('Breed of dog')
                .setNameLocalizations({
                    pl: 'rasa',
                    de: 'rasse',
                })
                .setDescriptionLocalizations({
                    pl: 'Rasa psa',
                    de: 'Hunderasse',
                })
        ),
    async execute(interaction: CommandInteraction) {
        const stringValue = interaction.options.get('breed')?.value;
        await interaction.reply(`reply: ${stringValue}`);
    },
};

//autocomplete
import users from '../data/sample.json';

type UserData = {
    id: string;
    name: string;
};
//autocompleteの型を教えてくれた神動画: https://www.youtube.com/watch?v=-fc_GhSmSrY
//参考: https://qiita.com/Mori-chan/items/89ad3245443f1e8ace07
//参考: https://www.youtube.com/watch?v=3pw1aojfnpY&t=620s
//参考: https://www.youtube.com/watch?v=3pw1aojfnpY
const autoCompleteSample = {
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Search user!')
        .addStringOption((option) =>
            option.setName('user').setDescription('user autocomplete').setRequired(true).setAutocomplete(true)
        ),
    async commandFunc(interaction: CommandInteraction) {
        const userChoice = interaction.options.get('user')?.value;
        const user: UserData | undefined = users.find((user) => user.id === userChoice);
        if (typeof user !== 'undefined') {
            interaction.reply(`User: ${user.name}`);
        }
    },
    async autocompleteFunc(interaction: AutocompleteInteraction) {
        const focusedOption = interaction.options.getFocused(true);
        console.log(focusedOption);
        if (focusedOption.name === 'user') {
            const filteredChoices = users.filter((user) =>
                user.name.toLocaleLowerCase().startsWith(focusedOption.value.toLowerCase())
            );

            // {
            //     name: "ユーザーに表示される名前 (stringである必要あり)",
            //     value: "id　(stringである必要あり)"
            // }
            const result = filteredChoices.map((choice) => {
                return {
                    name: `Id: ${choice.id}, Name: ${choice.name}`,
                    value: choice.id,
                };
            });

            //大量のデータが入ってくると失敗する可能性が高いため、catch(() => {})をつける (クラッシュ回避)
            //0~25個しか表示できないためにslice(0, 25)が必要
            await interaction.respond(result.slice(0, 25)).catch(() => {});
        }
    },
};

//autocomplete2
import user1Data from '../data/user1.json';
import user2Data from '../data/user2.json';

type User1 = { id: number; name: string; type: string };
type User2 = { id: number; name: string; type: string; country: string };

const autoCompleteSample2 = {
    data: new SlashCommandBuilder()
        .setName('autocomplete2')
        .setDescription('user1 user2 autocomplete')
        .addStringOption((option) =>
            option.setName('user1').setDescription('user1 complete').setRequired(true).setAutocomplete(true)
        )
        .addStringOption((option) =>
            option.setName('user2').setDescription('user2 complete').setRequired(true).setAutocomplete(true)
        ),
    async commandFunc(interaction: CommandInteraction) {
        const user1Choice = interaction.options.get('user1')?.value;
        const user2Choice = interaction.options.get('user2')?.value;
        const user1: User1 | undefined = user1Data.find((user) => String(user.id) === user1Choice);
        const user2: User2 | undefined = user2Data.find((user) => String(user.id) === user2Choice);
        if (typeof user1 !== 'undefined' && typeof user2 !== 'undefined') {
            await interaction.reply(`user1: ${user1.name} - ${user1.type}`);
            await interaction.followUp(`user2: ${user2.name} - ${user2.type} - ${user2.country}`);
        }
    },
    async autoCompleteFunc(interaction: AutocompleteInteraction) {
        const focusedOption = interaction.options.getFocused(true);
        console.log(focusedOption);

        if (focusedOption.name === 'user1') {
            const filteredChoices = user1Data.filter((user) =>
                user.name.toLocaleLowerCase().startsWith(focusedOption.value.toLocaleLowerCase())
            );
            const result = filteredChoices.map((choice) => {
                return {
                    name: `${choice.name} - ${choice.type}`,
                    value: String(choice.id),
                };
            });
            await interaction.respond(result.slice(0, 25)).catch(() => {});
        } else if (focusedOption.name === 'user2') {
            const filteredChoices = user2Data.filter((user) =>
                user.name.toLocaleLowerCase().startsWith(focusedOption.value.toLocaleLowerCase())
            );
            const result = filteredChoices.map((choice) => {
                return {
                    name: `${choice.name} - ${choice.type}`,
                    value: String(choice.id),
                };
            });
            await interaction.respond(result.slice(0, 25)).catch(() => {});
        }
    },
};

export {
    stringSub,
    stringSubRequired,
    variousOptionsSub,
    choiceStringSub,
    choiceNumberSub,
    choiceIntegerSub,
    subCommandSample,
    selectLang,
    autoCompleteSample,
    autoCompleteSample2,
};
