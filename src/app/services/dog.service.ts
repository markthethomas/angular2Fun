import {IDogService} from '../interfaces/IDogService';
import {Http, Response} from 'angular2/http';

export class DogService implements IDogService {
  private dogs: Array<Dog>;
  constructor() {
    this.dogs = [];
    this.initalize();
  }

  public create(): Dog {}
  public update(): Dog {}
  public delete(): boolean {}
  public fetch(all?: boolean): Array<Dog> {
    return this.dogs;
  }

  private initalize() {
    // http.get
  }
}
