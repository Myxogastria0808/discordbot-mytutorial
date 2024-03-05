import { SlashCommandBuilder } from 'discord.js';

const sayhello = {
    data: new SlashCommandBuilder()
        .setName('hey')
        .setDescription('挨拶に反応してbotが返事をします。'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('Fuck');
    },
};

export { sayhello };
