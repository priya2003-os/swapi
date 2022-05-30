import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/module/film';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-page-film',
  templateUrl: './page-film.component.html',
  styleUrls: ['./page-film.component.css'],
})
export class PageFilmComponent implements OnInit {
  public listFilm!: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((param) => {
    //   console.log(param['id-country']);

    //   this.apiService.getFilmById(param['id-country']).subscribe((response) => {
    //     console.log(response);
    //   });
    // });

    this.apiService.getAllFilm().subscribe((resp) => {
      console.log(resp);
      this.listFilm = resp.results;
    });
  }
}
