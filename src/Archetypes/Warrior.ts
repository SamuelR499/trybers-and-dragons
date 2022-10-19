import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static WarriorCout = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.WarriorCout += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.WarriorCout;
  }
}