import { routerAnimation } from 'src/app/components/animations/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  animations: [routerAnimation()],
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }

}
