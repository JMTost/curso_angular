import { Component, input, OnInit, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html'
})

export class CharacterAdd{
  name = signal('');
  power = signal(0);
  characters = input.required<Character[]>();
  // generación de evento
                // !caso contrario al input <recibir> -> <mandar>
  newCharacter = output<Character>();

  addCharacter() {
     if (!this.name() || !this.power() || this.power() <= 0){
      return ;
    }

    console.log(this.name(), this.power());
    const newCharacter : Character = {
        id : this.characters().length + 1,
        name : this.name(),
        power : this.power()
    };
    console.warn(newCharacter);
    this.newCharacter.emit(newCharacter);
    // this.characters().update( (list) => [...list, newCharacter]);
    this.resetFields();

  }
   resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
