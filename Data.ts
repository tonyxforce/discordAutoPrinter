import { Collection } from "discord.js"

export interface Data {
	commands: Collection<any, any>
	commandAliases: Collection<any, any>
	slashCommands: Collection<any, any>
	slashDatas: Array<any>
}