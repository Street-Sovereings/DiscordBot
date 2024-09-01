import { registeredCommands } from "./commands/register";

const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildIntegrations,
  ],
});

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

client.on('ready', async () => {
  console.log('Bot is ready!');

  try {
    await rest.put(Routes.applicationGuildCommands(client.user.id, process.env.GUILD_ID), {
      body: registeredCommands,
    });

    console.log('Successfully registered slash command');
  } catch (error) {
    console.error(error);
  }
});

client.on('interactionCreate', async (interaction: any) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.TOKEN);