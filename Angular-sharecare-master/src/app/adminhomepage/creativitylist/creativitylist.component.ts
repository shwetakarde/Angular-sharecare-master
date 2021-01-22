import { Component, OnInit } from '@angular/core';
import { ArtisticService } from 'src/app/artistic.service';

@Component({
  selector: 'app-creativitylist',
  templateUrl: './creativitylist.component.html',
  styleUrls: ['./creativitylist.component.css']
})
export class CreativitylistComponent implements OnInit {

  constructor(private _service: ArtisticService) { }

  ngOnInit(): void {
    this.getAllCreativity();

  }
  allcreativity: any;

  getAllCreativity() {
    this._service.getcreativity().subscribe(
      (data) => {
        this.allcreativity = data
        console.log(this.allcreativity);
        console.log("response recieved");
      },
      error => {
        console.log("Exception occured");
      })

  }
}

