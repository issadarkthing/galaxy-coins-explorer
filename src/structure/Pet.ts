import { Message } from "discord.js";
import { Pet as BasePet } from "@jiman24/discordjs-rpg";
import { Player } from "./Player";

export abstract class Pet extends BasePet {
  abstract price: number;

  static get all(): Pet[] {
    return [
      new Blob(),
      new Slime(),
      new Phoenix(),
      new Titanoboa(),
    ];
  }

  async buy(msg: Message) {

    const player = Player.fromUser(msg.author);

    if (player.coins < this.price) {
      msg.channel.send("Insufficient amount");
      return;
    }

    if (player.inventory.some(x => x.id === this.id)) {
      msg.channel.send("You already own this item");
      return;
    }

    player.coins -= this.price;
    player.inventory.push(this);

    player.save();
    msg.channel.send(`Successfully bought **${this.name}**!`);
  }
}

export class Blob extends Pet {
  id = "fish-cyborg";
  name = "Fish Cyborg";
  attack = 20;
  price = 13000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938367141126762506/fish-cyborg.png"
}

export class Slime extends Pet {
  id = "robo-dinosaur";
  name = "Robo Dinosaur";
  attack = 15;
  interceptRate = 0.2;
  price = 15000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938367141692964914/robo-dinosaur.png";
}

export class Phoenix extends Pet {
  id = "hover-drone";
  name = "Hover Drone";
  attack = 15;
  interceptRate = 0.2;
  price = 15000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938367141944643584/hover-drone.png";
}

export class Titanoboa extends Pet {
  id = "k90";
  name = "k90";
  attack = 5;
  interceptRate = 0.4;
  price = 30000;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938367142225670194/k90.png";
}

export class BeardedDragon extends Pet {
  name = "Bearded Dragon";
  id = "bearded-dragon";
  attack = 60;
  interceptRate = 0.1;
  price = 70000;
}

export class BabyDragon extends Pet {
  name = "Baby Dragon";
  id = "baby-dragon";
  attack = 20;
  interceptRate = 0.2;
  price = 55000;
}

export class Dog extends Pet {
  name = "Dog";
  id = "dog";
  attack = 10;
  interceptRate = 0.35;
  price = 60000;
}

