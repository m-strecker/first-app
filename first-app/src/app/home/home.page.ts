import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToCollegeFees() {
    this.router.navigateByUrl('/college-fees');
  }

  goToElectricityBills() {
    this.router.navigateByUrl('/electricity-bills');
  }

  goToGroceries() {
    this.router.navigateByUrl('/groceries');
  }

  goToOthers() {
    this.router.navigateByUrl('/others');
  }

}
