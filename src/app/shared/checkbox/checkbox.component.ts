import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() info = "";
  @Input() isSelected = false;
  @Output() emitStatusCheckBox: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public emitStatus(e): void {
    this.emitStatusCheckBox.emit(e.target.checked);
  }
}
