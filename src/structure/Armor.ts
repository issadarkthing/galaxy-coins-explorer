import { Message } from "discord.js";
import { Armor as BaseArmor } from "@jiman24/discordjs-rpg";
import { Player } from "../structure/Player";
import { CYBER_SUIT, FORCE_FIELD, HOVERSHOES, JETPACK } from "../utils";

export abstract class Armor extends BaseArmor {
  abstract price: number;

  static get all(): Armor[] {
    return [
      new Helmet(),
      new ChestPlate(),
      new Leggings(),
      new Boots(),
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
      player.equippedArmors.some(x => x.id === this.id)
    ) {
      msg.channel.send("You already own this item");
      return;
    }

    player.coins -= this.price;
    player.inventory.push(this);

    player.save();
    msg.channel.send(`Successfully bought **${this.name}**`);
  }
}


export class Helmet extends Armor {
  id = "hover-shoes";
  name = `Hover Shoes ${HOVERSHOES}`;
  price = 8500;
  armor = 0.005
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363892734771210/hovershoes.png";
}

export class ChestPlate extends Armor {
  id = "jetpack";
  name = `Jetpack ${JETPACK}`;
  price = 5000;
  armor = 0.006
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363892998995998/jetpack.png";
}

export class Leggings extends Armor {
  id = "force-field";
  name = `Force Field ${FORCE_FIELD}`;
  price = 4500;
  armor = 0.008;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363893221302272/force-field.png";
}

export class Boots extends Armor {
  id = "cyber-suit";
  name = `Cyber Suit ${CYBER_SUIT}`;
  price = 5500;
  armor = 0.011;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363893565259836/cyber-suit.png";
}
