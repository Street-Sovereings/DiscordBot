import { Client, Interaction } from 'discord.js';

export default async function handleInteractionCreate(client: Client, interaction: Interaction) {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
}