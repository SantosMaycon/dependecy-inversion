export default interface ISpell { // Example of concrete implementation (Fireball, Frostbolt.)
    name: string;
    damage: number;
    manaCost: number;
    cast: () => string;
}
