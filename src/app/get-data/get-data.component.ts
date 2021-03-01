import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  rawDataPeople: any = [];
  rawDataPlanets: any = [];
  rawDataFilms: any = [];
  rawDataVehicles: any = [];
  rawDataStarships: any = [];
  rawDataSpecies: any = [];
  extractedCharacters: any = [];
  extractedPlanets: any = [];
  extractedFilms: any = [];
  extractedVehicles: any = [];
  extractedStarships: any = [];
  extractedSpecies: any = [];
  loading = false;
  peopleFilmArray = [];

  constructor(private service: FetchApiDataService, private http: HttpClient) { }

  ngOnInit() {
  }
  getDataPeople() {

    this.loading = true;
    let data = this.service.fetchPeopleData().subscribe(response => {
      this.extractedSpecies = null;
      this.extractedFilms = null;
      this.extractedVehicles = null;
      this.extractedStarships = null;
      this.extractedPlanets = null;
      this.rawDataPeople = response;
      this.extractedCharacters = this.rawDataPeople.results;
      this.loading = false;
      console.log(this.extractedCharacters)
      let spaghettiProperties = Object.keys(this.extractedCharacters);




      for (let i = 0; i < this.extractedCharacters.length; i++) {
        console.log(this.extractedCharacters[i].films)
        if (this.extractedCharacters[i].films.length > 0) {

          // this.extractedCharacters[i].tannn = "this"

          // console.log(this.extractedCharacters[i].films)
          var tempArray = [];
          this.extractedCharacters[i].films.forEach((value) => {
            console.log(value)
            let data = this.service.fetchFilmSpecificData(value).subscribe(response => {
              tempArray.push({ response })
              console.log(response)
              this.extractedCharacters[i].orange = response
              //   //this.extractedCharacters[index].tango = response
              //   // this.peopleFilmArray.push(response)
              //   //console.log(this.extractedCharacters[index].tango)

            })
          });

          console.log(tempArray)
          this.extractedCharacters[i].theFilms = tempArray;
          //console.log(this.extractedCharacters)

          // this.extractedCharacters[i].films.forEach((value, index) => {
          //   // console.log(value)
          //   // console.log(value + " " + index)
          //   //this.extractedCharacters.tango = value

          //   this.service.fetchFilmSpecificData(value).subscribe(response => {
          //     // console.log(response)
          //     this.peopleFilmArray.push(response)
          //     //console.log(this.peopleFilmArray)
          //     this.extractedCharacters[i].tango = response
          //     // this.extractedCharacters[index].tango = response
          //     // console.log(this.peopleFilmArray)
          //   })
          //   //this.peopleFilmArray.push(this.extractedCharacters[i].films)
          //   // console.log(index); // 0, 1, 2
          //   //console.log(value); // 9, 2, 5
          //   // let data = this.service.fetchFilmSpecificData(value).subscribe(response => {
          //   //   console.log(response)
          //   //   //this.extractedCharacters[index].tango = response
          //   //   // this.peopleFilmArray.push(response)
          //   //   //console.log(this.extractedCharacters[index].tango)

          //   // })

          // });

          //this.extractedCharacters[i].tango = this.peopleFilmArray

          //this.peopleFilmArray = null;


          // this.service.fetchFilmSpecificData(this.extractedCharacters[i].films).subscribe(response => {
          //   console.log(response)
          //   this.extractedCharacters[i].tango = this.peopleFilmArray[i]
          //   // console.log(this.peopleFilmArray)
          // })
          // this.peopleFilmArray.push(this.extractedCharacters[i].films)
        }
        //this.extractedCharacters[i].tango = this.peopleFilmArray;

        // this.tempOneArray.push(this.extractedCharacters[i].films[i])
        // let data = this.service.fetchFilmSpecificData(this.extractedCharacters[i].films[i]).subscribe(response => {
        //   console.log(response)
        //   this.peopleFilmArray.push(response)
        //   console.log(this.peopleFilmArray)
        // })
        // console.log(this.peopleFilmArray)
        // this.extractedCharacters.tabgo = this.peopleFilmArray
        this.peopleFilmArray = []
      }


      // this.peopleFilmArray.forEach((value, index) => {

      //   this.extractedCharacters.tango = value
      //   // console.log(index); // 0, 1, 2
      //   //console.log(value); // 9, 2, 5
      //   // let data = this.service.fetchFilmSpecificData(value).subscribe(response => {
      //   //   console.log(response)
      //   //   //this.extractedCharacters[index].tango = response
      //   //   // this.peopleFilmArray.push(response)
      //   //   //console.log(this.extractedCharacters[index].tango)

      //   // })

      // });




      // console.log(this.peopleFilmArray.length)
      // for (let i = 0; i < this.peopleFilmArray.length; i++) {
      //   console.log(typeof this.extractedCharacters)
      //   this.extractedCharacters.jinny = "tan"
      //   console.log(this.extractedCharacters[i])
      //   // this.service.fetchFilmSpecificData(this.peopleFilmArray[i]).subscribe(response => {
      //   //   console.log(response)
      //   //   this.extractedCharacters[i].tango = this.peopleFilmArray[i]
      //   //   // console.log(this.peopleFilmArray)
      //   // })


      // }
      //console.log(this.extractedCharacters)
      $("body").removeClass();
      $("body").addClass("people-bg");
    });
  }
  getDataPlanets() {
    this.loading = true;
    let data = this.service.fetchPlanetsData().subscribe(response => {
      this.extractedCharacters = null;
      this.extractedSpecies = null;
      this.extractedFilms = null;
      this.extractedVehicles = null;
      this.extractedStarships = null;
      this.rawDataPlanets = response;
      this.extractedPlanets = this.rawDataPlanets.results;
      this.loading = false;
      console.log(this.rawDataPlanets)
      $("body").removeClass();
      $("body").addClass("species-bg");
    });
  }
  getDataFilms() {
    this.loading = true;
    let data = this.service.fetchFilmsData().subscribe(response => {
      this.extractedCharacters = null;
      this.extractedSpecies = null;
      this.extractedVehicles = null;
      this.extractedStarships = null;
      this.extractedPlanets = null;
      this.rawDataFilms = response;
      this.extractedFilms = this.rawDataFilms.results;
      this.loading = false;
      console.log(this.rawDataFilms)
      $("body").removeClass();
      $("body").addClass("film-bg");
    });
  }
  getDataStarships() {
    this.loading = true;
    let data = this.service.fetchStarshipsData().subscribe(response => {
      this.extractedCharacters = null;
      this.extractedSpecies = null;
      this.extractedFilms = null;
      this.extractedVehicles = null;
      this.extractedPlanets = null;
      this.rawDataStarships = response;
      this.extractedStarships = this.rawDataStarships.results;
      this.loading = false;
      console.log(this.rawDataStarships)
    });
  }
  getDataVehicles() {
    this.loading = true;
    let data = this.service.fetchVehiclesData().subscribe(response => {
      this.extractedCharacters = null;
      this.extractedSpecies = null;
      this.extractedFilms = null;
      this.extractedStarships = null;
      this.extractedPlanets = null;
      this.rawDataVehicles = response;
      this.extractedVehicles = this.rawDataVehicles.results;
      this.loading = false;
      console.log(this.rawDataVehicles)
    });
  }
  getDataSpecies() {
    this.loading = true;
    let data = this.service.fetchSpeciesData().subscribe(response => {
      this.extractedCharacters = null;
      this.extractedVehicles = null;
      this.extractedFilms = null;
      this.extractedStarships = null;
      this.extractedPlanets = null;
      this.rawDataSpecies = response;
      this.extractedSpecies = this.rawDataSpecies.results;
      this.loading = false;
      console.log(this.rawDataSpecies)
    });
  }


}
