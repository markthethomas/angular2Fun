import {IDog} from '../interfaces/IDog';

export class Dog implements IDog {
  public name: string;
  public status: string;
  public inOffice: boolean;
  public image: string;
  constructor(configObject?: any) {
    this.name = configObject && configObject.name || null;
    this.status = configObject && configObject.status || null;
    this.inOffice = configObject && configObject.inOffice || null;
    this.image = configObject && configObject.image || null;
  }
}
