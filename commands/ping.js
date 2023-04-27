// Importando as dependências necessárias.
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    // Criando uma nova instância de SlashCommandBuilder para definir as informações do comando
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Veja o ping do bot!'),

    // Definindo a função que será executada quando o comando for acionado
	async execute(interaction) {

        // Criando uma EmbedBuilder para construir uma mensagem em embed.
        const embedPing = new EmbedBuilder()
        .setColor('Green')
        .setDescription(`Seu ping é ${interaction.client.ws.ping}`)

        // Respondendo a interação do usuário com a Embed, informando o ping do bot.
		await interaction.reply({ embeds: [embedPing], ephemeral: true });
	},
};