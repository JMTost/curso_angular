import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id : number,
  name : string,
  power : number
};

@Component({
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.html',

})
export class DragonballPage {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id : 1, name : 'Goku', power : 9001
    }
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0){
      return ;
    }
    const newCharacter : Character = {
        id : this.characters().length + 1,
        name : this.name(),
        power : this.power()
    };
    // this.characters.update( (current) => {
    //   current.push(newCharacter);
    //   return current;
    // });
    this.characters.update ( list => [...list, newCharacter]);
      /*
      {
        id : current.length + 1,
        name : this.name(),
        power : this.power()
      });
      this.name.set('');
      this.power.set(0);
      return current;
    }
      */
    this.resetFields();

  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  // powerClass = computed(() => {
  //   return {
  //     'text-danger' : true
  //   }
  // });

}
