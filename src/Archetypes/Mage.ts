import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static mageCout = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.mageCout += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageCout;
  }
}
