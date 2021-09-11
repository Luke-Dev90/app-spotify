import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})
export class SpotifyService {
  

  constructor( private http:HttpClient) { 
      console.log("Service listo pa usar");
  }

  getQuery(query:string){
    
    const url = `https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer YourAuthorization'
    });

    return this.http.get(url,{headers});
  }


  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=18')
               .pipe( map( (data:any) => data['albums'].items));
  }
  
  getArtista(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( (data:any) =>  data['artists'].items )); 
  }
  
  getArtistId(id:string){
    return this.getQuery(`artists/${id}`);
               //.pipe( map( (data:any) => data));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map( (data:any) =>data['tracks']));
  }

}
