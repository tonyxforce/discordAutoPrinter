import { SlashCommandBuilder } from '@discordjs/builders';

export let data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Pang!')
export async function exec(client, interaction) {
	interaction.reply('Pong 🏓');
}