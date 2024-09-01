import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ],
  });

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.login(process.env.TOKEN);