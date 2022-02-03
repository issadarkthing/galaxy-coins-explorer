import { Command } from "@jiman24/commandment";
import { Message } from "discord.js";
import { Player } from "../structure/Player";

export default class extends Command {
  name = "profile";
  description = "show profile";
  aliases = ["p"];

  async exec(msg: Message) {

    const player = Player.fromUser(msg.author);
    const embed = player.show();

    embed.setAuthor({ name: player.name, iconURL: player.imageUrl });

    msg.channel.send({ embeds: [embed] });
  }
}
