import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
  error:boolean;
  nuevasCanciones: any[]=[];
  loading:boolean;
  mensaje:string = "";
  constructor( private spotify:SpotifyService) { 
    this.loading = true;
    this.error = false;

    setTimeout( () =>{
      this.spotify.getNewReleases()
      .subscribe( data => {
          this.nuevasCanciones = data;
          this.loading=false;
        },
        (errorServicio)=> {
          this.error = true;
          this.loading = false;
          this.mensaje=errorServicio.error.error.message;
        }
      )
    },300);

  }



}
