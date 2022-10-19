import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.numberOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.numberOfInstances;
  }
}
