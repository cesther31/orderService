import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Order{
  id: number,
  buyer: String,
  product: String,
  productCnt: number,
  totalPrice: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  togglePokemon: boolean = true;

  constructor(){
    this.title = "service"
  }

  // orders: Order[] = [(

  // )]

}
