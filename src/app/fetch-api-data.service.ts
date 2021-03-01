import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http: HttpClient) { }


  fetchPeopleData() {
    return this.http.get<any[]>('https://swapi.dev/api/people/')
  }

  fetchPlanetsData() {
    return this.http.get<any[]>('https://swapi.dev/api/planets/')
  }

  fetchFilmsData() {
    return this.http.get<any[]>('https://swapi.dev/api/films/')
  }

  fetchStarshipsData() {
    return this.http.get<any[]>('https://swapi.dev/api/starships/')
  }

  fetchVehiclesData() {
    return this.http.get<any[]>('https://swapi.dev/api/vehicles/')
  }

  fetchSpeciesData() {
    return this.http.get<any[]>('https://swapi.dev/api/species/')
  }
  fetchFilmSpecificData(id) {
    //console.log(id)
    return this.http.get<any[]>(id)
  }

}
