import Mage from "../src/Mage";

const Fireball = jest.fn().mockImplementation(() => {
  return {
    name: "Fireball",
    damage: 30,
    manaCost: 50,
    cast: () => "Fireball!"
  };
});

const Frostbolt = jest.fn().mockImplementation(() => {
  return {
    name: "Frostbolt",
    damage: 20,
    manaCost: 30,
    cast: () => "Frostbolt!"
  };
});

describe('Mage', () => {
  it('should cast a spell', () => {
    const mage = new Mage('Gandalf', 100, new Fireball());
    expect(mage.castSpell()).toEqual('Fireball!');
  });

  it('should not cast a spell if not enough mana', () => {
    const mage = new Mage('Gandalf', 10, new Fireball());
    expect(mage.castSpell()).toEqual('Not enough mana!');
  });

  it('should hit', () => {
    const mage = new Mage('Gandalf', 100, new Fireball());
    expect(mage.hit()).toEqual(30);
  });

  it('should cast a frost spell', () => {
    const mage = new Mage('Gandalf', 100, new Frostbolt());
    expect(mage.castSpell()).toEqual('Frostbolt!');
  });
});
