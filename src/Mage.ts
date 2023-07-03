import ISpell from "./IMagic";

export default class Mage {
  name: string;
  mana: number;
  spell: ISpell;

  constructor(name: string, mana: number, spell: ISpell) {
    this.name = name;
    this.mana = mana;
    this.spell = spell;
  }

  castSpell(): string {
    if (this.mana < this.spell.manaCost) {
      return "Not enough mana!";
    }

    this.mana -= this.spell.manaCost;
    return this.spell.cast();
  }

  hit(): number {
    return this.spell.damage;
  }
}
