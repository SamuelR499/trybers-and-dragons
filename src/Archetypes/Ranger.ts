import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static RangerCout = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.RangerCout += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.RangerCout;
  }
}