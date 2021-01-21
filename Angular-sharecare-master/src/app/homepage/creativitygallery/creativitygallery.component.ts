import { Component, OnInit } from '@angular/core';
import { ArtisticService } from 'src/app/artistic.service';
import { Artistic } from 'src/app/artistic';
import { Router } from '@angular/router';



@Component({
  selector: 'app-creativitygallery',
  templateUrl: './creativitygallery.component.html',
  styleUrls: ['./creativitygallery.component.css']
})
export class CreativitygalleryComponent implements OnInit {

  constructor(private _service: ArtisticService, private _router: Router) { }
  artistic = new Artistic('');

  public allcreativity;
  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this._router.navigate(['/login']);
    }
    this.getAllCreativity();

  }

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
