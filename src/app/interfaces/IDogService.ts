export interface IDogService {
  fetch(all: boolean): Array<Dog>;
  delete(dog: Dog): boolean;
  update(dog: Dog): Dog;
  create(dog: Dog): Dog;
}
