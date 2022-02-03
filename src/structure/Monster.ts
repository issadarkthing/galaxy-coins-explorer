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

    const imageUrl = random.pick(imageUrls);
    this.name = this.getName(imageUrl);
    this.imageUrl = imageUrl;
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

  private getName(url: string) {
    return url.match(/\/([^\/]*)\.png$/)![1];
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

const imageUrls = [
  "https://cdn.discordapp.com/attachments/921236230220447835/938701495757598780/Orcidis.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701495937949766/Lendrun.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701496122478622/Scekveks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701496315424808/Teercer.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701496520949760/Nustor.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701496780988426/Sellois.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701497066213387/Scrussix.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701497275908096/Ghohaids.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701497498239006/Khendrud.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701497733111858/Tuks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701378900090900/Grozax.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701379235631144/Usnons.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701379608932363/Struktaks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701379868975104/Usti.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701380196106260/Akons.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701380426801202/Sholoids.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701380774924298/Huneal.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701381106290748/Vats.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701381517320212/Ildoui.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701381815111710/Dhehrod.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701225447284806/Oldru.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701225665380422/Aphroil.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701225883496458/Iqot.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701226088992778/Sailgrits.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701226294530128/Febers.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701226504241152/Inail.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701226718162964/Zogoi.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701226953027614/Xunuks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701227175313458/Ghaviens.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701227393437736/Crikkaiks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701034803572746/Mahuze.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701035051028530/Uged.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701035290132541/Ahnids.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701035931828245/Bhellan.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701036196098088/Scraktaks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701036456128512/Xeges.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701036720361482/Xieko.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701036921716757/Olnis.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701037127225374/Kolmo.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938701037462761522/Pheller.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700935037865984/Fadezer.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700935243374652/Zenix.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700935478272040/Khod.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700935755071528/Chaiphre.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700935985786880/Sheihloll.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700936212283403/Esbil.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700936459714570/Scrusu.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700936812044308/Scruukon.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700937155997736/Qhaciks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700937386672179/Dhenziels.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700674152144896/Nirkrels.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700674361872444/Dilphaex.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700674575794196/Ostruks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700674781311016/Aaceons.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700675016175626/Truls.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700675200733194/Shingus.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700675628535808/Ivoih.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700675821469746/Kraandeks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700676047978566/Qirrods.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700676291256320/Kiekkai.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700576009641984/Vikvok.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700576236113960/Craenuts.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700576450048040/Kron.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700576655560784/Xaatoins.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700576890445894/Coczen.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700577116925982/Hurleks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700577322438706/Zots.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700577611870259/Mazbie.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700577788002334/Crekveins.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700578077421598/Gad.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700461769383947/Ikzon.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700462054604820/Brongrill.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700462339788800/Cakto.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700462536917032/Drakvel.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700462813765662/Bidath.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700463040262144/Gocrel.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700463258345492/Uhnet.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700463635845160/Hanall.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700463904260117/Ghurkrins.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700464277561375/Ghuccun.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700310610853918/Krinkroils.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700310996738048/Nernai.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700311223210045/Aphri.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700311458099240/Scrud.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700311734927420/Taikvox.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700311953022996/Scal.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700312145977374/Ulzeds.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700312422789210/Zegos.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700312674435122/Ogmeins.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700312989040660/Brugnoids.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700099297640518/Krolvod.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700099486355526/Imno.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700099738030131/Thruudrads.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700100090355712/Occer.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700100329414666/Ehmi.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700100698505226/Muurkroi.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700100941795358/Rigno.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700101436706916/Shaelgai.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700101721915402/Qhevraiks.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/938700102015537172/Agval.png",
];
