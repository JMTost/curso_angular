import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  //template permite generar el html desde el mismo componente
  // template : `
  //   <h1>Hola Mundo</h1>
  //   <h2>CounterComponent Page</h2>
  //   <h2>Creación de un template desde el component</h2>
  //   <!-- expresión de JS -->
  //   <p>Contador: {{ counter }}</p>

  //   <button (click)="increaseBy(1)">+1</button>
  //   <button (click)="increaseBy(-1)">-1</button>
  //   <button (click)="resetCounter()">Reset</button>
  // `,
  templateUrl : './counter-page.component.html',
  styles : `
    button {
      padding : 5px;
      margin : 5px 10px;
      width: 75px;
      color: white;
      background-color: cadetblue;
    }
  `,
  // changeDetection : ChangeDetectionStrategy.OnPush,// !ZONELESS
})

export class CounterPageComponent {

  counter = 10;

  //ceración de una señal
  counterSignal = signal(10);

  constructor() {
    // !Emplear el uso de señales
    // setInterval( () => {
    //   // this.counter += 1;
    //   // this.counterSignal.update( (current) => current  + 1 );
    //   this.increaseBy(1);
    //   console.log("tick");
    // }, 2000);
  }

  increaseBy(value : number) {
    this.counter += value;

    this.counterSignal.update( (previuosNumber) => previuosNumber + value );
  }

  resetCounter() {
    this.counter = 0;

    this.counterSignal.set(0);
  }

};
