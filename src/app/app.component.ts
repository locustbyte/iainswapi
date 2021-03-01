import { Component, ViewChild } from '@angular/core';
import { GetDataComponent } from './get-data/get-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'swapiApp';
  loading = false;

  @ViewChild(GetDataComponent, { static: false }) child: GetDataComponent;
  constructor() { }

  ngOnInit() {
  }
  getData() {
    this.loading = true;
    this.child.getDataPeople()
  }
  displayCharacters() {
  }
  getUrl() {
    return "url('assets/bgg.jpg')";
  }

}
