import { Fighter, Skill as BaseSkill } from "@jiman24/discordjs-rpg";
import { Message, MessageEmbed } from "discord.js";
import { oneLine } from "common-tags";
import { formatPercent, code } from "../utils";
import { Player } from "./Player";

export abstract class Skill extends BaseSkill {
  abstract price: number;

  static get all(): Skill[] {
    return [
      new Rage(),
      new Heal(),
      new Defense(),
    ];
  }

  async buy(msg: Message) {

    const player = Player.fromUser(msg.author);

    if (player.coins < this.price) {
      msg.channel.send("Insufficient amount");
      return;
    }

    if (
      player.inventory.some(x => x.id === this.id) ||
      player.skill?.id === this.id
    ) {
      msg.channel.send("You already own this skill");
      return;
    }

    player.coins -= this.price;
    player.inventory.push(this);

    player.save();
    msg.channel.send(`Successfully bought **${this.name}**`);
  }
}

export class Rage extends Skill {
  name = "Meteor Shower";
  id = "meteor-shower";
  description = "Does double damage when activated temporarily";
  price = 45_000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938369672313724968/meteor_shower.png";

  use(p1: Fighter, _p2: Fighter) {

    p1.attack *= 2;

    const embed = new MessageEmbed()
      .setTitle("Skill interception")
      .setColor("GREEN")
      .setDescription(
        oneLine`${p1.name} uses **${this.name} Skill** and increases their
        strength to ${code(p1.attack)}!`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }

  close(p1: Fighter, _p2: Fighter) {
    p1.attack /= 2;
  }
}

export class Heal extends Skill {
  name = "Hologram Heal";
  id = "hologram-heal";
  description = "Heals 20% of hp when activated";
  price = 55_000;
  interceptRate = 0.1;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938369672083025950/hologram-heal.png"

  use(p1: Fighter, _p2: Fighter) {

    const healAmount = Math.ceil(p1.hp * 0.2);
    p1.hp += healAmount;

    const embed = new MessageEmbed()
      .setTitle("Skill interception")
      .setColor("GREEN")
      .setDescription(
        oneLine`${p1.name} uses **${this.name} Skill** and heals
        ${code(healAmount)}HP !`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }

  close(_p1: Fighter, _p2: Fighter) {}
}


export class Defense extends Skill {
  name = "Satellite Defense System";
  id = "satellite defense system";
  description = "Increase armor for 10% when activated";
  price = 50_000;
  interceptRate = 0.25;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938369671349026826/satellite-defense-system.png";

  use(p1: Fighter, _p2: Fighter) {

    const armorAmount = p1.armor * 0.1;
    p1.armor += armorAmount;

    const embed = new MessageEmbed()
      .setTitle("Skill interception")
      .setColor("GREEN")
      .setDescription(
        oneLine`${p1.name} uses **${this.name} Skill** and increases
        ${code(formatPercent(armorAmount))}armor !`
      )

    if (this.imageUrl)
      embed.setThumbnail(this.imageUrl);

    return embed;
  }

  close(_p1: Fighter, _p2: Fighter) { }
}
