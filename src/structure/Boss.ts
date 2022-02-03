import { Fighter } from "@jiman24/discordjs-rpg";
import { currency, KHINS, SUTAI, VOHEALL } from "../utils";
import { Defense, Heal, Rage } from "../structure/Skill";
import { Phoenix, Slime, Titanoboa } from "./Pet";

export abstract class Boss extends Fighter {
  abstract drop: number;
  abstract xpDrop: number;

  static get all(): Boss[] {
    return [
      new Cavernmonster(),
      new Vortexscreamer(),
      new Rottingseeker(),
    ];
  }

  show() {
    const embed = super.show();

    embed.addField(`${currency} Drop`, `${this.drop}`, true);
    embed.addField(`XP Drop`, `${this.xpDrop}`, true);

    return embed;
  }
}

export class Cavernmonster extends Boss {
  drop = 12000;
  xpDrop = 500;
  attack = 500;
  hp = 550;
  armor = 0.3;
  critChance = 0.1;
  critDamage = 3;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938370472687566868/007-alien.png";
  
  constructor() {
    super(`Sutai ${SUTAI}`);

    const skill = new Heal(); 
    skill.setOwner(this);

    const pet = new Slime()
    pet.setOwner(this);
  }
}

export class Vortexscreamer extends Boss {
  drop = 24000;
  xpDrop = 800;
  attack = 1200;
  hp = 1420;
  armor = 0.35;
  critChance = 0.2;
  critDamage = 3.4;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938370472960213002/001-alien.png";

  constructor() {
    super(`Voheall ${VOHEALL}`);

    const skill = new Rage(); 
    skill.setOwner(this);

    const pet = new Phoenix()
    pet.setOwner(this);
  }
}

export class Rottingseeker extends Boss {
  drop = 35000;
  xpDrop = 1000;
  attack = 2350;
  hp = 2570;
  armor = 0.39;
  critChance = 0.2;
  critDamage = 3.8;
  imageUrl = "https://cdn.discordapp.com/attachments/936892253807464458/938370473304158268/002-alien.png";

  constructor() {
    super(`Khins ${KHINS}`);

    const skill = new Defense(); 
    skill.setOwner(this);

    const pet = new Titanoboa()
    pet.setOwner(this);
  }
}

