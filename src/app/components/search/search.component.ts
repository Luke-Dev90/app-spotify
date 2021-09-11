import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  loading:boolean;
  terminoLength:number= 0;
  artistas:any[] = [];
  constructor( private activedRouter:ActivatedRoute,
               private spoty:SpotifyService) { 
                 this.loading=false;
               }
  
  
  buscar(termino:string){
    this.terminoLength = termino.length;

    setTimeout(()=>{
      if(this.terminoLength>0){
        this.spoty.getArtista(termino)
          .subscribe( (data:any) =>{
            this.artistas = data;
            this.loading = false;
        });
      }else{
        this.artistas = [];
        this.loading = false;
      }
    },300);

   

  }
}

