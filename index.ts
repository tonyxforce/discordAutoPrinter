import axios from "axios"
import { Client } from "discord.js"
import fs from "fs"
require("dotenv").config();

if (!fs.existsSync(".env")) {
	
	fs.writeFileSync(".env",
	`BOT_TOKEN=`
);
throw new Error("Fill out the .env file!");
};
