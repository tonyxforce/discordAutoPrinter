import { Collection, Events, InteractionType } from 'discord.js';
const cooldown = new Collection();

export var name = Events.InteractionCreate

export async function execute(interaction, commandData) {
	const { client } = interaction;
	if (interaction.type === InteractionType.ApplicationCommand) {
		if (interaction.user.bot) {
			return;
		}

		try {
			const command = commandData.commands.get(interaction.commandName);
			command.exec(client, interaction);

		} catch (e) {
			console.error(e);
			interaction.reply({ content: "I fucked something up, please don't try again ever again", ephemeral: false });
		}
	}
}
