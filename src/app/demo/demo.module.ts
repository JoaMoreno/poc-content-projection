import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './containers/payments/payments.component';
import { CardComponent } from './presentationals/card/card.component';
import { DebtComponent } from './presentationals/debt/debt.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PaymentsComponent, CardComponent, DebtComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[PaymentsComponent, CardComponent, DebtComponent]
})
export class DemoModule { }
