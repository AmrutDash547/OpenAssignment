import { Component , OnInit , HostListener } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'open-assignment';

  monthlyIncome = 150000;
  monthlyExpense = 50000;
  minIncome = 100000;
  maxIncome = 300000;
  repaymentTenureList = ['3 Months', '6 Months', '12 Months'];
  selectedTenure = '3 Months'
  isExsitingLoan = true
  emi = 15000;
  ovalCircle : number []=[];
  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
    for(let index=1; index<=22; index++){
      this.ovalCircle.push(index);
    }

  }

  monthlyIncomeChange(event: MatSliderChange) {
    this.monthlyIncome = event.value as number;
  }

  monthlyExpenseChange(event: MatSliderChange) {
    this.monthlyExpense = event.value as number;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 150;
  }
}
