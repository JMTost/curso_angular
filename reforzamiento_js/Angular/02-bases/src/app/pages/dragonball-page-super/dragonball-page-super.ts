 // ! GENERACIÓN DE INYECCIÓN DE DEPENDENCIAS - DI

import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id : number,
  name : string,
  power : number
};

@Component({
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-page-super.html',
  selector : 'dragonball-super'
})


export class DragonballPageSuper {

  public dragonballService = inject(DragonballService);

  // powerClass = computed(() => {
  //   return {
  //     'text-danger' : true
  //   }
  // });

}
