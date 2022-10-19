import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static NecroCout = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.NecroCout += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.NecroCout;
  }
}