import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  data = {
    name: 'Joaquin',
    debts:[
      {name: 'Netflix', debt: 350, isSelected: false},
      {name: 'Spotify', debt: 200, isSelected: false},
      {name: 'Mercado Libre', debt: 1300, isSelected: false}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  msg(obj, event){
    console.log("[Container]"+obj, event);
  }

}
