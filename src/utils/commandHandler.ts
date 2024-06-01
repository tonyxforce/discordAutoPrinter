import { Collection } from "discord.js";

const { readdirSync } = require('node:fs');

import { Data as CommandData } from "../../Data";

export async function execute(client) {
	var data: CommandData = {
		commands: new Collection(),
		commandAliases: new Collection(),
		slashCommands: new Collection(),
		slashDatas: [],
	}

	// - Handlers -
	const commandFolders = await readdirSync('./src/commands');

	await Promise.all(commandFolders.map(async category => {
		const commandFiles = await readdirSync(`./src/commands/${category}`);


		await Promise.all(commandFiles.map(async file => {

			const commands = await import(`../commands/${category}/${file}`);

			console.log(commands)
			if (commands) {

				if (!commands.slashData) return;
				// Slash Command
				const slashCommand = commands;
				data.slashDatas.push(slashCommand.slashData.toJSON());
				data.slashCommands.set(slashCommand.slashData.name, slashCommand);

			}
		}));
	}));
	return data;
};