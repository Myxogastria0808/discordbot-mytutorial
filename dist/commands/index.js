"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayhello = void 0;
const discord_js_1 = require("discord.js");
const sayhello = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('hey')
        .setDescription('挨拶に反応してbotが返事をします。'),
    async execute(interaction) {
        await interaction.reply('Fuck');
    },
};
exports.sayhello = sayhello;
