import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artistic } from 'src/app/artistic';
import { ArtisticService } from 'src/app/artistic.service';

@Component({
  selector: 'app-creativity',
  templateUrl: './creativity.component.html',
  styleUrls: ['./creativity.component.css']
})
export class CreativityComponent implements OnInit {
  msg = '';
  constructor(private _service: ArtisticService, private _router: Router) { }

  ngOnInit(): void {
  }
  artisticModel = new Artistic('');
  addCreativity() {
    this._service.addCreativity(this.artisticModel).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/homepage'])

      },
      error => {
        console.log("exception occured");

      }

    )
  }
}
