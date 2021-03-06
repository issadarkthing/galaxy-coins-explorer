import { Command } from "@jiman24/commandment";
import { Message } from "discord.js";
import { client } from "../index";
import { bold, currency } from "../utils";
import { MessageEmbed } from "../structure/MessageEmbed";

export default class extends Command {
  name = "leaderboard";
  aliases = ["l"];
  description = "show leaderboard of rich players";

  exec(msg: Message) {

    const player = client.players.array()
      .sort((a, b) => b.coins - a.coins)
      .map((x, i) => `${i + 1}. ${x.name} \`${x.coins}\``)
      .slice(0, 10)
      .join("\n");

    const embed = new MessageEmbed(msg.author)
      .setColor("RANDOM")
      .setTitle("Leaderboard")
      .setDescription(bold(`Name | ${currency}\n`) + player);

    msg.channel.send({ embeds: [embed] });
  }
}

