import { Fighter } from "@jiman24/discordjs-rpg";
import { code, currency, random } from "../utils";
import { Player } from "./Player";
import { Skill } from "./Skill";
import { Pet } from "./Pet";

export class Monster extends Fighter {
  drop = random.integer(150, 500);
  xpDrop = random.integer(10, 35);
  difficulty: number;
  
  constructor(player: Player) {
    super("");

    const monsterData = random.pick(data);
    this.name = monsterData.name;
    this.imageUrl = monsterData.imageUrl;
    this.difficulty = player.level;
    this.attack = player.attack + this.randomAttrib();
    this.hp = player.hp + this.randomAttrib();
    this.armor = player.armor + (this.randomAttrib() / 100);
    this.critChance = player.critChance + (this.randomAttrib() / 100);
    this.critDamage = player.critDamage + random.integer(0.01, 0.5);

    if (player.skill) {
      const skill = random.pick(Skill.all);
      skill.setOwner(this);
    }

    if (player.pet) {
      const pet = random.pick(Pet.all);
      pet.setOwner(this);
    }
  }

  private randomAttrib() {
    return random.integer(-3, this.difficulty);
  }

  show() {
    const profile = super.show();

    profile.addField(`${currency} Drop`, code(this.drop), true);
    profile.addField("xp Drop", code(this.xpDrop), true);

    return profile;
  }
}

const data = [
  {
    name: "050 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373181847269396/050-alien.png",
  },
  {
    name: "048 Happy",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373182082134066/048-happy.png",
  },
  {
    name: "047 Amazed",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373182300229642/047-amazed.png",
  },
  {
    name: "044 Happy",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373182522540103/044-happy.png",
  },
  {
    name: "044 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373182757433404/044-alien.png",
  },
  {
    name: "042 Freak",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373182950367252/042-freak.png",
  },
  {
    name: "041 Amazed",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373183164264498/041-amazed.png",
  },
  {
    name: "041 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373183399141416/041-alien.png",
  },
  {
    name: "040 Sad",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373183705333790/040-sad.png",
  },
  {
    name: "039 Sad",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373183919251466/039-sad.png",
  },
  {
    name: "039 Alien 3",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373408993980467/039-alien_3.png",
  },
  {
    name: "037 Evil",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373409216274442/037-evil.png",
  },
  {
    name: "036 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373409455345704/036-alien.png",
  },
  {
    name: "035 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373409753169920/035-alien.png",
  },
  {
    name: "032 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373410222923816/032-alien.png",
  },
  {
    name: "028 UFO",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373410453585920/028-ufo.png",
  },
  {
    name: "026 Zombie",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373410730438676/026-zombie.png",
  },
  {
    name: "025 Worried",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373411091140658/025-worried.png",
  },
  {
    name: "024 Confused",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373411472809994/024-confused.png",
  },
  {
    name: "023 Scared",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373411753824316/023-scared.png",
  },
  {
    name: "023 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373491059740712/023-alien.png",
  },
  {
    name: "022 Angry",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373491261055006/022-angry.png",
  },
  {
    name: "021 Amused",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373491495952424/021-unamused.png",
  },
  {
    name: "020 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373491688869908/020-alien.png",
  },
  {
    name: "019 Worried",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373491877625886/019-worried.png",
  },
  {
    name: "019 Alien 3",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373492078956544/019-alien_3.png",
  },
  {
    name: "018 Evil",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373492305461278/018-evil.png",
  },
  {
    name: "017 Angry",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373492506779668/017-angry.png",
  },
  {
    name: "016 Love",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373492695515136/016-love.png",
  },
  {
    name: "015 In Love",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373492922024016/015-in_love.png",
  },
  {
    name: "014 Annoyed",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373571774906408/014-annoyed.png",
  },
  {
    name: "014 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373574148886568/014-alien.png",
  },
  {
    name: "013 Happy",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373574446694470/013-happy.png",
  },
  {
    name: "012 Annoyed",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373574639624252/012-annoyed.png",
  },
  {
    name: "012 Alien",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373574828359700/012-alien.png",
  },
  {
    name: "011 Excited",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373575029710908/011-Excited.png",
  },
  {
    name: "010 Happy",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373575197470720/010-happy.png",
  },
  {
    name: "009 Death",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373575558201374/009-death.png",
  },
  {
    name: "008 Excited",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373575809851412/008-Excited.png",
  },
  {
    name: "008 Alien 2",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373576099246151/008-alien_2.png",
  },
  {
    name: "007 Shocked",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373638338539530/007-shocked.png",
  },
  {
    name: "006 Silly",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373638556635146/006-silly.png",
  },
  {
    name: "006 Alien 2",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373638799888404/006-alien_2.png",
  },
  {
    name: "006 Alien 2",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373638799888404/006-alien_2.png",
  },
  {
    name: "005 Space Ship",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373639294840863/005-space_ship.png",
  },
  {
    name: "005 Love",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373639684902962/005-love.png",
  },
  {
    name: "004 Happy",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373640255307776/004-happy.png",
  },
  {
    name: "003 Angry",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373640616026192/003-angry.png",
  },
  {
    name: "002 Scared",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373640947380234/002-scared.png",
  },
  {
    name: "001 Bored",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373641417162802/001-bored.png",
  },
  {
    name: "010 Space Ship",
    imageUrl: "https://cdn.discordapp.com/attachments/936892253807464458/938373641924665364/010-space_ship.png",
  },
];
