import { EmbedBuilder, PermissionsBitField } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';


export let prefixData: {
	name: 'ping',
	aliases: ['pong'],
}
export let slashData = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Pong!')

export async function slashRun(client, interaction) {
	interaction.reply('Pong 🏓');
}