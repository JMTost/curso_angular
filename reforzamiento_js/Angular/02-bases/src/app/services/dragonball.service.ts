import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


function loadFromLocalStorage() : Character[] {
  const characters = localStorage.getItem('characters');
  let charactersComplete : Character[] = [];
  if (characters) {
    const elemento = JSON.parse(characters);
    elemento.forEach((elementCharacter : Character) => {
      if (!Object.hasOwn(elementCharacter, 'id') || !Object.hasOwn(elementCharacter, 'name') || !Object.hasOwn(elementCharacter, 'power')) {
        console.log("No se acepta este elemento");
      } else {
        charactersComplete.push(elementCharacter);
      }
    });
  }
  // return characters ? JSON.parse(characters) : [];
  return charactersComplete;
  // return [];
}
      // clase con uso de inyección de dependencia
          //DI
      //FUNCIONALIDAD CENTRALIZADA DE LA INFORMACIÓN
@Injectable({providedIn : 'root'})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect( (event) => {
    console.log(`${event}   Character count: ${this.characters().length}`);
    localStorage.setItem("characters", JSON.stringify(this.characters()));
  });

  addCharacter(character : Character) {
    this.characters.update ( list => [...list, character]);
  }

}
