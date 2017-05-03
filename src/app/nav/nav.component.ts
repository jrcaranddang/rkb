import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../window-size.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  logo:string = 'Rancho Kitchen & Baths';
  innerHeight: any;
  innerWidth: any;
  smallScreen: Boolean;
  constructor(
    private _windowSizeService: WindowSizeService) {

      
        //subscribe to the window resize event
        _windowSizeService.height$.subscribe((value:any) => {
          // console.log("height: " + value);
          this.innerHeight = value;
        });
        _windowSizeService.width$.subscribe((value:any) => {
          // console.log("width: " + value);
          this.innerWidth = value;
          this.smallScreen = (innerWidth <= 768) ? true: false;
        });
   }

  ngOnInit() {
  }

}
