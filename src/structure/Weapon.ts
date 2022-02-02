import { Message } from "discord.js";
import { Weapon as BaseWeapon } from "@jiman24/discordjs-rpg";
import { Player } from "../structure/Player";

export abstract class Weapon extends BaseWeapon {
  abstract price: number;

  static get all(): Weapon[] {
    return [
      new Axe(),
      new Sword(),
      new Dagger(),
      new Mace(),
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
      player.equippedWeapons.some(x => x.id === this.id)
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


class Axe extends Weapon {
  id = "bionic-mechanical-arm";
  name = "Bionic Mechanical Arm";
  attack = 20;
  price = 1000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363042775834674/bionic-mechanical-arm.png";
}

class Sword extends Weapon {
  id = "ufo-abduction";
  name = "UFO Abduction";
  attack = 30;
  price = 2000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363042972962906/ufo-abduction.png";
}

class Dagger extends Weapon {
  id = "light-saber";
  name = "Light Saber";
  attack = 40;
  price = 3000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363043191078942/light-saber.png";
}

class Mace extends Weapon {
  id = "laser-blaster";
  name = "Laser Blaster";
  attack = 45;
  price = 3500;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938363043375632394/laser-blaster.png"
}

class Blaster extends Weapon {
  id = "blaster";
  name = "Blaster";
  attack = 50;
  price = 4000;
}
