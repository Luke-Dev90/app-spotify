import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  loading:boolean = true;
  artista:any ={
  }
  tracks:any[] = []
  constructor( private spoty:SpotifyService, private router:ActivatedRoute) { 
    this.router.params.subscribe( params =>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    }); 
  }


  getArtista(id:string){

    setTimeout(() => {
      this.spoty.getArtistId(id)
      .subscribe( artista =>{
        console.log(artista)
        this.artista = artista;
        this.loading = false;
      });
    }, 500);

  };
  
  getTopTracks(id:string){
    setTimeout(()=>{
      this.spoty.getTopTracks(id)
      .subscribe( topTracks =>{
        this.tracks = topTracks;
      });
    },500);
  }

}
