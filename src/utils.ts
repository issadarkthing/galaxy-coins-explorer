import { MersenneTwister19937, Random } from "random-js";
import { isDeepStrictEqual } from "util"

export const BROWN = "#c66a10";
export const BLUE_BUTTON = "🔵";
export const WHITE_BUTTON = "⚪";
export const RED_BUTTON = "🔴";
export const BLACK_BUTTON = "⚫";
export const ATTOM_BUTTON = "⚛️";
export const RETURN_BUTTON = "↩️";
export const LEFTMOST_ARROW_BUTTON = "⏮️";
export const LEFT_ARROW_BUTTON = "◀️";
export const CURRENT_BUTTON = "⏺️";
export const RIGHT_ARROW_BUTTON = "▶️";
export const RIGHTMOST_ARROW_BUTTON = "⏭️";
export const REPEAT = "🔁";
export const DIAMOND = "🔹";
export const CROSSED_SWORD = "⚔️";

export function bold(str: string | number) {
  return `**${str}**`;
}

export function code(str: string | number) {
  return `\`${str}\``;
}

export function sleep(time: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), time * 1000);
  })
}

export const random = new Random(MersenneTwister19937.autoSeed());

export const currency = "<a:SpiralArms_Coin:938080604342325279>";


export function toNList(items: string[], start = 1) {
  if (items.length < 0) return "none";
  return items.map((x, i) => `${i + start}. ${x}`).join("\n");
}

class InvalidNumber extends Error {}

export function validateNumber(amount: number) {
  if (Number.isNaN(amount)) {
    throw new InvalidNumber("not a valid number");
  }
}

class InsufficientBalance extends Error {}
class ZeroAmount extends Error {}

export function validateAmount(amount: number, balance: number) {
  if (amount > balance) {
    throw new InsufficientBalance("insufficient balance");
  } else if (amount <= 0) {
    throw new ZeroAmount("zero amount is not allowed");
  }
}

class InvalidIndex extends Error {}

export function validateIndex<T>(index: number, arr: T[]) {
  if (index < 0 || index > arr.length - 1) 
    throw new InvalidIndex(`cannot find item in index ${index + 1}`);
}

function remove1<T>(item: T, arr: T[]) {
  const copy = [...arr];
  const index = copy.findIndex(x => isDeepStrictEqual(x, item));

  if (index !== undefined) {
    copy.splice(index, 1);
  }

  return copy;
}

export function remove<T>(item: T, arr: T[], count = 1) {
  for (let i = 0; i < count; i++) {
    arr = remove1(item, arr);
  }

  return arr;
}


export function formatPercent(num: number) {
  return `${(num * 100).toFixed(2)}%`
}


export const CYBER_SUIT = "<:cybersuit:938690479946600489>";
export const FORCE_FIELD = "<:forcefield:938690728282972231>";
export const HOVERSHOES = "<:hovershoes:938690888790573086>";
export const JETPACK = "<:jetpack:938691007506169907>";
export const KHINS = "<:Khins:938691158853443594>";
export const SUTAI = "<:Sutai:938691293465419906>";
export const VOHEALL = "<:Voheall:938691406992637982>";
export const FISH_CYBORG = "<:fishcyborg:938691601914556436>";
export const HOVER_DRONE = "<:hoverdrone:938691725902364682>";
export const K90 = "<:k90:938691869527920641>";
export const ROBO_DINOSAUR = "<:robodinosaur:938691985081004102>";
export const HOLOGRAM_HEAL = "<:hologramheal:938692130677882941>";
export const METEOR_SHOWER = "<:meteor_shower:938692259673702440>";
export const SATELLITE_DEFENSE_SYSTEM = "<:satellitedefensesystem:938692411964682250>";
export const BIONIC_MECHANICAL_ARM = "<:bionicmechanicalarm:938692551253295176>";
export const LASER_BLASTER = "<:laserblaster:938692681670991882>";
export const LIGHT_SABER = "<:lightsaber:938692816060690452>";
export const UFO_ABDUCTION = "<:ufoabduction:938693091672596570>";
