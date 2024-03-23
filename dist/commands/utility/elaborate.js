"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoCompleteSample2 = exports.autoCompleteSample = exports.selectLang = exports.subCommandSample = exports.choiceIntegerSub = exports.choiceNumberSub = exports.choiceStringSub = exports.variousOptionsSub = exports.stringSubRequired = exports.stringSub = void 0;
const discord_js_1 = require("discord.js");
//*最も基本的なオプション付きのコマンドの1つ
const stringSub = {
    //*オプション
    //*オプションには、必ず名前(setName)と説明(setDescription)が必要
    data: new discord_js_1.SlashCommandBuilder()
        .setName('echo')
        .setDescription('echo like slash command')
        .addStringOption((option) => option.setName('input').setDescription('The input to echo back')),
    async execute(interaction) {
        const inputWord = interaction.options.get('input')?.value;
        await interaction.reply(`Typed word is: ${inputWord}`);
    },
};
exports.stringSub = stringSub;
//*setRequired(true) で必須オプションにする
const stringSubRequired = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('echo-require')
        .setDescription('echo like slash command')
        .addStringOption((option) => 
    //必須オプションをつけている
    option.setName('input').setDescription('The input to echo back').setRequired(true)),
    async execute(interaction) {
        const inputWord = interaction.options.get('input')?.value;
        await interaction.reply(`Typed word is: ${inputWord}`);
    },
};
exports.stringSubRequired = stringSubRequired;
//*Optionのいろいろ
const variousOptionsSub = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('various-options')
        .setDescription('various options')
        .addStringOption((option) => option.setName('string').setDescription('文字列を受け入れる'))
        .addIntegerOption((option) => option.setName('integer').setDescription('整数のみを受け入れる'))
        .addNumberOption((option) => option.setName('number').setDescription('整数と少数の両方を受け入れる'))
        .addBooleanOption((option) => option.setName('boolean').setDescription('真偽値のみを受け入れる'))
        .addAttachmentOption((option) => option.setName('attachment').setDescription('ファイルのアップロード'))
        .addChannelOption((option) => option.setName('channel').setDescription('不明'))
        .addRoleOption((option) => option.setName('role').setDescription('不明'))
        .addUserOption((option) => option.setName('user').setDescription('ユーザーID')),
    async execute(interaction) {
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
exports.variousOptionsSub = variousOptionsSub;
//*選択肢のオプション
// String, Number, Integerが使える
const choiceStringSub = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('choice-string')
        .setDescription('choice option')
        .addStringOption((option) => option.setName('string-choice').setDescription('string choice').setRequired(true).addChoices(
    //選択肢は、最大25個作ることができる
    //25子より多い場合は、autocompleteを使うとよい
    { name: 'option 1', value: 'option 1 selected!' }, { name: 'option 2', value: 'option 2 selected!' }, { name: 'option 3', value: 'option 3 selected!' })),
    async execute(interaction) {
        const chosenItem = interaction.options.get('string-choice')?.value;
        await interaction.reply(`Choice item is: ${chosenItem}`);
    },
};
exports.choiceStringSub = choiceStringSub;
const choiceNumberSub = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('choice-number')
        .setDescription('choice option')
        .addNumberOption((option) => option.setName('number-choice').setDescription('number choice').setRequired(true).addChoices(
    //選択肢は、最大25個作ることができる
    //25個より多い場合は、autocompleteを使うとよい
    { name: 'option 1', value: 1.12 }, { name: 'option 2', value: 2.232 }, { name: 'option 3', value: 3.233 })),
    async execute(interaction) {
        const chosenItem = interaction.options.get('number-choice')?.value;
        await interaction.reply(`Choice item is: ${chosenItem}`);
    },
};
exports.choiceNumberSub = choiceNumberSub;
const choiceIntegerSub = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('choice-integer')
        .setDescription('choice option')
        .addIntegerOption((option) => option.setName('integer-choice').setDescription('integer choice').setRequired(true).addChoices(
    //選択肢は、最大25個作ることができる
    //25子より多い場合は、autocompleteを使うとよい
    { name: 'option 1', value: 1 }, { name: 'option 2', value: 2 }, { name: 'option 3', value: 3 })),
    async execute(interaction) {
        const chosenItem = interaction.options.get('integer-choice')?.value;
        await interaction.reply(`Choice item is: ${chosenItem}`);
    },
};
exports.choiceIntegerSub = choiceIntegerSub;
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
    data: new discord_js_1.SlashCommandBuilder()
        .setName('subcommand-sample')
        .setDescription('subcommand sample!')
        .addSubcommandGroup((group) => group
        .setName('group-1')
        .setDescription('This is group 1')
        .addSubcommand((subcommand) => subcommand
        .setName('group-1-sub-1')
        .setDescription('This is a group 1 sub')
        .addStringOption((option) => option.setName('group-1-sub-1-string').setDescription('group-1-sub-1-string'))
        .addStringOption((option) => option.setName('group-1-sub-2-string').setDescription('group-1-sub-2-string'))))
        .addSubcommandGroup((group) => group
        .setName('group-2')
        .setDescription('This is group 2')
        .setName('group-2-sub-1')
        .setDescription('This is a group 2 sub')
        .addSubcommand((subcommand) => subcommand
        .setName('group-2-sub-1')
        .setDescription('This is a group 2 sub')
        .addBooleanOption((option) => option.setName('group-2-sub-1-string').setDescription('group-2-sub-2-string')))
        .addSubcommand((subcommand) => subcommand.setName('group-2-sub-2').setDescription('This is a group 2 sub'))),
    async execute(interaction) {
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
exports.subCommandSample = subCommandSample;
//*言語
//Localesの候補: https://discord.com/developers/docs/reference#locales
//*小文字のみしか使えない
const selectLang = {
    data: new discord_js_1.SlashCommandBuilder()
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
        .addStringOption((option) => option
        .setName('breed')
        .setDescription('Breed of dog')
        .setNameLocalizations({
        pl: 'rasa',
        de: 'rasse',
    })
        .setDescriptionLocalizations({
        pl: 'Rasa psa',
        de: 'Hunderasse',
    })),
    async execute(interaction) {
        const stringValue = interaction.options.get('breed')?.value;
        await interaction.reply(`reply: ${stringValue}`);
    },
};
exports.selectLang = selectLang;
//autocomplete
const sample_json_1 = __importDefault(require("../data/sample.json"));
//autocompleteの型を教えてくれた神動画: https://www.youtube.com/watch?v=-fc_GhSmSrY
//参考: https://qiita.com/Mori-chan/items/89ad3245443f1e8ace07
//参考: https://www.youtube.com/watch?v=3pw1aojfnpY&t=620s
//参考: https://www.youtube.com/watch?v=3pw1aojfnpY
const autoCompleteSample = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Search user!')
        .addStringOption((option) => option.setName('user').setDescription('user autocomplete').setRequired(true).setAutocomplete(true)),
    async commandFunc(interaction) {
        const userChoice = interaction.options.get('user')?.value;
        const user = sample_json_1.default.find((user) => user.id === userChoice);
        if (typeof user !== 'undefined') {
            interaction.reply(`User: ${user.name}`);
        }
    },
    async autocompleteFunc(interaction) {
        const focusedOption = interaction.options.getFocused(true);
        console.log(focusedOption);
        if (focusedOption.name === 'user') {
            const filteredChoices = sample_json_1.default.filter((user) => user.name.toLocaleLowerCase().startsWith(focusedOption.value.toLowerCase()));
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
            await interaction.respond(result.slice(0, 25)).catch(() => { });
        }
    },
};
exports.autoCompleteSample = autoCompleteSample;
//autocomplete2
const user1_json_1 = __importDefault(require("../data/user1.json"));
const user2_json_1 = __importDefault(require("../data/user2.json"));
const autoCompleteSample2 = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('autocomplete2')
        .setDescription('user1 user2 autocomplete')
        .addStringOption((option) => option.setName('user1').setDescription('user1 complete').setRequired(true).setAutocomplete(true))
        .addStringOption((option) => option.setName('user2').setDescription('user2 complete').setRequired(true).setAutocomplete(true)),
    async commandFunc(interaction) {
        const user1Choice = interaction.options.get('user1')?.value;
        const user2Choice = interaction.options.get('user2')?.value;
        const user1 = user1_json_1.default.find((user) => String(user.id) === user1Choice);
        const user2 = user2_json_1.default.find((user) => String(user.id) === user2Choice);
        if (typeof user1 !== 'undefined' && typeof user2 !== 'undefined') {
            await interaction.reply(`user1: ${user1.name} - ${user1.type}`);
            await interaction.followUp(`user2: ${user2.name} - ${user2.type} - ${user2.country}`);
        }
    },
    async autoCompleteFunc(interaction) {
        const focusedOption = interaction.options.getFocused(true);
        console.log(focusedOption);
        if (focusedOption.name === 'user1') {
            const filteredChoices = user1_json_1.default.filter((user) => user.name.toLocaleLowerCase().startsWith(focusedOption.value.toLocaleLowerCase()));
            const result = filteredChoices.map((choice) => {
                return {
                    name: `${choice.name} - ${choice.type}`,
                    value: String(choice.id),
                };
            });
            await interaction.respond(result.slice(0, 25)).catch(() => { });
        }
        else if (focusedOption.name === 'user2') {
            const filteredChoices = user2_json_1.default.filter((user) => user.name.toLocaleLowerCase().startsWith(focusedOption.value.toLocaleLowerCase()));
            const result = filteredChoices.map((choice) => {
                return {
                    name: `${choice.name} - ${choice.type}`,
                    value: String(choice.id),
                };
            });
            await interaction.respond(result.slice(0, 25)).catch(() => { });
        }
    },
};
exports.autoCompleteSample2 = autoCompleteSample2;
