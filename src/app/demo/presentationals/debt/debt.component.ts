import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {

  @Input() debts;
  @Output() emitStatusCheckBox: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reEmiter(event: boolean): void{
    this.emitStatusCheckBox.emit(event);
  }

}
